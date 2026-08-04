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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

const journeyLabels = {
  outbound: "Ida",
  return: "Vuelta",
  both: "Ida y vuelta",
};

export default function RSVPForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    control,
    watch,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RSVPFormData>({
    resolver: zodResolver(rsvpSchema),
    defaultValues: {
      assistance: "confirm",
      firstName: "",
      lastName: "",
      menu: "meat",
      foodNote: "",
      bus: "yes",
      busJourney: undefined,
      returnStop: undefined,
      busNotes: "",
      favouriteDrink: "",
      mustPlaySong: "",
    },
  });

  const bus = watch("bus");
  const busJourney = watch("busJourney");

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

      <div>
        <Label className="mb-2">
          ¿Nos acompañarás en nuestro gran día?
        </Label>

        <Controller
          control={control}
          name="assistance"
          render={({ field }) => (
            <RadioGroup
              value={field.value}
              onValueChange={field.onChange}
              className="mt-4 space-y-3 md:grid md:grid-cols-2"
            >
              <div className="flex items-center gap-3">
                <RadioGroupItem
                  value="confirm"
                  id="confirm"
                />

                <Label htmlFor="confirm">
                  Sí, ¡Por supuesto!
                </Label>
              </div>

              <div className="flex items-center gap-3">
                <RadioGroupItem
                  value="decline"
                  id="decline"
                />

                <Label htmlFor="decline">
                  No, lo siento
                </Label>
              </div>
            </RadioGroup>
          )}
        />

        {errors.assistance && (
          <p className="mt-2 text-sm text-red-500">
            {errors.assistance.message}
          </p>
        )}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <Label htmlFor="firstName" className="mb-2">
            Nombre
          </Label>

          <Input
            id="firstName"
            placeholder="Introduce tu nombre"
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
            placeholder="Introduce tus apellidos"
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
              className="mt-4 space-y-3 md:grid md:grid-cols-4"
            >
              <div className="flex items-center gap-3">
                <RadioGroupItem
                  value="meat"
                  id="meat"
                />

                <Label htmlFor="meat">
                  Carne
                </Label>
              </div>

              <div className="flex items-center gap-3">
                <RadioGroupItem
                  value="fish"
                  id="fish"
                />

                <Label htmlFor="fish">
                  Pescado
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
                  value="child"
                  id="child"
                />

                <Label htmlFor="child">
                  Infantil
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

      <div className="space-y-6">

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

  {bus === "yes" && (
    <div className="space-y-6 rounded-2xl border border-stone-200 bg-stone-50 p-6">

      {/* Trayecto */}

      <div>
        <Label htmlFor="busJourney">
          ¿Qué trayecto necesitas?
        </Label>

        <Controller
          control={control}
          name="busJourney"
          render={({ field }) => (
            <Select
              value={field.value}
              onValueChange={field.onChange}
            >
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Selecciona una opción">
                  {field.value ? journeyLabels[field.value] : undefined}
                </SelectValue>
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="both">
                  Ida y vuelta
                </SelectItem>

                <SelectItem value="outbound">
                  Ida (Torre del Oro · 13:30h)
                </SelectItem>

                <SelectItem value="return">
                  Vuelta (02:00h)
                </SelectItem>                
              </SelectContent>
            </Select>
          )}
        />
        {errors.busJourney && (
        <p className="mt-2 text-sm text-red-500">
          {errors.busJourney.message}
        </p>
        )}
      </div>

      {(busJourney === "return" || busJourney === "both") && (
        <div>

          <Label htmlFor="returnStop">
            ¿Dónde quieres bajarte?
          </Label>

          <Controller
            control={control}
            name="returnStop"
            render={({ field }) => (
              <Select
                value={field.value}
                onValueChange={field.onChange}
              >
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Selecciona una parada" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="montequinto">
                    Pubs de Montequinto
                  </SelectItem>

                  <SelectItem value="melia">
                    Meliá Sevilla
                  </SelectItem>

                  <SelectItem value="puerta-jerez">
                    Puerta Jerez
                  </SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          {errors.returnStop && (
            <p className="mt-2 text-sm text-red-500">
              {errors.returnStop.message}
            </p>
          )}
        </div>
      )}

      <div>
        <Label htmlFor="busNotes">
          Comentarios (opcional)
        </Label>

        <Controller
          control={control}
          name="busNotes"
          render={({ field }) => (
            <Textarea
              {...field}
              rows={4}
              placeholder="¿Necesitas indicarnos algo? (niños, carrito, movilidad reducida, etc.)"
              className="mt-2"
            />
          )}
        />

        <p className="mt-2 text-sm text-stone-500">
          La ida saldrá desde la <strong>Torre del Oro</strong> a las{" "}
          <strong>13:30h</strong>. La vuelta saldrá desde la hacienda a las{" "}
          <strong>02:00h</strong>.
        </p>
      </div>

    </div>
  )}

  </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <Label htmlFor="favouriteDrink" className="mb-2">
            ¿Con qué copa lo vas a dar todo?
          </Label>

          <Input
            id="favouriteDrink"
            placeholder="Ron cola ★"
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
            placeholder="La Macarena! 🎶"
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
          ✦ Revisa los datos antes de confirmar tu asistencia. Si necesitas realizar
          algún cambio más adelante, ponte en contacto con nosotros.
        </p>
        <p>
          ✦ No olvides pedirle a tu +1 que también rellene los datos, o rellenar el formulario por ellos.
        </p>
         <p>
          ✦ Por último, ¡ven con muchas ganas de disfrutar de la fiesta! ¡Te esperamos!
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