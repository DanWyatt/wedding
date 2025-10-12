import crypto from "node:crypto"
import { type NextRequest, NextResponse } from "next/server"
import { rsvpSchema } from "@/lib/rsvp-schema"
import { z } from "zod"

export async function POST(request: NextRequest) {
  try {
    if (typeof process.env.RSVP_ENDPOINT === 'undefined' || typeof process.env.HMAC_KEY === 'undefined') {
      throw new Error('Configuration error')
    }

    const body = await request.json()
    const validatedData = rsvpSchema.parse(body)
    const jsonData = JSON.stringify(validatedData).trim();
    const hash = crypto.createHmac('sha512', process.env.HMAC_KEY)
      .update(jsonData, 'utf8')
      .digest('hex');
    
    const serverRequest = await fetch(process.env.RSVP_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Body-HMAC': hash,
        'X-RSVP-Is-Live': process.env.VERCEL_ENV === 'production' ? '1' : '0'
      },
      body: jsonData
    });

    if (serverRequest.status !== 201) {
      throw new Error('Server request error')
    }

    return NextResponse.json(
      {
        success: true,
        message: "RSVP submitted successfully!",
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("RSVP submission error:", error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: error.issues.map((err) => ({
            field: err.path.join("."),
            message: err.message,
          })),
        },
        { status: 400 },
      )
    }

    return NextResponse.json({ error: "Failed to submit RSVP. Please try again later." }, { status: 500 })
  }
}
