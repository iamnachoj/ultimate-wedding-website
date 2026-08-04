import { supabase } from "@/lib/supabase";

import { Card } from "@/components/ui/card";
import { GuestTable } from "@/components/admin/GuestTable";

export const dynamic = "force-dynamic";

export default async function AdminPage() {

  const { data: guests, error } = await supabase
    .from("guests")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    throw new Error(error.message);
  }
  // filter out guests that have declined the invitation
  const filteredGuests = guests.filter(
    (g) => g.assistance === "confirm"
  );
  const totalGuests = filteredGuests.length ;

  const busGuests = filteredGuests.filter((g) => g.bus === "yes").length;

  const meat = filteredGuests.filter(
    (g) => g.menu === "meat"
  ).length;

  const fish = filteredGuests.filter(
    (g) => g.menu === "fish"
  ).length;

  const vegetarians = filteredGuests.filter(
    (g) => g.menu === "vegetarian"
  ).length;

  const children = filteredGuests.filter(
    (g) => g.menu === "child"
  ).length;

  return (
    <main className="mx-auto max-w-7xl p-8 lg:p-12">

      <div className="mb-10">

        <h1 className="font-heading text-5xl">
          Panel de invitados
        </h1>

        <p className="mt-2 text-stone-500">
          Estado actual de las confirmaciones.
        </p>

      </div>

      {/* KPIs */}

      <div className="mb-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-6">

        <Card className="rounded-3xl p-6">
          <p className="text-sm uppercase tracking-widest text-stone-500">
            Confirmados
          </p>

          <p className="mt-3 text-5xl font-heading">
            {totalGuests}
          </p>
        </Card>

        <Card className="rounded-3xl p-6">
          <p className="text-sm uppercase tracking-widest text-stone-500">
            Autobús
          </p>

          <p className="mt-3 text-5xl font-heading">
            {busGuests}
          </p>
        </Card>

        <Card className="rounded-3xl p-6">
          <p className="text-sm uppercase tracking-widest text-stone-500">
            Carne
          </p>

          <p className="mt-3 text-5xl font-heading">
            {meat}
          </p>
        </Card>

        <Card className="rounded-3xl p-6">
          <p className="text-sm uppercase tracking-widest text-stone-500">
            Pescado
          </p>

          <p className="mt-3 text-5xl font-heading">
            {fish}
          </p>
        </Card>

        <Card className="rounded-3xl p-6">
          <p className="text-sm uppercase tracking-widest text-stone-500">
            Vegetarianos
          </p>

          <p className="mt-3 text-5xl font-heading">
            {vegetarians}
          </p>
        </Card>

        <Card className="rounded-3xl p-6">
          <p className="text-sm uppercase tracking-widest text-stone-500">
            Infantil
          </p>

          <p className="mt-3 text-5xl font-heading">
            {children}
          </p>
        </Card>

      </div>

      {/* Tabla */}
      <GuestTable guests={guests} />
    </main>
  );
}