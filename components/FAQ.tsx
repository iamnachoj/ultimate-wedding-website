import Image from "next/image";

import Container from "@/components/layout/Container";
import SectionTitle from "@/components/layout/SectionTitle";
import { Wedding } from "@/types/wedding";
import AnimatedSection from "./layout/AnimatedSection";

type Props = {
  questions: Wedding["questions"];
};

export default function FAQ({ questions }: Props) {
  return (
    <section className="py-12 lg:py-24">
      <AnimatedSection> 
        <Container>
          <SectionTitle
            title="Preguntas frecuentes"
            subtitle="Si tienes cualquier otra duda, no dudes en preguntarnos."
          />

          <div className="mx-auto max-w-3xl space-y-4">
            {questions.map((item, index) => (
              <details
                key={index}
                className="group rounded-3xl border border-stone-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left">
                  <span className="font-heading text-2xl text-stone-900">
                    {item.question}
                  </span>

                  <Image
                    src="/flower.png"
                    alt=""
                    width={22}
                    height={22}
                    className="transition duration-300 group-open:rotate-180"
                  />
                </summary>

                <div className="mt-5 border-t border-stone-100 pt-5">
                  <p className="leading-8 text-stone-600">
                    {item.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </Container>
      </AnimatedSection>
    </section>
  );
}