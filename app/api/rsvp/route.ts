import { type NextRequest, NextResponse } from "next/server"
import { rsvpSchema } from "@/lib/rsvp-schema"
import { z } from "zod"

// This would typically use a real database connection
// For demo purposes, we'll simulate the database operation
async function saveRSVPToDatabase(formData: any) {
  // In a real application, you would:
  // 1. Connect to your MySQL database
  // 2. Insert the JSON data into the TEXT column
  // 3. Return the result

  // Example with a hypothetical database connection:
  // const connection = await mysql.createConnection({
  //   host: process.env.DB_HOST,
  //   user: process.env.DB_USER,
  //   password: process.env.DB_PASSWORD,
  //   database: process.env.DB_NAME,
  // })

  // const [result] = await connection.execute(
  //   'INSERT INTO rsvp_responses (form_data) VALUES (?)',
  //   [JSON.stringify(formData)]
  // )

  // await connection.end()
  // return result

  // For now, we'll just log the data and simulate success
  console.log("RSVP data to be saved:", JSON.stringify(formData, null, 2))
  return { insertId: Math.floor(Math.random() * 1000) }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate the form data using Zod schema
    const validatedData = rsvpSchema.parse(body)

    // Additional validation for attendance-specific fields
    if (validatedData.attendance === "yes") {
      if (!validatedData.guestCount) {
        return NextResponse.json({ error: "Guest count is required when attending" }, { status: 400 })
      }

      if (!validatedData.events || validatedData.events.length === 0) {
        return NextResponse.json({ error: "Please select at least one event to attend" }, { status: 400 })
      }
    }

    // Save to database
    const result = await saveRSVPToDatabase(validatedData)

    return NextResponse.json(
      {
        success: true,
        message: "RSVP submitted successfully!",
        id: result.insertId,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("RSVP submission error:", error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: error.errors.map((err) => ({
            field: err.path.join("."),
            message: err.message,
          })),
        },
        { status: 400 },
      )
    }

    return NextResponse.json({ error: "Failed to submit RSVP. Please try again." }, { status: 500 })
  }
}
