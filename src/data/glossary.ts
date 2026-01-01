export interface GlossaryTerm {
  id: string;
  term: string;
  definition: string;
  relatedLessons?: string[];
  category: "podstawy" | "modele" | "obrazy" | "praktyka";
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    id: "ai",
    term: "Sztuczna inteligencja (AI)",
    definition: "Dziedzina informatyki zajmująca się tworzeniem systemów zdolnych do wykonywania zadań, które normalnie wymagają ludzkiej inteligencji, takich jak rozpoznawanie mowy, podejmowanie decyzji czy rozwiązywanie problemów.",
    relatedLessons: ["1-1", "1-2"],
    category: "podstawy",
  },
  {
    id: "ml",
    term: "Machine Learning (ML)",
    definition: "Uczenie maszynowe - poddziedzina AI, w której systemy uczą się na podstawie danych i doświadczeń, bez konieczności jawnego programowania każdego kroku.",
    relatedLessons: ["1-2"],
    category: "podstawy",
  },
  {
    id: "neural-network",
    term: "Sieć neuronowa",
    definition: "Model obliczeniowy inspirowany budową ludzkiego mózgu, składający się z połączonych węzłów (neuronów) przetwarzających informacje warstwami.",
    relatedLessons: ["1-3"],
    category: "podstawy",
  },
  {
    id: "deep-learning",
    term: "Deep Learning",
    definition: "Głębokie uczenie - zaawansowana forma uczenia maszynowego wykorzystująca wielowarstwowe sieci neuronowe do analizy złożonych wzorców w danych.",
    relatedLessons: ["1-3"],
    category: "podstawy",
  },
  {
    id: "llm",
    term: "LLM (Large Language Model)",
    definition: "Duży model językowy - zaawansowany system AI wytrenowany na ogromnych ilościach tekstu, zdolny do generowania i rozumienia języka naturalnego.",
    relatedLessons: ["2-1", "2-2"],
    category: "modele",
  },
  {
    id: "gpt",
    term: "GPT",
    definition: "Generative Pre-trained Transformer - rodzina modeli językowych stworzonych przez OpenAI, będących podstawą ChatGPT.",
    relatedLessons: ["2-2"],
    category: "modele",
  },
  {
    id: "token",
    term: "Token",
    definition: "Podstawowa jednostka tekstu przetwarzana przez model językowy. Może to być słowo, część słowa lub znak interpunkcyjny.",
    relatedLessons: ["2-3"],
    category: "modele",
  },
  {
    id: "prompt",
    term: "Prompt",
    definition: "Instrukcja lub zapytanie wprowadzane do modelu AI, określające jakie zadanie ma wykonać lub jaką odpowiedź wygenerować.",
    relatedLessons: ["2-4"],
    category: "modele",
  },
  {
    id: "prompt-engineering",
    term: "Prompt Engineering",
    definition: "Sztuka i nauka tworzenia skutecznych promptów w celu uzyskania pożądanych odpowiedzi od modeli AI.",
    relatedLessons: ["2-4"],
    category: "modele",
  },
  {
    id: "halucynacje",
    term: "Halucynacje AI",
    definition: "Sytuacja, gdy model AI generuje nieprawdziwe lub wymyślone informacje przedstawiane jako fakty.",
    relatedLessons: ["2-5"],
    category: "modele",
  },
  {
    id: "computer-vision",
    term: "Computer Vision",
    definition: "Wizja komputerowa - dziedzina AI zajmująca się umożliwieniem maszynom 'widzenia' i interpretacji obrazów oraz wideo.",
    relatedLessons: ["3-1"],
    category: "obrazy",
  },
  {
    id: "image-generation",
    term: "Generowanie obrazów",
    definition: "Proces tworzenia nowych obrazów przez AI na podstawie opisów tekstowych lub innych danych wejściowych.",
    relatedLessons: ["3-2"],
    category: "obrazy",
  },
  {
    id: "dall-e",
    term: "DALL-E",
    definition: "Model AI stworzony przez OpenAI, zdolny do generowania obrazów na podstawie opisów tekstowych.",
    relatedLessons: ["3-2"],
    category: "obrazy",
  },
  {
    id: "midjourney",
    term: "Midjourney",
    definition: "Narzędzie AI do generowania obrazów artystycznych, znane z wysokiej jakości estetycznej wyników.",
    relatedLessons: ["3-2"],
    category: "obrazy",
  },
  {
    id: "stable-diffusion",
    term: "Stable Diffusion",
    definition: "Otwarto-źródłowy model do generowania obrazów, który można uruchomić lokalnie na własnym komputerze.",
    relatedLessons: ["3-2"],
    category: "obrazy",
  },
  {
    id: "deepfake",
    term: "Deepfake",
    definition: "Syntetyczne media stworzone przez AI, w których twarz lub głos osoby jest zamieniana na inną, często w sposób trudny do wykrycia.",
    relatedLessons: ["3-4"],
    category: "obrazy",
  },
  {
    id: "bias",
    term: "Bias (stronniczość)",
    definition: "Tendencyjność w systemach AI wynikająca z uprzedzeń zawartych w danych treningowych lub konstrukcji algorytmu.",
    relatedLessons: ["3-5"],
    category: "praktyka",
  },
  {
    id: "api",
    term: "API",
    definition: "Application Programming Interface - interfejs umożliwiający komunikację między różnymi programami, często używany do integracji usług AI.",
    relatedLessons: ["4-5"],
    category: "praktyka",
  },
  {
    id: "fine-tuning",
    term: "Fine-tuning",
    definition: "Proces dostosowywania wstępnie wytrenowanego modelu AI do konkretnego zadania poprzez dodatkowe trenowanie na specjalistycznych danych.",
    relatedLessons: ["4-5"],
    category: "praktyka",
  },
  {
    id: "agi",
    term: "AGI (Artificial General Intelligence)",
    definition: "Sztuczna inteligencja ogólna - hipotetyczny typ AI zdolny do wykonywania każdego zadania intelektualnego na poziomie człowieka.",
    relatedLessons: ["4-7"],
    category: "praktyka",
  },
  {
    id: "transformer",
    term: "Architektura Transformer",
    definition: "Model sieci neuronowej oparty na mechanizmie uwagi (attention), który umożliwia równoległe przetwarzanie sekwencji i jest podstawą większości nowoczesnych modeli językowych.",
    relatedLessons: ["2-2"],
    category: "modele",
  },
  {
    id: "embeddings",
    term: "Embeddings",
    definition: "Wektory liczbowe reprezentujące znaczenie słów, zdań lub obrazów w przestrzeni cech, używane do porównywania podobieństwa semantycznego.",
    relatedLessons: ["2-3"],
    category: "modele",
  },
  {
    id: "rag",
    term: "Retrieval-Augmented Generation (RAG)",
    definition: "Technika łącząca generowanie tekstu przez model językowy z wyszukiwaniem aktualnych informacji w bazie wiedzy lub wektorowej, aby ograniczyć halucynacje i dodać kontekst.",
    relatedLessons: ["4-3", "4-6"],
    category: "praktyka",
  },
  {
    id: "vector-db",
    term: "Baza wektorowa",
    definition: "Specjalistyczna baza danych przechowująca embeddings i umożliwiająca szybkie wyszukiwanie najbliższych wektorów (nearest neighbors), wykorzystywana m.in. w systemach RAG.",
    relatedLessons: ["4-3"],
    category: "praktyka",
  },
  {
    id: "lora",
    term: "LoRA (Low-Rank Adaptation)",
    definition: "Lekka metoda dostrajania modeli AI polegająca na trenowaniu niewielkiej liczby dodatkowych parametrów, co pozwala szybko specjalizować model przy niskich kosztach obliczeniowych.",
    relatedLessons: ["4-5"],
    category: "praktyka",
  },
  {
    id: "diffusion",
    term: "Modele dyfuzyjne",
    definition: "Generatywne modele obrazu, które uczą się odwracania procesu dodawania szumu do danych, dzięki czemu potrafią tworzyć realistyczne grafiki z losowego szumu.",
    relatedLessons: ["3-2"],
    category: "obrazy",
  },
  {
    id: "safety",
    term: "Mechanizmy bezpieczeństwa AI",
    definition: "Zestaw technik i procedur (filtry treści, detekcja nadużyć, monitoring promptów), które ograniczają ryzyko generowania szkodliwych lub wprowadzających w błąd wyników przez modele AI.",
    relatedLessons: ["3-5", "4-7"],
    category: "praktyka",
  },
];

export const getTermsByCategory = (category: GlossaryTerm["category"]) => {
  return glossaryTerms.filter(term => term.category === category);
};

export const searchTerms = (query: string) => {
  const lowerQuery = query.toLowerCase();
  return glossaryTerms.filter(
    term => 
      term.term.toLowerCase().includes(lowerQuery) || 
      term.definition.toLowerCase().includes(lowerQuery)
  );
};
