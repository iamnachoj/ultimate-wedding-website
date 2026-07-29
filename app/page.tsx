import FAQ from "@/components/FAQ"
import Hero from "@/components/Hero"
import RSVP from "@/components/RSVP/RSVP"
import Story from "@/components/Story"
import WeddingDetails from "@/components/WeddingDetails"
import { wedding } from "@/data/wedding"

export default function Home() {
  return (
    <main>
      <Hero
        wedding={wedding}
      />
      <Story story={wedding.story} />
      <WeddingDetails celebration={wedding.celebration} ceremony={wedding.ceremony} dressCodeText={wedding.dressCodeDescription} />
      <FAQ questions={wedding.questions} />
      <RSVP />
    </main>
  )
}