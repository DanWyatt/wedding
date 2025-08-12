import { z } from "zod"

export const rsvpSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  attendance: z.enum(["yes", "no"], {
    required_error: "Please select your attendance status",
  }),
  guestCount: z.string().optional(),
  dietaryRestrictions: z.string().max(500, "Dietary restrictions must be less than 500 characters").optional(),
  songRequest: z.string().max(200, "Song request must be less than 200 characters").optional(),
  message: z.string().max(1000, "Message must be less than 1000 characters").optional(),
  events: z.array(z.string()).optional(),
})

export type RSVPFormData = z.infer<typeof rsvpSchema>
