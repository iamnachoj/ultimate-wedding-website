import { z } from "zod";

export const rsvpSchema = z.object({
  assistance: z.enum([
    "confirm",
    "decline",
  ]),
  firstName: z
    .string()
    .trim()
    .min(2, "Introduce tu nombre"),

  lastName: z
    .string()
    .trim()
    .min(2, "Introduce tus apellidos"),

  menu: z.enum([
    "meat",
    "vegetarian",
    "fish",
  ]),

  foodNote: z
    .string()
    .trim()
    .optional(),

  bus: z.enum([
    "yes",
    "no",
  ]),

  busJourney: z
  .enum([
    "outbound",
    "return",
    "both",
  ])
  .optional(),

returnStop: z
  .enum([
    "montequinto",
    "melia",
    "puerta-jerez",
  ])
  .optional(),

  busNotes: z.string().optional(),

  favouriteDrink: z
    .string()
    .trim()
    .optional(),

  mustPlaySong: z
    .string()
    .trim()
    .optional()
});

export type RSVPFormData = z.infer<typeof rsvpSchema>;