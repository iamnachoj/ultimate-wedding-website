"use client";

import { useState } from "react";
import { Card } from "../ui/card";

export function GuestTable({ guests }: { guests: any[] }) {
    const [rows, setRows] = useState(guests);

    async function deleteGuest(id: string) {
        const ok = window.confirm(
            "¿Seguro que quieres eliminar este invitado?"
        );

        if (!ok) return;

        const response = await fetch(`/api/guests/${id}`, {
            method: "DELETE",
        });

        if (!response.ok) {
            alert("No se ha podido eliminar.");
            return;
        }

        setRows((current) =>
            current.filter((guest) => guest.id !== id)
        );
    }

    return (
        <Card className="overflow-hidden rounded-3xl">

            <div className="overflow-x-auto">

            <table className="w-full">

                <thead className="bg-stone-100">

                <tr>

                    <th className="px-5 py-4 text-left">Nombre</th>

                    <th className="px-5 py-4 text-left">
                    Menú
                    </th>

                    <th className="px-5 py-4 text-left">
                    Bus
                    </th>

                    <th className="px-5 py-4 text-left">
                    Viaje de bus
                    </th>

                    <th className="px-5 py-4 text-left">
                    Para de vuelta
                    </th>

                    <th className="px-5 py-4 text-left">
                    Notas de viaje
                    </th>

                    <th className="px-5 py-4 text-left">
                    Bebida
                    </th>

                    <th className="px-5 py-4 text-left">
                    Temazo
                    </th>

                    <th className="px-5 py-4 text-left">
                    Observaciones de comida
                    </th>
                    <th className="px-5 py-4 text-right">
                        Acciones
                    </th>

                </tr>

                </thead>

                <tbody>

                {rows.map((guest) => (
                    <tr
                    key={guest.id}
                    className="border-t transition-colors hover:bg-stone-50"
                    >

                    <td className="px-5 py-4 font-medium">
                        {guest.first_name} {guest.last_name}
                    </td>

                    <td className="px-5 py-4">
                        {guest.menu}
                    </td>

                    <td className="px-5 py-4">
                        {guest.bus === "yes" ? "🚌 Sí" : "—"}
                    </td>

                    <td className="px-5 py-4">
                        {guest.bus_journey === "outbound" ? "Ida 🚌" : guest.bus_journey === "return" ? "Vuelta 🚌" : guest.bus_journey === "both" ? "Ida y vuelta 🚌" : "—"}
                    </td>

                    <td className="px-5 py-4">
                       {guest.return_stop === "montequinto" ? "Montequinto" : guest.return_stop === "melia" ? "Melia" : guest.return_stop === "puerta-jerez" ? "Puerta Jerez" : "—"}
                    </td>

                    <td className="px-5 py-4">
                        {guest.bus_notes || "—"}
                    </td>

                    <td className="px-5 py-4">
                        {guest.favourite_drink}
                    </td>

                    <td className="px-5 py-4">
                        {guest.must_play_song}
                    </td>

                    <td className="max-w-xs px-5 py-4 text-stone-600">
                        {guest.food_note || "—"}
                    </td>
                    <td className="px-5 py-4 text-right">
                        <button
                            onClick={() => deleteGuest(guest.id)}
                            className="text-red-500 transition hover:text-red-700"
                        >
                            Eliminar
                        </button>
                    </td>
                    </tr>
                ))}

                </tbody>

            </table>

            </div>

      </Card>
)}