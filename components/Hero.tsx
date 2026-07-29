"use client";

import Image from "next/image";
import { Wedding } from "@/types/wedding";
import { Button } from "@/components/ui/button";
import Container from "@/components/layout/Container";
import { motion } from "motion/react";
import AnimatedSection from "./layout/AnimatedSection";

type Props = {
  wedding: Wedding;
};

export default function Hero({ wedding }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 10 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      <section className="flex min-h-screen items-center py-12 lg:py-24">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-36 xl:gap-40">

            {/* Texto */}

            <div className="text-center lg:text-left">

              <p className="mb-5 text-xs uppercase tracking-[0.45em] text-stone-500">
                Save the date
              </p>

              <h1 className="font-heading text-5xl leading-tight text-stone-900 sm:text-6xl lg:text-7xl xl:text-8xl">
                {wedding.couple.partner1}
                <span className="mx-4 text-stone-400">&</span>
                {wedding.couple.partner2}
              </h1>

              <p className="mt-6 text-lg text-stone-500 sm:text-xl">
                {wedding.date}
              </p>

              <p className="mx-auto mt-1 max-w-lg leading-8 text-stone-700 lg:mx-0">
                {wedding.heroText}
              </p>

              <Button
                size="lg"
                className="mt-5 rounded-full px-8"
              >
              <a href="#rsvp">Confirmar asistencia</a>
              </Button>

            </div>

            {/* Imagen */}
            <AnimatedSection>
              <div className="flex justify-center lg:justify-end">
                <Image
                  src={wedding.heroImage}
                  alt={`${wedding.couple.partner1} y ${wedding.couple.partner2}`}
                  width={650}
                  height={850}
                  priority
                  className="w-full max-w-md rounded-[2.5rem] object-cover shadow-xl"
                />
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>
    </motion.div>
  );
}