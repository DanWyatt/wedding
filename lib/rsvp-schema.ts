import { z } from "zod"
import { DietaryRestriction, MealChoice, Starters, Mains, Desserts } from "@/app/rsvp/const"

const attendeeSchema = z.object({
  name: z.string().min(1, "Attendee name is required").max(100, "Attendee name must be less than 100 characters"),,
  hasDietaryRequirements: z.boolean(),
  dietary: z.string<DietaryRestriction>(),
  dietaryNotes: z.string().optional(),
  starter: z.string<typeof Starters[number]["key"] | "None" | "UnsuitableForDietary">(),
  main: z.string<typeof Mains[number]["key"] | "None" | "UnsuitableForDietary">(),
  dessert: z.string<typeof Desserts[number]["key"] | "None" | "UnsuitableForDietary">(),
});

export const rsvpSchema = z.object({
  groupName: z.string().min(1, "Group name is required").max(100, "Group name must be less than 100 characters"),
  attendance: z.enum(["all", "evening", "ceremony", "no"]),
  message: z.string().optional(),
  agreeTerms: z.literal<boolean>(true, { error: () => ({ message: "You must agree to the rules", }), }),
})

export type RSVPFormData = z.infer<typeof rsvpSchema>
