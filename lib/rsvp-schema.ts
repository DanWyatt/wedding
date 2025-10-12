import { z } from "zod"
import { DietaryRestrictions, DietaryRestriction, MealChoice, Starters, Mains, Desserts } from "@/app/rsvp/const"

const StarterEnum = z.enum([...Starters.map(s => s.key), "None", "UnsuitableForDietary"] as unknown as [string, ...string[]]);
const MainEnum = z.enum([...Mains.map(m => m.key), "None", "UnsuitableForDietary"] as unknown as [string, ...string[]]);
const DessertEnum = z.enum([...Desserts.map(d => d.key), "None", "UnsuitableForDietary"] as unknown as [string, ...string[]]);
const DietaryRestrictionEnum = z.enum(
  Object.keys(DietaryRestrictions) as [keyof typeof DietaryRestrictions, ...DietaryRestriction[]]
);

const attendeeSchema = z.object({
  name: z.string().min(1, "Attendee name is required").max(100, "Attendee name must be less than 100 characters"),
  hasDietaryRequirements: z.union([z.boolean(), z.literal(null)]),
  dietary: z.array(z.string<DietaryRestriction>()),
  dietaryNotes: z.string().optional(),
  starter: StarterEnum.optional(),
  main: MainEnum.optional(),
  dessert: DessertEnum.optional(),
});

export const rsvpSchema = z.object({
  groupName: z.string().min(1, "Group name is required").max(100, "Group name must be less than 100 characters"),
  attendance: z.enum(["all", "evening", "ceremony", "no"]),
  attendees: z.array(attendeeSchema).min(1),
  message: z.string().optional(),
  agreeTerms: z.boolean().optional(),
}).superRefine((data, ctx) => {
const { attendance, attendees, agreeTerms } = data;

  const path = (index: number, field: string) => ["attendees", index, field];

  if (attendance !== 'no' && !agreeTerms) {
    ctx.addIssue({
      code: "custom",
      message: "You must agree to the rules",
    });
  }

  attendees.forEach((attendee, index) => {
    const validateEnumField = (
      value: unknown,
      fieldName: string,
      schema: z.ZodEnum<any>
    ) => {
      if (value === undefined || value === null || value === "") {
        ctx.addIssue({
          path: path(index, fieldName),
          code: "custom",
          message: `${fieldName} is required.`,
        });
      } else {
        const parsed = schema.safeParse(value);
        if (!parsed.success) {
          ctx.addIssue({
            path: path(index, fieldName),
            code: "custom",
            message: `${fieldName} must be a valid option.`,
            options: schema.options,
          });
        }
      }
    };

    // Always validate name
    if (!attendee.name?.trim()) {
      ctx.addIssue({
        path: path(index, "name"),
        code: "custom",
        message: "Name is required.",
      });
    }

    // "all" and "ceremony": validate everything
    if (attendance === "all" || attendance === "ceremony") {
      validateEnumField(attendee.starter, "starter", StarterEnum);
      validateEnumField(attendee.main, "main", MainEnum);
      validateEnumField(attendee.dessert, "dessert", DessertEnum);
    }

    if (attendance !== "no") {
      if (attendee.hasDietaryRequirements === null) {
        ctx.addIssue({
          path: path(index, "hasDietaryRequirements"),
          code: "custom",
          message: "Please indicate if this person has dietary requirements.",
        });
      } else if (attendee.hasDietaryRequirements && (!attendee.dietary || attendee.dietary.length === 0)) {
        ctx.addIssue({
          path: path(index, "dietary"),
          code: "custom",
          message: "Please specify dietary restrictions.",
        });
      }
    }
  });
})

export type RSVPFormData = z.infer<typeof rsvpSchema>
