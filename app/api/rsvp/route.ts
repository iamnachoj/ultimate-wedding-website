import { NextResponse } from "next/server";

import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    console.log('!!!!', body)

    const { error } = await supabase
      .from("guests")
      .insert({
        first_name: body.firstName,
        last_name: body.lastName,
        email: body.email,

        menu: body.menu,
        food_note: body.foodNote,

        bus: body.bus,

        favourite_drink: body.favouriteDrink,
        must_play_song: body.mustPlaySong,
      });

    if (error) {
      console.error(error);

      return NextResponse.json(
        { message: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch {
    return NextResponse.json(
      {
        message: "Unexpected error",
      },
      {
        status: 500,
      }
    );
  }
}