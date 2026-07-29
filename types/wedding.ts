export interface Wedding {
  couple: {
    partner1: string;
    partner2: string;
  };

  date: string;

  heroText: string;

  story: string;

  dressCodeDescription: {
    firstParagraph: string;
    secondParagraph: string;
  };

  heroImage: string;

  ceremony: {
    venue: string;
    address: string;
    note?: string;
    time: string;
  };

  celebration: {
    venue: string;
    address: string;
    note?: string;
    time: string;
  };

  questions: {
    question: string;
    answer: string;
  }[];
}