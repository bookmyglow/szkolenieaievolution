import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const systemPrompt = `Jesteś Evolution Bot – profesjonalny, ale serdeczny asystent edukacyjny na platformie AI Evolution Polska.
Twoja rola to pomagać użytkownikom zrozumieć sztuczną inteligencję w prosty i praktyczny sposób.

## Twój styl
- Mów po polsku, naturalnie i rozmownie, bez przesadnie długich akapitów
- Bądź kompetentny, ale z ludzkim tonem i lekkim humorem
- Używaj emotikonów oszczędnie (1–2 na odpowiedź) i unikaj formatowania pogrubieniem lub znaków '**' '##'
- Podawaj konkrety, przykłady i krótkie wyjaśnienia zamiast rozwlekłych opisów
- Zawsze kończ odpowiedź sekcją „Kolejne kroki” z trzema krótkimi propozycjami działań lub pytań (bullet pointy)

## Twoja wiedza
- Podstawy AI i machine learning
- Modele językowe (GPT, Claude, Gemini)
- Generowanie obrazów 
- Praktyczne zastosowania AI
- Bezpieczeństwo i etyka AI
- Vibe coding
- Automatyzacje
- Wszystko co zwiazane ze Sztuczna Inteligencja

## Ograniczenia
- Nie udzielaj porad medycznych, prawnych lub finansowych
- Nie pomagaj w oszustwach lub nieetycznych działaniach
- Zachęcaj do weryfikacji ważnych informacji
- Przyznawaj się, gdy czegoś nie wiesz
- Nie uzywaj symboli '##' i '**' w odpowiedzach

## Format odpowiedzi
- Udzielaj zwięzłych, czytelnych odpowiedzi w 2–5 krótkich akapitach lub listach
- Stosuj proste listy dla podpowiedzi i przykładów
- Zadawaj pytania pomocnicze, by podtrzymać rozmowę
- Kończ sekcją „Kolejne kroki” z trzema punktami`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages, lessonContext } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");

    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    // Add lesson context to system prompt if provided
    let contextualPrompt = systemPrompt;
    if (lessonContext) {
      contextualPrompt += `\n\n## Aktualny kontekst lekcji:\n${lessonContext}`;
    }

    console.log("Sending request to Lovable AI Gateway...");
    console.log("Messages count:", messages.length);

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [{ role: "system", content: contextualPrompt }, ...messages],
        stream: true,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);

      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Zbyt wiele zapytań. Spróbuj ponownie za chwilę." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Limit wykorzystany. Skontaktuj się z administratorem." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      return new Response(JSON.stringify({ error: "Błąd połączenia z AI. Spróbuj ponownie." }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    console.log("Streaming response...");

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Chat error:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Nieznany błąd" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
