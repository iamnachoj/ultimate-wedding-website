import { z } from "zod";

export const rsvpSchema = z
  .object({
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
      "child",
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

    busNotes: z
      .string()
      .trim()
      .optional(),

    favouriteDrink: z
      .string()
      .trim()
      .optional(),

    mustPlaySong: z
      .string()
      .trim()
      .optional(),
  })
  .superRefine((data, ctx) => {
    // Si necesita autobús, debe elegir trayecto
    if (data.bus === "yes" && !data.busJourney) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["busJourney"],
        message: "Selecciona el trayecto del autobús.",
      });
    }

    // Si hace vuelta (o ida y vuelta), debe indicar la parada
    if (
      data.bus === "yes" &&
      (data.busJourney === "return" ||
        data.busJourney === "both") &&
      !data.returnStop
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["returnStop"],
        message: "Selecciona la parada de vuelta.",
      });
    }
  });

export type RSVPFormData = z.infer<typeof rsvpSchema>;