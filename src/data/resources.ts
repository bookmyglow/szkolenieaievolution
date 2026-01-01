import { Bot, Palette, Video, Book, Users, Wrench } from "lucide-react";

export interface Resource {
  id: string;
  name: string;
  description: string;
  url: string;
  category: "narzedzia" | "kursy" | "artykuly" | "youtube" | "spolecznosci";
  icon?: typeof Bot;
  isPaid?: boolean;
  tags: string[];
}

export const resources: Resource[] = [
  // Narzędzia AI
  {
    id: "chatgpt",
    name: "ChatGPT",
    description: "Najpopularniejszy asystent AI od OpenAI. Świetny do rozmów, pisania i rozwiązywania problemów.",
    url: "https://chat.openai.com",
    category: "narzedzia",
    icon: Bot,
    tags: ["tekst", "czat", "OpenAI"],
  },
  {
    id: "claude",
    name: "Claude",
    description: "Zaawansowany asystent AI od Anthropic, znany z bezpieczeństwa i dokładności.",
    url: "https://claude.ai",
    category: "narzedzia",
    icon: Bot,
    tags: ["tekst", "czat", "Anthropic"],
  },
  {
    id: "gemini",
    name: "Google Gemini",
    description: "Asystent AI od Google z integracją z usługami Google.",
    url: "https://gemini.google.com",
    category: "narzedzia",
    icon: Bot,
    tags: ["tekst", "czat", "Google"],
  },
  {
    id: "midjourney",
    name: "Midjourney",
    description: "Narzędzie do generowania artystycznych obrazów. Dostępne przez Discord.",
    url: "https://midjourney.com",
    category: "narzedzia",
    icon: Palette,
    isPaid: true,
    tags: ["obrazy", "sztuka"],
  },
  {
    id: "dalle",
    name: "DALL-E 3",
    description: "Generator obrazów od OpenAI, zintegrowany z ChatGPT Plus.",
    url: "https://openai.com/dall-e-3",
    category: "narzedzia",
    icon: Palette,
    isPaid: true,
    tags: ["obrazy", "OpenAI"],
  },
  {
    id: "leonardo",
    name: "Leonardo.ai",
    description: "Darmowe narzędzie do generowania obrazów z wieloma opcjami stylizacji.",
    url: "https://leonardo.ai",
    category: "narzedzia",
    icon: Palette,
    tags: ["obrazy", "darmowe"],
  },
  {
    id: "canva-ai",
    name: "Canva AI",
    description: "Narzędzia AI zintegrowane z popularnym edytorem grafiki Canva.",
    url: "https://canva.com",
    category: "narzedzia",
    icon: Wrench,
    tags: ["design", "obrazy"],
  },
  
  // Kursy
  {
    id: "coursera-ai",
    name: "AI For Everyone (Coursera)",
    description: "Popularny kurs wprowadzający od Andrew Ng, dostępny za darmo.",
    url: "https://www.coursera.org/learn/ai-for-everyone",
    category: "kursy",
    icon: Book,
    tags: ["początkujący", "angielski"],
  },
  {
    id: "elements-of-ai",
    name: "Elements of AI",
    description: "Darmowy kurs online stworzony przez Uniwersytet Helsiński.",
    url: "https://www.elementsofai.com",
    category: "kursy",
    icon: Book,
    tags: ["początkujący", "darmowy"],
  },
  {
    id: "google-ai",
    name: "Google AI Courses",
    description: "Zestaw darmowych kursów o AI od Google.",
    url: "https://ai.google/education/",
    category: "kursy",
    icon: Book,
    tags: ["Google", "darmowy"],
  },
  
  // YouTube
  {
    id: "3blue1brown",
    name: "3Blue1Brown",
    description: "Świetne wizualizacje matematycznych podstaw ML i sieci neuronowych.",
    url: "https://www.youtube.com/c/3blue1brown",
    category: "youtube",
    icon: Video,
    tags: ["matematyka", "wizualizacje"],
  },
  {
    id: "fireship",
    name: "Fireship",
    description: "Szybkie, zwięzłe wyjaśnienia technologii AI i programowania.",
    url: "https://www.youtube.com/@Fireship",
    category: "youtube",
    icon: Video,
    tags: ["programowanie", "szybkie"],
  },
  {
    id: "two-minute-papers",
    name: "Two Minute Papers",
    description: "Najnowsze badania AI wyjaśnione w przystępny sposób.",
    url: "https://www.youtube.com/@TwoMinutePapers",
    category: "youtube",
    icon: Video,
    tags: ["badania", "nowości"],
  },
  
  // Społeczności
  {
    id: "reddit-ml",
    name: "r/MachineLearning",
    description: "Największa społeczność Reddit poświęcona machine learning.",
    url: "https://reddit.com/r/MachineLearning",
    category: "spolecznosci",
    icon: Users,
    tags: ["Reddit", "dyskusje"],
  },
  {
    id: "huggingface",
    name: "Hugging Face",
    description: "Platforma z modelami AI i społecznością deweloperów.",
    url: "https://huggingface.co",
    category: "spolecznosci",
    icon: Users,
    tags: ["modele", "open-source"],
  },
];

export const getResourcesByCategory = (category: Resource["category"]) => {
  return resources.filter(resource => resource.category === category);
};

export const searchResources = (query: string) => {
  const lowerQuery = query.toLowerCase();
  return resources.filter(
    resource =>
      resource.name.toLowerCase().includes(lowerQuery) ||
      resource.description.toLowerCase().includes(lowerQuery) ||
      resource.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
};
