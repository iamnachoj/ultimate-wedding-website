"use client";

import { useState } from "react";
import { Card } from "../ui/card";
import * as XLSX from "xlsx";

export function GuestTable({ guests }: { guests: any[] }) {

    function downloadExcel() {
  const data = filteredRows.map((guest) => ({
    Asistencia: guest.assistance === "confirm" ? "Sí" : "No",
    Nombre: `${guest.first_name} ${guest.last_name}`,
    Menú:
      guest.assistance !== "confirm"
        ? "—"
        : guest.menu === "meat"
        ? "Carne"
        : guest.menu === "fish"
        ? "Pescado"
        : guest.menu === "vegetarian"
        ? "Vegetariano"
        : guest.menu === "child"
        ? "Niño"
        : "—",
    Autobús: guest.bus === "yes" ? "Sí" : "No",
    Trayecto:
      guest.bus_journey === "outbound"
        ? "Ida"
        : guest.bus_journey === "return"
        ? "Vuelta"
        : guest.bus_journey === "both"
        ? "Ida y vuelta"
        : "—",
    "Parada vuelta":
      guest.return_stop === "montequinto"
        ? "Montequinto"
        : guest.return_stop === "melia"
        ? "Meliá Sevilla"
        : guest.return_stop === "puerta-jerez"
        ? "Puerta Jerez"
        : "—",
    "Notas autobús": guest.bus_notes ?? "",
    Bebida: guest.favourite_drink ?? "",
    Temazo: guest.must_play_song ?? "",
    "Observaciones comida": guest.food_note ?? "",
  }));

  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(workbook, worksheet, "Invitados");

  XLSX.writeFile(workbook, "invitados-boda.xlsx");
}

    const [rows, setRows] = useState(guests);
    const [nameFilter, setNameFilter] = useState("");

    const normalizedFilter = nameFilter.trim().toLowerCase();
    const filteredRows = rows.filter((guest) => {
        if (!normalizedFilter) return true;

        const fullName = `${guest.first_name ?? ""} ${guest.last_name ?? ""}`
            .trim()
            .toLowerCase();

        return fullName.includes(normalizedFilter);
    });

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

            <div className="border-b bg-stone-50 p-4">
                <label
                    htmlFor="guest-name-filter"
                    className="mb-2 block text-sm font-medium text-stone-700"
                >
                    Filtrar por nombre
                </label>
                <input
                    id="guest-name-filter"
                    type="text"
                    value={nameFilter}
                    onChange={(event) => setNameFilter(event.target.value)}
                    placeholder="Ej: María García"
                    className="max-w-[1000px] rounded-xl border border-stone-300 bg-white px-4 py-2 text-sm outline-none transition focus:border-stone-500"
                />
                 <button
                    onClick={downloadExcel}
                    className="mt-4 lg:mt-0 lg:ml-4 cursor-pointer rounded-xl bg-stone-900 px-5 py-2 text-white transition hover:bg-stone-700"
                >
                    Descargar Excel
                </button>
            </div>

            <div className="overflow-x-auto">

            <table className="w-full">

                <thead className="bg-stone-100">

                <tr>
                    <th className="px-5 py-4 text-left">Asistencia</th>

                    <th className="px-5 py-4 text-left">Nombre</th>

                    <th className="px-5 py-4 text-left">
                    Menú
                    </th>

                    <th className="px-5 py-4 text-left">
                    Autobús
                    </th>

                    <th className="px-5 py-4 text-left">
                     Trayecto
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

                {filteredRows.map((guest) => (
                    <tr
                    key={guest.id}
                    className="border-t transition-colors hover:bg-stone-50"
                    >

                    <td className="px-5 py-4 font-medium">
                        {guest.assistance === "confirm" ? "✅ Sí" : "❌ No"}
                    </td>
                    <td className="px-5 py-4 font-medium">
                        {guest.first_name} {guest.last_name}
                    </td>

                    <td className="px-5 py-4">
                        {guest.assistance === "confirm" ? (guest.menu === "meat" ? "Carne" : guest.menu === "fish" ? "Pescado" : guest.menu === "vegetarian" ? "Vegetariano" : guest.menu === "child" ? "Niño" : "—") : "—"}
                    </td>

                    <td className="px-5 py-4">
                        {guest.bus === "yes" ? "Sí" : "—"}
                    </td>

                    <td className="px-5 py-4">
                        {guest.bus_journey === "outbound" ? "Ida" : guest.bus_journey === "return" ? "Vuelta" : guest.bus_journey === "both" ? "Ida y vuelta" : "—"}
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