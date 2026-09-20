export const site = {
  name: "Mindbodymedworks",
  shortName: "Mindbodymedworks",
  tagline: "STRONGER YOU. BRIGHTER TOMORROW.",
  footerMark: "STRENGTH  BALANCE  WELLNESS",
  heroEyebrow: "Pathways to",
  handwritten: "Heal. Empower. Evolve.",
  mindLine: "Your mind. Your strength.",
  title: "Mindbodymedworks | Strength, Balance & Wellness",
  description:
    "A healthier, happier you is possible. Practical tools, expert guidance, and a supportive community for mind, body, and life.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  portraitSrc: "/images/hero-woman.jpg",
  portraitAlt:
    "Portrait of the Mindbodymedworks wellness guide, with long brown hair, looking toward the camera.",
  heroKicker: "Movement  |  Nutrition  |  Mental Wellness",
  heroIntro:
    "A healthier, happier you is possible. Discover practical tools, expert guidance, and a supportive community to help you thrive — in mind, body, and life.",
  quote: "A balanced mind creates a brighter, stronger you.",
  quoteSub: "Healthier habits. Happier tomorrows.",
  aboutQuote: "A healthier you is a brighter world.",
  whoItsFor: [
    "You're ready to build healthier habits",
    "You want practical guidance",
    "You want a balanced approach",
    "You want support and accountability",
    "You want sustainable changes",
  ],
  gettingStarted: [
    {
      step: "01",
      title: "Start a Conversation",
      body: "Chat with me on WhatsApp and tell me what you're looking for.",
    },
    {
      step: "02",
      title: "Find Your Path",
      body: "We'll identify the program or approach that fits your goals.",
    },
    {
      step: "03",
      title: "Begin Your Journey",
      body: "Start with practical guidance and ongoing support.",
    },
  ],
  nav: [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About me" },
    { href: "#services", label: "Services" },
  ] as const,
  social: {
    instagram: "https://www.instagram.com/mindbodymedworks",
    x: "https://x.com/",
    linkedin: "https://www.linkedin.com/",
    medium: "https://www.thefriendlycouch.com/therapy.html?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRzdgUbYlxwZG9mAmV4dG4DYWVtAjExAHNydGMGYXBwX2lkDzU2NzA2NzM0MzM1MjQyNwABp701EERMKMEQydGiuW0RXwFwczWiqDSxdys1542Aqev58A54s-0jJX20ddtv_aem_VZuOOTKb5n4DUe-1xscY5Q",
  },
  trust: [
    { title: "Expert Guidance", icon: "guidance" },
    { title: "Holistic Approach", icon: "tools" },
    { title: "Supportive Community", icon: "community" },
  ],
  ctaSupports: [
    { title: "Expert Guidance", icon: "guidance" },
    { title: "Practical Tools", icon: "tools" },
    { title: "A Supportive Community", icon: "community" },
  ],
  stats: [
    { value: "1K+", label: "Lives Impacted" },
    { value: "95%", label: "Client Satisfaction" },
    { value: "3", label: "Integrated Pathways" },
  ],
} as const;
