import { Wedding } from "@/types/wedding";

export const wedding: Wedding = {
  couple: {
    partner1: "Jesús",
    partner2: "Paula",
  },
  heroImage: "/partner-photo-1.jpg",
  date: "11 Octubre 2026",

  heroText: "¡Nos casamos!",

  story: `
    Hace unos años nuestras vidas se cruzaron y desde entonces
    hemos compartido aventuras, viajes y muchísimas risas.

    Ahora queremos celebrar este día con vosotros.

    Aquí continúo con un ejemplo de texto bien largo para que veáis cómo se ve en la web. Podéis escribir todo lo que queráis, no hay límite de caracteres. ¡Aprovechadlo!

    También podéis añadir saltos de línea y emojis, como este: 🎉
    `,
  dressCodeDescription: {
    firstParagraph: "Elegante y guapos, pero cómodos. ¡Queremos veros bailar toda la noche!",
    secondParagraph: "Para los hombres, recomendamos traje o chaqueta y corbata. Para las mujeres, vestidos largos o cortos elegantes. Evitad el blanco, por favor.",
  },
  ceremony: {
    venue: "Catedral de Sevilla",
    address: "Plaza del Triunfo, s/n, 41004 Sevilla",
    note: "Posiblemente haga calor, ¡no olvidéis traer un abanico!",
    time: "12:00",
  },
  celebration: {
    venue: "Hacienda Villanueva del Pítamo",
    address: "Av. de la Salud, 38, 41014 Dos Hermanas, Sevilla",
    note: "Saldrán autobuses desde la Catedral de Sevilla a las 13:30",
    time: "14:00",
  },
  questions: [
    {
      question: "¿Dónde puedo alojarme?",
      answer: "Hay varios hoteles en el centro de Sevilla, cerca de la Catedral. Os recomendamos reservar con antelación. En www.booking.com podéis encontrar muchas opciones.",
    },
    {
      question: "¿Puedo llevar acompañante?",
      answer: "Sí, si tu invitación incluye acompañante. (pero no me traigáis a ningún loco por favor os lo pido) En ese caso, os pedimos que cada persona complete el formulario de asistencia por separado para que podamos gestionar correctamente los menús, el transporte y el resto de detalles.",
    },
    {
      question: "¿Puedo llevar vestido blanco?",
      answer: "No, el vestido blanco está reservado para la novia. Por favor, elige otro color para tu atuendo.",
    },
  ],  
}