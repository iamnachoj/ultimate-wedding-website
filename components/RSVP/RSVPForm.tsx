"use client";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { RSVPFormData, rsvpSchema } from "./validation-RSVP";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function RSVPForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RSVPFormData>({
    resolver: zodResolver(rsvpSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      menu: "standard",
      foodNote: "",
      bus: "yes",
      favouriteDrink: "",
      mustPlaySong: "",
    },
  });

  async function onSubmit(data: RSVPFormData) {
    const response = await fetch("/api/rsvp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      alert("Ha ocurrido un error.");
      return;
    }

    setSubmitted(true);
    reset();
  }

  if (submitted) {
    return (
      <div className="py-12 text-center">
        <h3 className="font-heading text-4xl">
          ¡Muchas gracias!
        </h3>

        <p className="mt-4 text-stone-600">
          Hemos recibido tu confirmación correctamente.
        </p>

        <Button
          className="mt-8 rounded-full"
          variant="outline"
          onClick={() => setSubmitted(false)}
        >
          Enviar otra respuesta
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <Label htmlFor="firstName" className="mb-2">
            Nombre
          </Label>

          <Input
            id="firstName"
            placeholder="Jesús"
            {...register("firstName")}
          />

          {errors.firstName && (
            <p className="mt-2 text-sm text-red-500">
              {errors.firstName.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="lastName" className="mb-2">
            Apellidos
          </Label>

          <Input
            id="lastName"
            placeholder="Castillo Bravo"
            {...register("lastName")}
          />

          {errors.lastName && (
            <p className="mt-2 text-sm text-red-500">
              {errors.lastName.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <Label htmlFor="email" className="mb-2">
          Correo electrónico
        </Label>

        <Input
          id="email"
          type="email"
          placeholder="correo@email.com"
          {...register("email")}
        />

        {errors.email && (
          <p className="mt-2 text-sm text-red-500">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <Label className="mb-2">
          Preferencia de Menú
        </Label>

        <Controller
          control={control}
          name="menu"
          render={({ field }) => (
            <RadioGroup
              value={field.value}
              onValueChange={field.onChange}
              className="mt-4 space-y-3"
            >
              <div className="flex items-center gap-3">
                <RadioGroupItem
                  value="standard"
                  id="standard"
                />

                <Label htmlFor="standard">
                  Estándar (Carne/Pescado)
                </Label>
              </div>

              <div className="flex items-center gap-3">
                <RadioGroupItem
                  value="vegetarian"
                  id="vegetarian"
                />

                <Label htmlFor="vegetarian">
                  Vegetariano
                </Label>
              </div>

              <div className="flex items-center gap-3">
                <RadioGroupItem
                  value="vegan"
                  id="vegan"
                />

                <Label htmlFor="vegan">
                  Vegano
                </Label>
              </div>
            </RadioGroup>
          )}
        />

        {errors.menu && (
          <p className="mt-2 text-sm text-red-500">
            {errors.menu.message}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="foodNote" className="mb-2">
          Alergias, intolerancias o preferencias
        </Label>

        <Textarea
          id="foodNote"
          rows={4}
          placeholder="Opcional. Por ejemplo: soy celíaco o alérgico a los frutos secos."
          {...register("foodNote")}
        />

        {errors.foodNote && (
          <p className="mt-2 text-sm text-red-500">
            {errors.foodNote.message}
          </p>
        )}
      </div>

      <div>
        <Label className="mb-2">
          ¿Necesitarás autobús?
        </Label>

        <Controller
          control={control}
          name="bus"
          render={({ field }) => (
            <RadioGroup
              value={field.value}
              onValueChange={field.onChange}
              className="mt-4 space-y-3"
            >
              <div className="flex items-center gap-3">
                <RadioGroupItem
                  value="yes"
                  id="bus-yes"
                />

                <Label htmlFor="bus-yes">
                  Sí
                </Label>
              </div>

              <div className="flex items-center gap-3">
                <RadioGroupItem
                  value="no"
                  id="bus-no"
                />

                <Label htmlFor="bus-no">
                  No
                </Label>
              </div>
            </RadioGroup>
          )}
        />

        {errors.bus && (
          <p className="mt-2 text-sm text-red-500">
            {errors.bus.message}
          </p>
        )}
      </div>
            <div className="grid gap-6 md:grid-cols-2">
        <div>
          <Label htmlFor="favouriteDrink" className="mb-2">
            Bebida favorita
          </Label>

          <Input
            id="favouriteDrink"
            placeholder="Tinto de verano 🍷"
            {...register("favouriteDrink")}
          />

          {errors.favouriteDrink && (
            <p className="mt-2 text-sm text-red-500">
              {errors.favouriteDrink.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="mustPlaySong" className="mb-2">
            Temazo indispensable
          </Label>

          <Input
            id="mustPlaySong"
            placeholder="I gotta a feeling 🎶"
            {...register("mustPlaySong")}
          />

          {errors.mustPlaySong && (
            <p className="mt-2 text-sm text-red-500">
              {errors.mustPlaySong.message}
            </p>
          )}
        </div>
      </div>
      <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4 text-center lg:text-left text-sm leading-6 text-stone-600"> 
        <p>
          🌸 Revisa los datos antes de confirmar tu asistencia. Si necesitas realizar
          algún cambio más adelante, ponte en contacto con nosotros.
        </p>
        <p>
          🌸 No olvides pedirle a tu +1 que también rellene los datos, o rellenar el formulario por ellos.
        </p>
         <p>
          🌸 Por último, ¡ven con muchas ganas de disfrutar de la fiesta! ¡Te esperamos!
        </p>
      </div>
      <div>
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="w-full rounded-full py-6 text-base"
        >
          {isSubmitting
            ? "Enviando..."
            : "Confirmar asistencia"}
        </Button>
      </div>
    </form>
  );
}