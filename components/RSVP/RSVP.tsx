import Container from "@/components/layout/Container";
import SectionTitle from "@/components/layout/SectionTitle";

import RSVPForm from "./RSVPForm";

export default function RSVP() {
  return (
    <section
      id="rsvp"
      className="bg-stone-50 py-12 lg:py-28"
    >
      <Container>
        <SectionTitle
          title="Confirma tu asistencia"
          subtitle="Nos encantaría saber si podrás acompañarnos en este día tan especial."
        />

        <div className="mx-auto mt-14 max-w-3xl rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm md:p-12">
          <RSVPForm />
        </div>
      </Container>
    </section>
  );
}