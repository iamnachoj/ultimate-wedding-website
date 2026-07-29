import Image from "next/image";

import { Wedding } from "@/types/wedding";

import Container from "@/components/layout/Container";
import SectionTitle from "@/components/layout/SectionTitle";
import AnimatedSection from "@/components/layout/AnimatedSection";

type Props = {
  story: Wedding["story"];
};

export default function Story({ story }: Props) {
  return (
    <section className="py-12 lg:py-24">
      <Container>
        <SectionTitle
          title="Nuestra historia"
          subtitle="Cada historia de amor es diferente. Esta es la nuestra."
        />

        <AnimatedSection>
          <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Imagen */}

          <div className="flex justify-center">
            <Image
              src="/partner-photo-2.jpg"
              alt="Nuestra historia"
              width={550}
              height={700}
              className="w-full max-w-md rounded-[2.5rem] object-cover shadow-xl"
            />
          </div>

          {/* Texto */}

          <div className="text-center lg:text-left">
            <div className="mb-6 flex items-center justify-center gap-4 lg:justify-start">
              <Image
                src="/flower.png"
                alt=""
                width={24}
                height={24}
              />

              <h3 className="font-heading text-4xl text-stone-900">
                Nuestra historia
              </h3>

              <Image
                src="/flower.png"
                alt=""
                width={24}
                height={24}
              />
            </div>

            <p className="whitespace-pre-line text-lg leading-9 text-stone-600">
              {story}
            </p>
          </div>
        </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}