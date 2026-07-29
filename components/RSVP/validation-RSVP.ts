import { z } from "zod";

export const rsvpSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, "Introduce tu nombre"),

  lastName: z
    .string()
    .trim()
    .min(2, "Introduce tus apellidos"),

  email: z
    .string()
    .trim()
    .email("Correo electrónico no válido"),

  menu: z.enum([
    "standard",
    "vegetarian",
    "vegan",
  ]),

  foodNote: z
    .string()
    .trim()
    .optional(),

  bus: z.enum([
    "yes",
    "no",
  ]),

  favouriteDrink: z
    .string()
    .trim()
    .min(2, "Cuéntanos tu bebida favorita"),

  mustPlaySong: z
    .string()
    .trim()
    .min(2, "¡Queremos conocer ese temazo!"),
});

export type RSVPFormData = z.infer<typeof rsvpSchema>;