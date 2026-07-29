import Image from "next/image";

import { Wedding } from "@/types/wedding";

import { Card } from "@/components/ui/card";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/layout/SectionTitle";
import AnimatedSection from "./layout/AnimatedSection";

type Props = {
  celebration: Wedding["celebration"];
  ceremony: Wedding["ceremony"];
  dressCodeText: {
    firstParagraph: string;
    secondParagraph: string;
  };
};

export default function WeddingDetails({ celebration, ceremony, dressCodeText }: Props) {
  return (
    <section className="py-4">
      <Container>
        <AnimatedSection> 
          <SectionTitle
            title="El gran día"
            subtitle="Aquí encontraréis toda la información importante para celebrar con nosotros"
          />
        </AnimatedSection>  
        <div className="grid items-stretch gap-8 md:grid-cols-3">
          {/* Ceremonia */}
           <AnimatedSection> 
            <Card className="h-full rounded-3xl p-8 text-center">
              <Image
                src="/wedding.png"
                alt=""
                width={50}
                height={50}
                className="mx-auto mt-6"
              />

              <h3 className="font-heading mt-1 text-2xl">Ceremonia</h3>

              <p className="mt-3 text-stone-600">
                {ceremony.venue}
              </p>

              <p className="text-sm text-stone-500">
                {ceremony.address}
              </p>

              {ceremony.note && (
                <p className="text-sm text-stone-500">
                  {ceremony.note}
                </p>
              )}

              <p className="mt-2 font-medium text-stone-700">
                {ceremony.time}
              </p>
            </Card>
          </AnimatedSection>

          {/* Celebración */}

          <AnimatedSection>
            <Card className="h-full rounded-3xl p-8 text-center">
            <Image
              src="/red-carpet.png"
              alt=""
              width={50}
              height={50}
              className="mx-auto mt-6"
            />

            <h3 className="font-heading mt-1 text-2xl">Celebración</h3>

            <p className="mt-3 text-stone-600">
              {celebration.venue}
            </p>

            <p className="text-sm text-stone-500">
              {celebration.address}
            </p>

            {celebration.note && (
              <p className="text-sm text-stone-500">
                {celebration.note}
              </p>
            )}

            <p className="mt-2 font-medium text-stone-700">
              {celebration.time}
            </p>
            </Card>
          </AnimatedSection>

          {/* Dress code */}
          <AnimatedSection>
            <Card className="h-full rounded-3xl p-8 text-center">
              <Image
                src="/wedding-dress.png"
                alt=""
                width={50}
                height={50}
                className="mx-auto mt-6"
              />

              <h3 className="font-heading mt-1 text-2xl">
                Dress code
              </h3>

              <p className="mt-3 text-stone-600">
                {dressCodeText.firstParagraph}
              </p>
              <p className="mt-3 text-stone-600">
                {dressCodeText.secondParagraph}
              </p>
            </Card>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}