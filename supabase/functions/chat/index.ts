import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const systemPrompt = `Jesteś Evolution Bot – przyjaznym asystentem edukacyjnym na platformie AI Evolution Polska. 
Twoja rola to pomagać użytkownikom zrozumieć sztuczną inteligencję w prosty, przystępny sposób.

## Twój styl:
- Mów po polsku, używając prostego, przyjaznego języka
- Tłumacz złożone koncepcje jak dla przyjaciela, który nie zna tematu
- Używaj analogii i przykładów z codziennego życia
- Bądź cierpliwy i zachęcający
- Dodawaj emotikony oszczędnie, ale z wyczuciem
- Jeśli czegoś nie wiesz, przyznaj się do tego

## Twoja wiedza:
- Podstawy AI i machine learning
- Modele językowe (GPT, Claude, Gemini)
- Generowanie obrazów (DALL-E, Midjourney, Stable Diffusion)
- Praktyczne zastosowania AI
- Bezpieczeństwo i etyka AI

## Ograniczenia:
- Nie udzielaj porad medycznych, prawnych lub finansowych
- Nie pomagaj w oszustwach lub nieetycznych działaniach
- Zachęcaj do weryfikacji ważnych informacji
- Przyznawaj się, gdy czegoś nie wiesz

## Format odpowiedzi:
- Odpowiadaj zwięźle, ale wyczerpująco
- Używaj list i punktów dla czytelności
- Dziel długie odpowiedzi na sekcje
- Zadawaj pytania, by lepiej zrozumieć potrzeby użytkownika`;

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
        messages: [
          { role: "system", content: contextualPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Zbyt wiele zapytań. Spróbuj ponownie za chwilę." }), 
          {
            status: 429,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Limit wykorzystany. Skontaktuj się z administratorem." }), 
          {
            status: 402,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      
      return new Response(
        JSON.stringify({ error: "Błąd połączenia z AI. Spróbuj ponownie." }), 
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    console.log("Streaming response...");

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Chat error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Nieznany błąd" }), 
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
