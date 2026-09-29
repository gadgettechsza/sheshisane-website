export const site = {
  name: "SHESHISANE (PTY) LTD",
  shortName: "SHESHISANE",
  registration: "K2026749494",
  slogan: "Inspired to Empower Brilliance",
  phone: "069 818 7323",
  phoneIntl: "+27698187323",
  whatsapp: "27698187323",
  email: "sheshisaneptyltd@gmail.com",
  address: "15499 Phase 6, Bloemfontein, Free State, 9323",
  hours: "07:00 – 21:00, 7 days a week",
};

export const whatsappLink = (message: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

export const services = [
  {
    id: "tutoring",
    title: "Mathematics Tutoring",
    tagline: "From R400 per month",
    description:
      "Personalised FET Mathematics tutoring built to build confidence, sharpen technique and lift results — from homework support to final exam mastery.",
    icon: "graduation",
    image: "/images/tutoring.jpg",
    features: [
      "FET Grade 10–12 curriculum",
      "Homework support",
      "Exam preparation",
      "One-on-one tutoring",
    ],
    color: "navy",
  },
  {
    id: "welding",
    title: "Welding Services",
    tagline: "Precision steel work, built to last",
    description:
      "From security gates to bespoke steel fabrication, our welders deliver durable, precision-crafted metalwork for homes and businesses.",
    icon: "spark",
    image: "/images/welding-action.jpg",
    features: [
      "Gates",
      "Burglar bars",
      "Steel fabrication",
      "Repairs",
      "Custom projects",
    ],
    color: "orange",
  },
  {
    id: "tools",
    title: "Tool Hire",
    tagline: "The right tool, right on time",
    description:
      "A full range of well-maintained equipment available for hire — for tradespeople, contractors and DIY projects alike.",
    icon: "tool",
    image: "https://images.pexels.com/photos/8489874/pexels-photo-8489874.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    features: [
      "Welding machines",
      "Drills",
      "Grinders",
      "Pliers",
      "Hammers",
      "General hand tools",
    ],
    color: "navy",
  },
];

export const gallery = [
  {
    src: "/images/tutor-explaining-algebraic.jpg",
    alt: "Mathematics tutor explaining algebraic equations on a whiteboard",
    category: "Tutoring",
  },
  {
    src: "/images/tutoring-session-with-students.jpg",
    alt: "One-on-one tutoring session with a student",
    category: "Tutoring",
  },
  {
    src: "/images/welding-action-2.jpg",
    alt: "Welder working with steel and sparks flying",
    category: "Welding",
  },
  {
    src: "/images/welding-project-2.jpg",
    alt: "Close-up of a welding process with bright sparks",
    category: "Welding",
  },
  {
    src: "/images/welding-project-1.jpg",
    alt: "Custom fabricated metal gate",
    category: "Welding",
  },
  {
    src: "/images/welding-action1.jpg",
    alt: "Welder using a grinder in a workshop with sparks flying",
    category: "Welding",
  },
  {
    src: "https://images.pexels.com/photos/46240/drill-milling-milling-machine-cutting-tools-46240.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
    alt: "Assorted industrial drill bits",
    category: "Tool Hire",
  },
  {
    src: "https://images.pexels.com/photos/8470682/pexels-photo-8470682.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
    alt: "Workshop tools, grinder and safety goggles on a workbench",
    category: "Tool Hire",
  },
];
