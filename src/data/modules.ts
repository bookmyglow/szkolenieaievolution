export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  content: string;
  keyPoints: string[];
  funFact?: string;
}

export interface Module {
  id: number;
  slug: string;
  title: string;
  description: string;
  icon: string;
  duration: string;
  lessonsCount: number;
  color: "primary" | "accent";
  heroImage?: {
    src: string;
    alt: string;
  };
  gallery?: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  lessons: Lesson[];
  quiz: QuizQuestion[];
}

// Hero images for modules
import module1Hero from "@/assets/modules/module-1-hero.jpg";
import module2Hero from "@/assets/modules/module-2-hero.jpg";
import module3Hero from "@/assets/modules/module-3-hero.jpg";
import module4Hero from "@/assets/modules/module-4-hero.jpg";
import module5Hero from "@/assets/modules/module-5-hero.jpg";
import module6Hero from "@/assets/modules/module-6-hero.jpg";
import module7Hero from "@/assets/modules/module-7-hero.jpg";
import module8Hero from "@/assets/modules/module-8-hero.jpg";

export const modules: Module[] = [
  {
    id: 1,
    slug: "czym-jest-ai",
    title: "Czym jest AI?",
    description: "Poznaj podstawy sztucznej inteligencji. Zrozum, jak maszyny uczą się i podejmują decyzje.",
    icon: "Brain",
    duration: "75 min",
    lessonsCount: 9,
    color: "primary",
    heroImage: {
      src: module1Hero,
      alt: "Robot nauczyciel w futurystycznej sali komputerowej z holograficznymi ekranami"
    },
    lessons: [
      {
        id: "1-1",
        title: "Historia AI – od Turinga do ChatGPT",
        duration: "10 min",
        content: `
# Historia sztucznej inteligencji

Sztuczna inteligencja to dziedzina, która fascynuje ludzkość od dziesięcioleci. Ale skąd się wzięła?

## Alan Turing – ojciec AI

W 1950 roku brytyjski matematyk **Alan Turing** zadał fundamentalne pytanie: „Czy maszyny mogą myśleć?" Stworzył słynny **Test Turinga** – jeśli człowiek rozmawiając z maszyną nie potrafi odróżnić jej od człowieka, możemy powiedzieć, że maszyna „myśli".

## Narodziny terminu „Sztuczna Inteligencja"

W 1956 roku na konferencji w Dartmouth College, naukowcy po raz pierwszy użyli terminu **„Artificial Intelligence"**. To był oficjalny początek AI jako dziedziny nauki.

## Zimy AI i odrodzenie

Przez lata AI przechodziła przez okresy entuzjazmu i rozczarowań (tzw. „zimy AI"). Dopiero w XXI wieku, dzięki:
- Ogromnej mocy obliczeniowej
- Dostępowi do wielkich zbiorów danych
- Nowym algorytmom (deep learning)

...AI przeżywa prawdziwy renesans.

## Era ChatGPT

W 2022 roku OpenAI wypuściło ChatGPT, który zmienił wszystko. Po raz pierwszy miliony ludzi mogły rozmawiać z AI jak z człowiekiem. To był moment, gdy AI weszła do mainstreamu.

## Praktyczny przykład: Oś czasu AI

| Rok | Wydarzenie | Znaczenie |
|-----|-----------|-----------|
| 1950 | Test Turinga | Filozoficzne fundamenty |
| 1956 | Konferencja Dartmouth | Narodziny AI |
| 1997 | Deep Blue vs Kasparow | AI pokonuje mistrza szachów |
| 2011 | Watson w Jeopardy! | AI rozumie język naturalny |
| 2016 | AlphaGo | AI pokonuje Go |
| 2022 | ChatGPT | AI dla każdego |
| 2024 | GPT-4o, Claude 3.5, Gemini 2.0 | Era multimodalnych AI |
        `,
        keyPoints: [
          "Alan Turing jest uważany za ojca sztucznej inteligencji",
          "Termin AI powstał w 1956 roku",
          "ChatGPT w 2022 roku zrewolucjonizował dostęp do AI"
        ],
        funFact: "Alan Turing podczas II wojny światowej złamał kod Enigmy, co przyspieszyło zakończenie wojny o około 2 lata!"
      },
      {
        id: "1-2",
        title: "Jak maszyny się uczą? (Machine Learning)",
        duration: "12 min",
        content: `
# Machine Learning – nauka maszynowa

Wyobraź sobie, że uczysz dziecko rozpoznawać psy. Pokazujesz mu setki zdjęć psów i mówisz: „To jest pies". Po pewnym czasie dziecko samo zaczyna rozpoznawać psy, nawet te, których wcześniej nie widziało.

## Tak właśnie działa Machine Learning!

Zamiast programować komputer krok po kroku („jeśli ma cztery łapy i ogon, to pies"), pokazujemy mu tysiące przykładów i pozwalamy mu samemu znaleźć wzorce.

## Trzy typy uczenia maszynowego

### 1. Uczenie nadzorowane (Supervised Learning)
Dajemy maszynie dane z odpowiedziami. Np. zdjęcia psów i kotów z etykietami.

**Praktyczne przykłady:**
- Filtr spamu (e-mail -> spam/nie spam)
- Rozpoznawanie cyfr na czekach
- Diagnostyka medyczna (obraz -> diagnoza)

### 2. Uczenie nienadzorowane (Unsupervised Learning)
Maszyna sama szuka wzorców w danych bez podpowiedzi.

**Praktyczne przykłady:**
- Segmentacja klientów sklepu
- Wykrywanie anomalii w transakcjach
- Kompresja obrazów

### 3. Uczenie ze wzmocnieniem (Reinforcement Learning)
Maszyna uczy się metodą prób i błędów, otrzymując „nagrody" za dobre decyzje.

**Praktyczne przykłady:**
- Gry (AlphaGo, boty w grach)
- Roboty uczące się chodzić
- Algorytmy tradingowe

## Ćwiczenie praktyczne

Pomyśl o 3 sytuacjach z życia, gdzie spotykasz Machine Learning:
1. _________________
2. _________________
3. _________________

**Podpowiedź:** Netflix, Spotify, reklamy w internecie, nawigacja GPS...
        `,
        keyPoints: [
          "Machine Learning to uczenie maszyn przez przykłady",
          "Istnieją trzy główne typy: nadzorowane, nienadzorowane i ze wzmocnieniem",
          "ML jest wszędzie – od Netflix po filtry spamu"
        ],
        funFact: "Algorytm rekomendacji YouTube odpowiada za 70% całego czasu oglądania na platformie!"
      },
      {
        id: "1-3",
        title: "Sieci neuronowe – inspiracja mózgiem",
        duration: "12 min",
        content: `
# Sieci neuronowe

Nasz mózg składa się z około 86 miliardów neuronów połączonych w niesamowicie złożoną sieć. Naukowcy pomyśleli: „A co, gdybyśmy spróbowali to naśladować?"

## Jak działa sztuczny neuron?

Sztuczny neuron to prosta jednostka obliczeniowa:
1. Przyjmuje dane wejściowe
2. Przetwarza je (mnoży przez „wagi")
3. Podejmuje decyzję (aktywacja)
4. Przekazuje wynik dalej

## Warstwy sieci

Sieci neuronowe składają się z warstw:
- **Warstwa wejściowa** – przyjmuje dane (np. piksele obrazu)
- **Warstwy ukryte** – przetwarzają informacje
- **Warstwa wyjściowa** – daje odpowiedź (np. „to jest kot")

## Deep Learning

Gdy sieć ma wiele warstw ukrytych, mówimy o **głębokim uczeniu** (Deep Learning). To właśnie deep learning stoi za:
- Rozpoznawaniem twarzy
- Tłumaczeniem języków
- Generowaniem obrazów
- ChatGPT

## Praktyczny przykład: Rozpoznawanie cyfr

Wyobraź sobie sieć rozpoznającą ręcznie pisane cyfry (0-9):

\`\`\`
Wejście: 784 piksele (28x28)
    ↓
Warstwa ukryta 1: 128 neuronów (wykrywanie krawędzi)
    ↓
Warstwa ukryta 2: 64 neurony (wykrywanie kształtów)
    ↓
Wyjście: 10 neuronów (jeden na każdą cyfrę)
\`\`\`

Najaktywniejszy neuron wyjściowy = rozpoznana cyfra!

## Analogia do nauki jazdy

Sieć neuronowa uczy się jak człowiek:
- Na początku popełnia dużo błędów
- Z każdą próbą koryguje swoje „wagi"
- Po tysiącach prób staje się ekspertem
        `,
        keyPoints: [
          "Sieci neuronowe są inspirowane ludzkim mózgiem",
          "Składają się z warstw neuronów",
          "Deep Learning = wiele warstw ukrytych"
        ],
        funFact: "GPT-4 ma około 1.8 biliona parametrów – więcej niż neuronów w ludzkim mózgu!"
      },
      {
        id: "1-4",
        title: "AI wokół nas – gdzie spotykamy AI codziennie",
        duration: "11 min",
        content: `
# AI jest wszędzie!

Możesz tego nie zauważać, ale AI towarzyszy ci każdego dnia. Oto przykłady:

## W telefonie
- **Asystenci głosowi** (Siri, Google Assistant) – rozumieją mowę
- **Autouzupełnianie tekstu** – przewiduje, co chcesz napisać
- **Filtry w aparacie** – rozpoznają twarze i upiększają zdjęcia
- **Odblokowanie twarzą** – Face ID używa AI

## W internecie
- **Wyszukiwarka Google** – rozumie intencje, nie tylko słowa
- **Media społecznościowe** – algorytmy dobierają treści
- **Reklamy** – są targetowane przez AI
- **Filtry spamu** – chroni twoją skrzynkę

## W domu
- **Smart TV** – rekomenduje filmy
- **Termostaty** – uczą się twoich preferencji
- **Odkurzacze robot** – mapują mieszkanie

## W mieście
- **Nawigacja** – optymalizuje trasę w czasie rzeczywistym
- **Aplikacje transportowe** – przewidują ceny i czas dojazdu
- **Kamery monitoringu** – rozpoznają nietypowe zachowania

## Praktyczne ćwiczenie: Dzień z AI

Śledź przez jeden dzień wszystkie interakcje z AI:

| Godzina | Aplikacja/Urządzenie | Jak AI pomaga? |
|---------|---------------------|----------------|
| 7:00 | Budzik smart | Optymalizuje czas budzenia |
| 7:30 | Spotify | Dobiera playlistę do nastroju |
| 8:00 | Mapy Google | Pokazuje najszybszą trasę |
| ... | ... | ... |

**Cel:** Uświadom sobie, jak bardzo AI jest częścią twojego życia!
        `,
        keyPoints: [
          "AI jest w telefonie, domu, internecie i mieście",
          "Większość usług cyfrowych używa AI",
          "Świadomość AI pomaga lepiej z niej korzystać"
        ],
        funFact: "Szacuje się, że przeciętny użytkownik smartfona korzysta z AI ponad 100 razy dziennie, często tego nie zauważając!"
      },
      {
        id: "1-5",
        title: "Rodzaje AI – wąska, ogólna i super AI",
        duration: "12 min",
        content: `
# Poziomy sztucznej inteligencji

Nie wszystkie AI są sobie równe. Naukowcy dzielą sztuczną inteligencję na trzy główne poziomy.

## ANI – Artificial Narrow Intelligence (Wąska AI)

To AI, którą znamy dzisiaj. Jest wyspecjalizowana w jednym zadaniu.

### Przykłady ANI:
- ChatGPT – świetny w rozmowie, ale nie poprowadzi samochodu
- AlphaGo – pokonuje mistrzów w Go, ale nie zagra w szachy
- Spotify – rekomenduje muzykę, ale nie napisze piosenki

### Cechy ANI:
- Bardzo dobra w jednej dziedzinie
- Brak ogólnej inteligencji
- Nie rozumie kontekstu poza swoim zadaniem

## AGI – Artificial General Intelligence (Ogólna AI)

To hipotetyczna AI, która dorównuje człowiekowi we wszystkich zadaniach intelektualnych.

### Czym byłaby AGI?
- Uczyłaby się nowych zadań jak człowiek
- Rozumiałaby abstrakcyjne koncepcje
- Wykazywała kreatywność i rozumowanie
- Mogłaby wykonywać KAŻDE zadanie intelektualne

### Czy AGI istnieje?
**Nie.** Mimo ogromnych postępów, AGI pozostaje celem badawczym. Szacunki, kiedy powstanie, wahają się od 2030 do 2100 roku – lub nigdy.

## ASI – Artificial Super Intelligence (Super AI)

To jeszcze bardziej hipotetyczna AI, która przewyższa ludzkość we wszystkim.

## Praktyczna tabela porównawcza

| Cecha | ANI | AGI | ASI |
|-------|-----|-----|-----|
| Status | Istnieje | Cel badawczy | Teoria |
| Zakres | Jedno zadanie | Wszystko | Wszystko+ |
| Przykład | ChatGPT, Siri | Brak | Brak |
| Ryzyko | Niskie | Średnie | Wysokie? |
| Korzyści | Duże | Ogromne | Nieznane |
        `,
        keyPoints: [
          "ANI to AI wyspecjalizowana w jednym zadaniu – to co mamy dziś",
          "AGI to hipotetyczna AI dorównująca człowiekowi we wszystkim",
          "ASI to teoretyczna superinteligencja przekraczająca ludzkość"
        ],
        funFact: "Sam Altman (CEO OpenAI) uważa, że AGI może powstać w ciągu najbliższych 5 lat, ale inni eksperci są bardziej sceptyczni!"
      },
      {
        id: "1-6",
        title: "AI w Polsce – jak wykorzystujemy AI w kraju",
        duration: "10 min",
        content: `
# Sztuczna inteligencja w Polsce

Polska aktywnie uczestniczy w rewolucji AI. Oto przegląd polskiej sceny AI.

## Polskie startupy AI

### Infermedica
- Diagnostyka medyczna oparta na AI
- Używana przez miliony pacjentów
- Współpraca z globalnymi firmami

### Synerise
- Personalizacja AI dla e-commerce
- Klienci na całym świecie
- Zaawansowane algorytmy behawioralne

### Deepflare
- Rozpoznawanie obrazów medycznych
- Wykrywanie chorób z CT i MRI
- Współpraca z polskimi szpitalami

## AI w polskich firmach

### Bankowość
- PKO BP używa chatbotów AI
- Analiza ryzyka kredytowego
- Wykrywanie fraudów

### Retail
- Allegro: rekomendacje produktów
- Żabka: optymalizacja asortymentu
- InPost: prognozowanie wolumenów

## Praktyczny przewodnik: Polskie narzędzia AI

| Kategoria | Narzędzie | Zastosowanie |
|-----------|-----------|--------------|
| Chatbot | PKO BP asystent | Obsługa klienta |
| E-commerce | Allegro Smart! | Rekomendacje |
| Medycyna | Infermedica | Diagnostyka |
| Tłumaczenia | Neuron.pl | PL <-> EN |
| Prawo | LegalGeek | Analiza umów |
        `,
        keyPoints: [
          "Polska ma prężne startupy AI jak Infermedica czy Synerise",
          "Banki i retail aktywnie wdrażają AI",
          "Polskie uczelnie prowadzą znaczące badania nad AI"
        ],
        funFact: "Polska zajmuje 6. miejsce w Europie pod względem liczby startupów AI!"
      },
      {
        id: "1-7",
        title: "Praktyczne porównanie modeli AI 2024/2025",
        duration: "10 min",
        content: `
# Który model AI wybrać?

Rynek AI rozwija się błyskawicznie. Oto praktyczny przewodnik po najnowszych modelach.

## Modele tekstowe (LLM)

### GPT-4o (OpenAI)
- **Mocne strony:** Wszechstronność, integracja z narzędziami
- **Słabe strony:** Może halucynować, droższy
- **Kiedy używać:** Złożone zadania, pisanie, kodowanie
- **Dostęp:** ChatGPT Plus (20$/mies)

### Claude 3.5 Sonnet (Anthropic)
- **Mocne strony:** Długi kontekst, bezpieczeństwo
- **Słabe strony:** Wolniejszy niż GPT-4o
- **Kiedy używać:** Analiza dokumentów, wrażliwe tematy
- **Dostęp:** claude.ai (20$/mies)

### Gemini 2.0 (Google)
- **Mocne strony:** Multimodalność, integracja z Google
- **Słabe strony:** Mniej „kreatywny"
- **Kiedy używać:** Praca z dokumentami Google, wyszukiwanie
- **Dostęp:** gemini.google.com

### Llama 3.1 (Meta)
- **Mocne strony:** Open source, można uruchomić lokalnie
- **Słabe strony:** Wymaga wiedzy technicznej
- **Kiedy używać:** Prywatność, customizacja
- **Dostęp:** Darmowy

## Tabela porównawcza

| Model | Cena | Kontekst | Multimodal | Polecany dla |
|-------|------|----------|------------|--------------|
| GPT-4o | $$$ | 128K | Tak | Ogólne użycie |
| Claude 3.5 | $$ | 200K | Tak | Długie dokumenty |
| Gemini 2.0 | $$ | 2M | Tak | Ekosystem Google |
| Llama 3.1 | Free | 128K | Nie | Deweloperzy |

## Ćwiczenie: Wybierz model

Który model byś wybrał do:
1. Napisania eseju na studia? → ____________
2. Analizy 100-stronicowego raportu? → ____________
3. Projektu wymagającego prywatności? → ____________
        `,
        keyPoints: [
          "Każdy model AI ma swoje mocne i słabe strony",
          "GPT-4o jest uniwersalny, Claude świetny do długich tekstów",
          "Wybór modelu zależy od konkretnego zadania"
        ],
        funFact: "Gemini 2.0 może przetworzyć kontekst o długości 2 milionów tokenów – to odpowiednik kilku powieści!"
      },
      {
        id: "1-8",
        title: "Słownik podstawowych pojęć AI",
        duration: "8 min",
        content: `
# Słowniczek AI dla początkujących

Nie daj się zgubić w żargonie! Oto najważniejsze terminy.

## Podstawowe pojęcia

### AI (Artificial Intelligence)
Sztuczna inteligencja – systemy komputerowe wykonujące zadania wymagające ludzkiej inteligencji.

### ML (Machine Learning)
Uczenie maszynowe – metoda, gdzie komputer uczy się z danych, a nie z jawnych instrukcji.

### LLM (Large Language Model)
Duży model językowy – AI wytrenowane na ogromnych ilościach tekstu (np. GPT-4, Claude).

### Prompt
Instrukcja/pytanie, które wysyłasz do AI.

### Token
Jednostka tekstu przetwarzana przez AI (słowo, część słowa lub znak).

### Hallucynacja
Gdy AI generuje fałszywe informacje brzmiące prawdziwie.

### Fine-tuning
Dostrajanie modelu do konkretnego zadania.

### Embedding
Reprezentacja tekstu/obrazu jako ciąg liczb (wektor).

## Pojęcia zaawansowane

| Termin | Znaczenie | Przykład |
|--------|-----------|----------|
| Transformer | Architektura sieci neuronowej | GPT, BERT |
| Attention | Mechanizm „uwagi" w transformerach | Które słowa są ważne |
| RLHF | Uczenie ze wzmocnieniem z feedbacku ludzi | ChatGPT uczy się być pomocny |
| RAG | Wzbogacanie odpowiedzi wiedzą zewnętrzną | AI z dostępem do dokumentów |
| Multimodal | AI rozumiejące tekst, obraz, dźwięk | GPT-4o, Gemini |

## Ćwiczenie: Znajdź definicję

Połącz termin z definicją:
1. Prompt → ___
2. Token → ___
3. Hallucynacja → ___

A) Jednostka tekstu dla AI
B) Instrukcja dla AI
C) Fałszywa informacja od AI
        `,
        keyPoints: [
          "AI, ML, LLM to podstawowe skróty do zapamiętania",
          "Prompt i token to kluczowe pojęcia w pracy z AI",
          "Hallucynacje to ważne ryzyko do świadomości"
        ],
        funFact: "Słowo 'transformers' w nazwie GPT nie ma nic wspólnego z filmami o robotach – to nazwa architektury sieci!"
      },
      {
        id: "1-9",
        title: "Pierwsze kroki z ChatGPT – praktyczny tutorial",
        duration: "10 min",
        content: `
# Twój pierwszy dzień z ChatGPT

Czas na praktykę! Nauczysz się podstaw używania ChatGPT.

## Krok 1: Załóż konto

1. Wejdź na **chat.openai.com**
2. Kliknij „Sign up"
3. Zarejestruj się mailem lub kontem Google
4. Potwierdź e-mail
5. Gotowe!

## Krok 2: Podstawowe prompty

Spróbuj tych promptów (skopiuj i wklej):

### Prompt 1: Wyjaśnienie
\`\`\`
Wyjaśnij, czym jest sztuczna inteligencja, w 3 prostych zdaniach, 
jakbyś tłumaczył to 10-latkowi.
\`\`\`

### Prompt 2: Pomysły
\`\`\`
Podaj 5 kreatywnych sposobów na wykorzystanie AI 
w codziennym życiu studenta.
\`\`\`

### Prompt 3: Porównanie
\`\`\`
Porównaj zalety i wady pracy zdalnej vs. pracy w biurze 
w formie tabeli.
\`\`\`

## Krok 3: Zasady dobrej rozmowy

✅ **Bądź konkretny**
- Zamiast: „Napisz o kotach"
- Lepiej: „Napisz 3 ciekawostki o kotach domowych"

✅ **Podaj kontekst**
- Zamiast: „Pomóż mi napisać e-mail"
- Lepiej: „Pomóż mi napisać profesjonalny e-mail do klienta przepraszający za opóźnienie dostawy"

✅ **Iteruj**
- „Rozwiń punkt 2"
- „Napisz to prościej"
- „Dodaj więcej przykładów"

## Praktyczne zadania

Wykonaj te zadania i zapisz odpowiedzi:

**Zadanie 1:** Poproś ChatGPT o plan nauki nowego języka (np. hiszpańskiego) na 30 dni.

**Zadanie 2:** Poproś o przepis na szybki obiad dla studenta z 5 składników.

**Zadanie 3:** Poproś o wyjaśnienie tematu, którego nie rozumiesz ze studiów/pracy.

## Czego unikać?

❌ Pytań o aktualne wydarzenia (AI nie zna najnowszych wiadomości)
❌ Polegania na AI w kwestiach medycznych/prawnych
❌ Kopiowania odpowiedzi bez weryfikacji
❌ Podawania poufnych danych osobowych
        `,
        keyPoints: [
          "ChatGPT jest dostępny za darmo na chat.openai.com",
          "Konkretność i kontekst to klucz do dobrych odpowiedzi",
          "Iteruj i doprecyzowuj, by uzyskać najlepsze wyniki"
        ],
        funFact: "ChatGPT osiągnął 100 milionów użytkowników w 2 miesiące – szybciej niż jakakolwiek aplikacja w historii!"
      },
      {
        id: "1-10",
        title: "AI vs ludzie – co AI robi lepiej?",
        duration: "10 min",
        content: `
# Co AI robi lepiej niż człowiek?

Nie ma potrzeby się bać – AI nie zastąpi ludzi we wszystkim. Ale w niektórych obszarach AI już dziś przewyższa człowieka.

## Zadania, w których AI dominuje

### 1. Przetwarzanie ogromnych ilości danych

**AI wygrywa:**
- Analiza milionów transakcji w sekundzie
- Wykrywanie wzorców w big data
- Przeszukiwanie całego internetu

**Przykład:** AlphaFold od DeepMind przeanalizował struktury milionów białek – praca, która zajęłaby ludziom lata, została wykonana w miesiące.

### 2. Zadania powtarzalne i precyzyjne

**AI wygrywa:**
- Zero zmęczenia
- Stała jakość przez 24/7
- Brak błędów wynikających z monotonii

**Przykład:** Roboty w fabrykach Tesla wykonują spawanie z precyzją do 0.1mm, bez przerw na odpoczynek.

### 3. Rozpozn awanie wzorców

**AI wygrywa:**
- Analiza obrazów medycznych (wykrywanie nowotworów)
- Rozpoznawanie twarzy w tłumie
- Detekcja fraudów finansowych

**Przykład:** AI w diagnostyce raka skóry osiąga dokładność 95% – porównywalną z najlepszymi dermatologami.

## Zadania, w których ludzie dominują

### 1. Kreatywność i innowacja

**Ludzie wygrywają:**
- Wymyślanie nowych koncepcji
- Łączenie odległych idei
- Prawdziwa oryginalność

**Dlaczego:** AI może kombinować istniejące pomysły, ale prawdziwa innowacja wymaga intuicji i doświadczenia życiowego.

### 2. Inteligencja emocjonalna

**Ludzie wygrywają:**
- Empatia i zrozumienie emocji
- Budowanie relacji
- Negocjacje wymagające zaufania

**Przykład:** Terapeuci, nauczyciele, liderzy – w tych rolach ludzka empatia jest nie do zastąpienia.

### 3. Rozumienie kontekstu i sensu

**Ludzie wygrywają:**
- Rozumienie ironii i sarkazmu
- Interpretacja niejednoznacznych sytuacji
- Etyczne dylematy

**Przykład:** Sędzia w sądzie musi rozumieć nie tylko literę prawa, ale i intencję, kontekst społeczny, i konsekwencje wyroku.

## Przyszłość: Współpraca, nie konkurencja

Najlepsza synergia powstaje, gdy łączymy:
- **Szybkość AI** + **Mądrość człowieka**
- **Precyzja AI** + **Kreatywność człowieka**
- **Skala AI** + **Empatia człowieka**

## Praktyczna tabela porównawcza

| Zadanie | AI | Człowiek | Najlepsze rozwiązanie |
|---------|----|---------|-----------------------|
| Analiza big data | ✅ | ❌ | AI |
| Kreatywne pisanie | ⚠️ |✅ | AI + człowiek |
| Diagnoza medyczna | ✅ | ✅ | AI + lekarz |
| Obsługa klienta | ⚠️ | ✅ | AI (podstawy) + człowiek (trudne sprawy) |
| Programowanie | ⚠️ | ✅ | AI (autouzupełnianie) + programista |
| Terapia | ❌ | ✅ | Człowiek |

## Case Study: Radiologia

W 2024 roku najskuteczniejszymi diagnostami nie byli ani AI, ani radiolodzy samodzielnie – ale **radiolodzy używający AI**.

- AI sama: 92% dokładności
- Radiolog sam: 88% dokładności  
- Radiolog + AI: **99.5% dokładności**
        `,
        keyPoints: [
          "AI przewyższa ludzi w analizie danych i zadaniach powtarzalnych",
          "Ludzie dominują w kreatywności, empatii i rozumieniu kontekstu",
          "Przyszłość należy do współpracy AI i ludzi, nie konkurencji"
        ],
        funFact: "AI może przeczytać wszystkie publikacje medyczne na świecie w kilka godzin – zadanie niemożliwe dla człowieka!"
      },
      {
        id: "1-11",
        title: "Etyka AI – bias, prywatność i odpowiedzialność",
        duration: "10 min",
        content: `
# Ciemna strona AI – o czym musimy wiedzieć

AI to potężne narzędzie. Jak każde narzędzie, może być użyte dobrze lub źle. Poznaj najważniejsze wyzwania etyczne.

## Bias (stronniczość) w AI

### Co to jest bias?

AI uczy się na danych stworzonych przez ludzi. Jeśli dane zawierają uprzedzenia, AI je powieli – a nawet wzmocni.

### Przykłady biasu w praktyce

**1. Rekrutacja (Amazon)**
W 2018 Amazon wycofał AI do rekrutacji, bo dyskryminowało kobiety. Dlaczego?
- Model uczył się na CV z ostatnich 10 lat
- Większość stanowisk tech była obsadzona przez mężczyzn
- AI nauczyło się, że być ideałnym kandydatem = być mężczyzną

**2. Rozpoznawanie twarzy**
Bad ania MIT pokazały, że systemy rozpoznawania twarzy:
- 99% dokładności dla białych mężczyzn
- 65% dokładności dla ciemnoskórych kobiet

Powód: zbiory treningowe zawierały głównie zdjęcia białych osób.

**3. Kredyty bankowe**
Algorytmy oceny zdolności kredytowej mogą dyskryminować ze względu na kod pocztowy (jako proxy dla rasy lub statusu społecznego).

## Prywatność i dane osobowe

### Zagrożenia

- **Surveillance capitalism:** Twoje dane są towarem
- **Profilowanie behawioralne:** AI przewiduje twoje zachowanie
- **Brak zgody:** Nie wiesz, jak wykorzystywane są twoje dane

### RODO i ochrona w EU

Unia Europejska wprowadziła jedne z najostrzejszych regulacji:
- **Prawo do wyjaśnienia:** Możesz żądać wyjaśnienia decyzji AI
- **Prawo do usunięcia danych:** Prawo do bycia zapomnianym
- **Zgoda:** Firmy muszą prosić o zgodę na przetwarzanie

### AI Act (2024)

Pierwsza kompleksowa regulacja AI na świecie:
- Zakazane praktyki (np. social scoring jak w Chinach)
- Wysokie ryzyko (medycyna, rekrutacja) – ścisła kontrola
- Transparentność (np. oznaczanie AI-generated content)

## Odpowiedzialność za decyzje AI

### Kto odpowiada, gdy AI się myli?

**Problem klasyczny:**
Samochód autonomiczny musi wybrać:
- Uderzyć w pieszego?
- Zjechać z drogi, ryzykując życie pasażera?

**Pytania bez prostych odpowiedzi:**
- Czy twórca AI?
- Czy użytkownik AI?
- Czy sama AI (w przyszłości)?

## Dezinformacja i deepfakes

### Zagrożenie

AI może:
- Generować fałszywe newsy
- Tworzyć przekonujące deepfakes polityków
- Manipulować opinią publiczną

### Przykład: Wybory 2024

Pojawiły się deepfakes kandydatów mówiących rzeczy, których nigdy nie powiedzieli. Część wyborców uwierzyła.

### Jak się bronić?

- Sprawdzaj źródła
- Szukaj potwierdzeń w wielu miejscach
- Używaj narzędzi do detekcji deepfakes
- Krytycznie myśl

## Zasady odpowiedzialnego używania AI

### Jako użytkownik:

✅ **Weryfikuj odpowiedzi AI**
✅ **Nie ufaj ślepo**
✅ **Oznaczaj treści stworzone przez AI**
✅ **Dbaj o prywatność (nie podawaj danych osobowych)**
✅ **Myśl o konsekwencjach**

### Jako twórca:

✅ **Testuj na bias**
✅ **Dbaj o różnorodność danych**
✅ **Projektuj z myślą o bezpieczeństwie**
✅ **Transparentność (wyjaśniaj, jak działa AI)**
✅ **Human-in-the-loop (człowiek w ostatecznej decyzji)**

## Ćwiczenie praktyczne

Zastanów się:
1. W jakich sytuacjach AI NIE powinna podejmować decyzji sama?
2. Czy spotkałeś się z biasem AI? Jak?
3. Jak chronisz swoją prywatność w erze AI?
        `,
        keyPoints: [
          "Bias w AI odzwierciedla uprzedzenia w danych treningowych",
          "RODO i AI Act chronią prywatność w EU",
          "Odpowiedzialne używanie AI wymaga krytycznego myślenia"
        ],
        funFact: "W 2023 roku ponad 80% deepfakes online to pornografia non-consensual – jeden z najpoważniejszych problemów etycznych AI."
      }
    ],
    quiz: [
      {
        id: "q1-1",
        question: "Kto jest uważany za ojca sztucznej inteligencji?",
        options: ["Steve Jobs", "Alan Turing", "Bill Gates", "Elon Musk"],
        correctIndex: 1,
        explanation: "Alan Turing w 1950 roku stworzył Test Turinga i zadał fundamentalne pytanie o myślenie maszyn."
      },
      {
        id: "q1-2",
        question: "W którym roku powstał termin 'Sztuczna Inteligencja'?",
        options: ["1943", "1956", "1984", "2001"],
        correctIndex: 1,
        explanation: "Termin AI został oficjalnie użyty na konferencji w Dartmouth College w 1956 roku."
      },
      {
        id: "q1-3",
        question: "Który typ uczenia maszynowego używa danych z etykietami?",
        options: ["Nienadzorowane", "Ze wzmocnieniem", "Nadzorowane", "Głębokie"],
        correctIndex: 2,
        explanation: "Uczenie nadzorowane (Supervised Learning) wykorzystuje dane z odpowiedziami/etykietami."
      },
      {
        id: "q1-4",
        question: "Co to jest 'Deep Learning'?",
        options: ["Nauka o głębinach oceanu", "Sieć z wieloma warstwami ukrytymi", "Typ pamięci komputera", "Język programowania"],
        correctIndex: 1,
        explanation: "Deep Learning to sieci neuronowe z wieloma warstwami ukrytymi."
      },
      {
        id: "q1-5",
        question: "Które z poniższych NIE używa AI?",
        options: ["Face ID", "Kalkulator", "Rekomendacje Netflix", "Google Translate"],
        correctIndex: 1,
        explanation: "Zwykły kalkulator wykonuje proste operacje matematyczne bez AI. Pozostałe usługi intensywnie wykorzystują sztuczną inteligencję."
      },
      {
        id: "q1-6",
        question: "Co oznacza skrót ANI?",
        options: ["Artificial Narrow Intelligence", "Advanced Neural Interface", "Automated Network Intelligence", "Analog Neuron Integration"],
        correctIndex: 0,
        explanation: "ANI (Artificial Narrow Intelligence) to wąska AI wyspecjalizowana w jednym zadaniu."
      },
      {
        id: "q1-7",
        question: "Czy AGI (Artificial General Intelligence) już istnieje?",
        options: ["Tak, to ChatGPT", "Tak, to Google DeepMind", "Nie, to wciąż cel badawczy", "Tak, od 2020 roku"],
        correctIndex: 2,
        explanation: "AGI pozostaje celem badawczym. Żaden obecny system AI nie dorównuje człowiekowi we wszystkich zadaniach."
      },
      {
        id: "q1-8",
        question: "Który polski startup AI specjalizuje się w diagnostyce medycznej?",
        options: ["Allegro", "Infermedica", "InPost", "CD Projekt"],
        correctIndex: 1,
        explanation: "Infermedica to polski startup oferujący diagnostykę medyczną opartą na AI."
      },
      {
        id: "q1-9",
        question: "Co to jest 'hallucynacja' w kontekście AI?",
        options: ["Błąd w kodzie programu", "Generowanie fałszywych informacji", "Typ sieci neuronowej", "Forma uczenia maszynowego"],
        correctIndex: 1,
        explanation: "Hallucynacja to sytuacja, gdy AI generuje informacje brzmiące prawdziwie, ale będące fałszywe."
      },
      {
        id: "q1-10",
        question: "Który model AI ma największe okno kontekstowe (2024)?",
        options: ["GPT-4o", "Claude 3.5", "Gemini 2.0", "Llama 3.1"],
        correctIndex: 2,
        explanation: "Gemini 2.0 od Google może obsłużyć kontekst do 2 milionów tokenów, co jest rekordem."
      }
    ]
  },
  {
    id: 2,
    slug: "modele-jezykowe",
    title: "Modele językowe",
    description: "Dowiedz się, jak działają ChatGPT, Claude i Gemini. Opanuj prompt engineering i poznaj praktyczne porównanie modeli.",
    icon: "MessageSquare",
    duration: "70 min",
    lessonsCount: 7,
    color: "accent",
    heroImage: {
      src: module2Hero,
      alt: "Wizualizacja sieci neuronowej z przepływem tekstu i danymi językowymi"
    },
    lessons: [
      {
        id: "2-1",
        title: "Co to jest model językowy?",
        duration: "10 min",
        content: `
# Model językowy – podstawy

Model językowy to system AI, który „rozumie" i generuje tekst. Ale jak to naprawdę działa?

## Prosta definicja

Model językowy to program, który przewiduje **następne słowo** w zdaniu. To wszystko!

Gdy piszesz: „Pada deszcz, więc wezmę..."
Model przewiduje: „parasol" (bo to najczęściej następuje po takiej sekwencji).

## Skąd model to wie?

Model przeanalizował **miliardy tekstów** z internetu:
- Książki
- Artykuły
- Strony internetowe
- Rozmowy
- Dokumenty

Dzięki temu nauczył się wzorców języka – które słowa często występują razem, jak budowane są zdania, jakie są typowe odpowiedzi na pytania.

## Statystyka vs zrozumienie

Ważne pytanie: czy model naprawdę „rozumie" tekst?

Naukowcy dyskutują o tym do dziś. Model nie ma świadomości ani emocji. Jest bardzo zaawansowaną maszyną statystyczną, która:
- Znajduje wzorce w danych
- Generuje tekst podobny do tego, na którym się uczył

## Przykład w praktyce

Gdy pytasz: „Jaka jest stolica Polski?"
Model nie „wie" odpowiedzi w ludzkim sensie. Ale widział tysiące tekstów, gdzie po takim pytaniu następowała odpowiedź „Warszawa".
        `,
        keyPoints: [
          "Model językowy przewiduje następne słowo",
          "Uczył się na miliardach tekstów",
          "To zaawansowana statystyka, nie prawdziwe rozumienie"
        ],
        funFact: "GPT-3 uczył się na 45 terabajtach tekstu – to odpowiednik około 45 milionów książek!"
      },
      {
        id: "2-2",
        title: "Jak działa ChatGPT?",
        duration: "12 min",
        content: `
# ChatGPT od środka

ChatGPT to jeden z najpopularniejszych modeli językowych. Jak właściwie działa?

## Architektura Transformer

ChatGPT używa architektury zwanej **Transformer** (stąd „T" w nazwie GPT). Kluczowy mechanizm to **uwaga** (attention) – model „patrzy" na wszystkie słowa w tekście i decyduje, które są ważne dla kontekstu.

## GPT = Generative Pre-trained Transformer

- **Generative** – generuje nowy tekst
- **Pre-trained** – wstępnie wytrenowany na ogromnych danych
- **Transformer** – architektura sieci neuronowej

## Trening ChatGPT

### Etap 1: Pre-training
Model czyta internet i uczy się wzorców języka.

### Etap 2: Fine-tuning
Model jest dostrajany na przykładach rozmów.

### Etap 3: RLHF
Reinforcement Learning from Human Feedback – ludzie oceniają odpowiedzi, a model uczy się być pomocny i bezpieczny.

## Jak generuje odpowiedź?

1. Otrzymuje twoje pytanie
2. Przetwarza je przez miliardy parametrów
3. Generuje odpowiedź słowo po słowie
4. Każde słowo wpływa na wybór następnego

## Dlaczego jest tak dobry?

- Ogromna skala (biliony parametrów)
- Różnorodne dane treningowe
- Feedback od ludzi
- Ciągłe ulepszenia
        `,
        keyPoints: [
          "GPT = Generative Pre-trained Transformer",
          "Mechanizm uwagi (attention) jest kluczowy",
          "RLHF sprawia, że model jest pomocny i bezpieczny"
        ],
        funFact: "Trening GPT-4 kosztował szacunkowo ponad 100 milionów dolarów!"
      },
      {
        id: "2-3",
        title: "Tokeny, kontekst i pamięć AI",
        duration: "10 min",
        content: `
# Tokeny i okno kontekstowe

Gdy rozmawiasz z ChatGPT, twój tekst jest dzielony na mniejsze kawałki zwane **tokenami**.

## Co to jest token?

Token to fragment tekstu – może to być:
- Całe słowo: „kot" = 1 token
- Część słowa: „programowanie" = 2-3 tokeny
- Znak przestankowy: „!" = 1 token

## Przykład tokenizacji

„Lubię programować w Pythonie!" → około 6 tokenów

## Okno kontekstowe

Model ma ograniczoną „pamięć" – tzw. **okno kontekstowe**. To maksymalna liczba tokenów, które może przetworzyć naraz.

| Model | Okno kontekstowe |
|-------|------------------|
| GPT-3.5 | ~4 000 tokenów |
| GPT-4 | ~8 000-128 000 tokenów |
| Claude 3 | ~200 000 tokenów |

## Dlaczego to ważne?

W długiej rozmowie model może „zapomnieć" początek. Gdy przekroczysz limit, starsze wiadomości są usuwane.

## Czy AI ma prawdziwą pamięć?

Nie w tradycyjnym sensie. Model:
- Nie pamięta poprzednich rozmów (chyba że używa specjalnej funkcji)
- Każda sesja zaczyna się od zera
- Kontekst to jedyna „pamięć" w trakcie rozmowy

## Wskazówka praktyczna

Jeśli model „zapomni" coś ważnego, po prostu przypomnij mu to w kolejnej wiadomości!
        `,
        keyPoints: [
          "Token to podstawowa jednostka tekstu dla AI",
          "Okno kontekstowe ogranicza 'pamięć' modelu",
          "AI nie pamięta poprzednich rozmów automatycznie"
        ],
        funFact: "Słowo 'ChatGPT' to 3 tokeny, ale emoji może być nawet 4+ tokenów!"
      },
      {
        id: "2-4",
        title: "Prompt engineering – sztuka zadawania pytań",
        duration: "10 min",
        content: `
# Prompt Engineering

**Prompt** to tekst, który wysyłasz do AI. **Prompt engineering** to sztuka formułowania promptów tak, by uzyskać najlepsze odpowiedzi.

## Dlaczego to ważne?

Ten sam model może dać:
- Świetną odpowiedź
- Przeciętną odpowiedź
- Totalnie nietrafioną odpowiedź

...w zależności od tego, JAK zapytasz!

## Zasady dobrego promptu

### 1. Bądź konkretny
❌ „Napisz coś o kotach"
✅ „Napisz 3 ciekawe fakty o kotach domowych, każdy w 2 zdaniach"

### 2. Podaj kontekst
❌ „Jak to naprawić?"
✅ „Mam błąd w kodzie Python: TypeError... Jak to naprawić?"

### 3. Określ format
❌ „Wymień kraje Europy"
✅ „Wymień 10 krajów Europy w formie listy numerowanej"

### 4. Nadaj rolę
❌ „Wyjaśnij fotosyntezę"
✅ „Jesteś nauczycielem biologii. Wyjaśnij fotosyntezę uczniowi 5 klasy"

## Zaawansowane techniki

### Chain of Thought
„Rozwiąż problem krok po kroku, pokazując tok rozumowania"

### Few-shot Learning
Daj przykłady pożądanej odpowiedzi przed pytaniem.

### Iteracja
Doprecyzowuj w kolejnych wiadomościach: „Rozwiń punkt 2" lub „Uprość język"

## Praktyczny szablon

\`\`\`
Kontekst: [opisz sytuację]
Zadanie: [co ma zrobić AI]
Format: [jak ma wyglądać odpowiedź]
Ograniczenia: [czego unikać]
\`\`\`
        `,
        keyPoints: [
          "Jakość promptu wpływa na jakość odpowiedzi",
          "Bądź konkretny, podaj kontekst i określ format",
          "Nadawanie roli AI poprawia wyniki"
        ],
        funFact: "Prompt engineer to jedna z najnowszych profesji – firmy płacą nawet 300 000$ rocznie za ekspertów od promptów!"
      },
      {
        id: "2-5",
        title: "Ograniczenia i halucynacje AI",
        duration: "8 min",
        content: `
# Czego AI nie potrafi

Mimo imponujących możliwości, modele językowe mają poważne ograniczenia.

## Halucynacje AI

**Halucynacja** to sytuacja, gdy AI generuje informacje, które brzmią prawdziwie, ale są fałszywe.

### Przykłady halucynacji:
- Wymyślone cytaty
- Nieistniejące książki lub artykuły
- Błędne daty i fakty
- Fałszywe odniesienia do źródeł

### Dlaczego to się dzieje?
Model nie „wie" prawdy – przewiduje prawdopodobny tekst. Jeśli wzorzec pasuje, wygeneruje go, nawet jeśli jest nieprawdziwy.

## Inne ograniczenia

### Brak wiedzy o teraźniejszości
Model wie tylko to, co było w danych treningowych. Nie zna dzisiejszych wydarzeń.

### Brak rozumowania matematycznego
Może popełniać błędy w obliczeniach – nie jest kalkulatorem!

### Brak stałej pamięci
Nie pamięta poprzednich rozmów (bez specjalnych funkcji).

### Stronniczość (bias)
Dane treningowe mogą zawierać uprzedzenia, które model powiela.

## Jak się chronić?

1. **Weryfikuj fakty** – sprawdzaj ważne informacje
2. **Pytaj o źródła** – i sprawdzaj, czy istnieją
3. **Używaj do wsparcia, nie zastąpienia** – AI to asystent, nie wyrocznia
4. **Bądź krytyczny** – jeśli coś brzmi podejrzanie, prawdopodobnie jest

## Złota zasada

> AI jest świetne do inspiracji i przyspieszenia pracy, ale ostateczna weryfikacja należy do człowieka.
        `,
        keyPoints: [
          "Halucynacje to fałszywe informacje generowane przez AI",
          "AI nie zna bieżących wydarzeń i może się mylić",
          "Zawsze weryfikuj ważne informacje z innych źródeł"
        ],
        funFact: "W 2023 roku prawnik w USA użył w sądzie przypadków prawnych wygenerowanych przez ChatGPT – okazało się, że wszystkie były zmyślone!"
      },
      {
        id: "2-6",
        title: "ChatGPT vs Claude vs Gemini – praktyczne porównanie",
        duration: "12 min",
        content: `
# Wielkie porównanie modeli 2024/2025

Który model wybrać do konkretnego zadania? Oto praktyczny przewodnik.

## ChatGPT (OpenAI)

### Wersje
- **GPT-4o** – najnowszy, multimodalny
- **GPT-4 Turbo** – szybszy, tańszy
- **GPT-3.5** – darmowy, podstawowy

### Mocne strony
✅ Wszechstronność
✅ Ogromna baza użytkowników i pluginów
✅ Code Interpreter (analiza danych)
✅ DALL-E 3 zintegrowany

### Słabe strony
❌ Może halucynować
❌ Droższy niż konkurencja
❌ Okno kontekstowe mniejsze niż Claude

### Najlepszy do
- Kodowanie i debugging
- Ogólne pytania
- Analiza danych z kodem
- Generowanie obrazów

## Claude (Anthropic)

### Wersje
- **Claude 3.5 Sonnet** – najnowszy, najlepszy
- **Claude 3 Opus** – najpotężniejszy
- **Claude 3 Haiku** – szybki i tani

### Mocne strony
✅ Ogromne okno kontekstowe (200K tokenów!)
✅ Najlepszy w długich dokumentach
✅ Bezpieczeństwo i etyka
✅ Naturalna rozmowa

### Słabe strony
❌ Brak generowania obrazów
❌ Mniejszy ekosystem pluginów
❌ Czasem zbyt ostrożny

### Najlepszy do
- Analiza długich dokumentów
- Pisanie kreatywne
- Tematy wymagające niuansów
- Bezpieczne zastosowania

## Gemini (Google)

### Wersje
- **Gemini 2.0 Flash** – najnowszy, szybki
- **Gemini 1.5 Pro** – zaawansowany
- **Gemini 1.5 Flash** – ekonomiczny

### Mocne strony
✅ REKORDOWE okno kontekstowe (2M tokenów!)
✅ Integracja z Google (Docs, Gmail, Search)
✅ Multimodalność (tekst, obraz, audio, wideo)
✅ Dostęp do aktualnych informacji

### Słabe strony
❌ Czasem mniej kreatywny
❌ Może dawać "bezpieczne" odpowiedzi
❌ Mniejsza precyzja w kodowaniu

### Najlepszy do
- Praca z ekosystemem Google
- Analiza wideo i audio
- Research wymagający aktualnych danych
- Bardzo długie dokumenty

## Tabela porównawcza

| Cecha | ChatGPT | Claude | Gemini |
|-------|---------|--------|--------|
| Kontekst | 128K | 200K | 2M |
| Obrazy | DALL-E 3 | ❌ | Imagen 3 |
| Kodowanie | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| Pisanie | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| Cena | $$$ | $$ | $ |
| Aktualność | Do 2024 | Do 2024 | Real-time |

## Ćwiczenie praktyczne

Zadaj to samo pytanie wszystkim trzem modelom:
> "Napisz 3-paragrafowy esej o wpływie social media na zdrowie psychiczne młodzieży"

Porównaj: ton, głębokość, styl pisania.
        `,
        keyPoints: [
          "ChatGPT najlepszy do kodowania i ogólnych zadań",
          "Claude lider w długich dokumentach i pisaniu",
          "Gemini oferuje integrację z Google i aktualność"
        ],
        funFact: "Okno kontekstowe Gemini 2.0 (2 miliony tokenów) to odpowiednik około 1500 stron tekstu – więcej niż Władca Pierścieni!"
      },
      {
        id: "2-7",
        title: "Zaawansowany prompt engineering – techniki ekspertów",
        duration: "10 min",
        content: `
# Techniki promptowania dla zaawansowanych

Opanuj metody używane przez profesjonalistów.

## 1. Chain of Thought (CoT)

Poproś AI o rozumowanie krok po kroku.

### Przykład
❌ "Ile to 23 × 47?"
✅ "Oblicz 23 × 47, pokazując każdy krok obliczeń"

### Kiedy używać
- Problemy matematyczne
- Logiczne zagadki
- Złożone analizy

## 2. Few-shot Learning

Daj przykłady pożądanych odpowiedzi.

### Przykład
\`\`\`
Przetłumacz formalnie na angielski:
"Dzień dobry" → "Good morning"
"Jak się masz?" → "How do you do?"
"Dziękuję bardzo" → [AI uzupełni w tym samym stylu]
\`\`\`

### Kiedy używać
- Specyficzny format odpowiedzi
- Niestandardowe tłumaczenia
- Kategoryzacja

## 3. Role Prompting

Nadaj AI konkretną ekspertyzę.

### Przykłady ról
\`\`\`
"Jesteś doświadczonym prawnikiem specjalizującym się w RODO..."
"Jako senior developer Python z 15-letnim doświadczeniem..."
"Wciel się w rolę nauczyciela chemii liceum..."
\`\`\`

## 4. Structured Output

Wymuś konkretny format.

### Przykład
\`\`\`
Odpowiedz w formacie JSON:
{
  "podsumowanie": "...",
  "kluczowe_punkty": ["...", "..."],
  "rekomendacja": "..."
}
\`\`\`

## 5. Self-Consistency

Poproś o wiele odpowiedzi i wybierz najlepszą.

### Przykład
\`\`\`
Podaj 3 różne rozwiązania tego problemu, 
a następnie wybierz najlepsze i wyjaśnij dlaczego.
\`\`\`

## 6. Mega-prompt (System Prompt)

Stwórz rozbudowaną instrukcję początkową.

### Struktura
\`\`\`
# ROLA
[Kim jest AI]

# KONTEKST
[Tło zadania]

# INSTRUKCJE
[Co ma robić]

# FORMAT
[Jak odpowiadać]

# OGRANICZENIA
[Czego unikać]

# PRZYKŁAD
[Wzór odpowiedzi]
\`\`\`

## Szablon uniwersalny

\`\`\`
Jesteś [ROLA] pomagającym [KOMU].

Kontekst: [SYTUACJA]

Zadanie: [CO ZROBIĆ]

Wymagania:
- [PUNKT 1]
- [PUNKT 2]

Format odpowiedzi: [FORMAT]

Ograniczenia: [CZEGO NIE ROBIĆ]
\`\`\`

## Ćwiczenie

Stwórz mega-prompt dla: "Asystent do nauki języka hiszpańskiego dla początkujących"
        `,
        keyPoints: [
          "Chain of Thought wymusza rozumowanie krok po kroku",
          "Few-shot learning uczy przez przykłady",
          "Mega-prompts dają pełną kontrolę nad zachowaniem AI"
        ],
        funFact: "Badania pokazują, że dodanie 'Weźmy to krok po kroku' do promptu może zwiększyć dokładność o 40%!"
      }
    ],
    quiz: [
      {
        id: "q2-1",
        question: "Co robi model językowy na najbardziej podstawowym poziomie?",
        options: ["Tłumaczy języki", "Przewiduje następne słowo", "Wyszukuje w internecie", "Zapisuje dane"],
        correctIndex: 1,
        explanation: "Model językowy przewiduje najbardziej prawdopodobne następne słowo w sekwencji."
      },
      {
        id: "q2-2",
        question: "Co oznacza skrót GPT?",
        options: ["General Purpose Technology", "Generative Pre-trained Transformer", "Global Processing Tool", "Graphical Processing Terminal"],
        correctIndex: 1,
        explanation: "GPT = Generative Pre-trained Transformer."
      },
      {
        id: "q2-3",
        question: "Co to jest 'token' w kontekście AI?",
        options: ["Kryptowaluta", "Fragment tekstu przetwarzany przez model", "Hasło dostępu", "Typ pamięci"],
        correctIndex: 1,
        explanation: "Token to podstawowa jednostka tekstu (słowo, część słowa lub znak) przetwarzana przez model."
      },
      {
        id: "q2-4",
        question: "Która technika prompt engineeringu polega na nadaniu AI konkretnej roli?",
        options: ["Chain of Thought", "Few-shot Learning", "Role Playing", "Iteracja"],
        correctIndex: 2,
        explanation: "Nadawanie roli (np. 'Jesteś nauczycielem') to popularna technika poprawiająca jakość odpowiedzi."
      },
      {
        id: "q2-5",
        question: "Co to jest 'halucynacja' AI?",
        options: ["Błąd sprzętowy", "Generowanie fałszywych informacji", "Rodzaj modelu", "Technika treningu"],
        correctIndex: 1,
        explanation: "Halucynacja to gdy AI generuje treści brzmiące prawdziwie, ale będące nieprawdziwe."
      },
      {
        id: "q2-6",
        question: "Który model ma największe okno kontekstowe w 2024?",
        options: ["ChatGPT GPT-4o", "Claude 3.5 Sonnet", "Gemini 2.0", "Llama 3.1"],
        correctIndex: 2,
        explanation: "Gemini 2.0 oferuje rekordowe okno kontekstowe wynoszące 2 miliony tokenów."
      },
      {
        id: "q2-7",
        question: "Na czym polega technika Chain of Thought?",
        options: ["Łączenie wielu modeli", "Rozumowanie krok po kroku", "Tłumaczenie łańcuchowe", "Pamięć długoterminowa"],
        correctIndex: 1,
        explanation: "Chain of Thought to technika, gdzie prosimy AI o pokazanie rozumowania krok po kroku."
      }
    ]
  },
  {
    id: 3,
    slug: "ai-i-obrazy",
    title: "AI i obrazy",
    description: "Odkryj, jak AI tworzy i rozpoznaje obrazy. DALL-E, Midjourney, FLUX i inne narzędzia 2024/2025.",
    icon: "Image",
    duration: "75 min",
    lessonsCount: 7,
    color: "primary",
    heroImage: {
      src: module3Hero,
      alt: "Abstrakcyjna wizualizacja generowania obrazów AI z kolorowymi kształtami"
    },
    lessons: [
      {
        id: "3-1",
        title: "Jak AI rozpoznaje obrazy?",
        duration: "10 min",
        content: `
# Computer Vision – widzenie komputerowe

Jak komputer „widzi" obrazy? To fascynujące pytanie, na które odpowiedź daje dziedzina **Computer Vision**.

## Obraz jako liczby

Dla komputera obraz to macierz liczb:
- Każdy piksel ma wartość (lub 3 wartości dla RGB)
- Obraz 1000x1000 to milion pikseli
- AI analizuje te liczby, szukając wzorców

## Sieci konwolucyjne (CNN)

**Convolutional Neural Networks** to specjalne sieci neuronowe do obrazów:

1. **Warstwa konwolucyjna** – wykrywa cechy (krawędzie, tekstury)
2. **Pooling** – zmniejsza rozmiar, zachowując ważne informacje
3. **Warstwy gęste** – klasyfikują obiekt

## Jak rozpoznaje kota?

1. Pierwsze warstwy wykrywają: krawędzie, kolory
2. Środkowe warstwy: oczy, uszy, łapy
3. Głębsze warstwy: „całego kota"
4. Ostatnia warstwa: „To kot z 95% pewnością!"

## Zastosowania

- **Rozpoznawanie twarzy** – odblokowanie telefonu
- **Samochody autonomiczne** – widzą drogę i przeszkody
- **Medycyna** – wykrywanie nowotworów na zdjęciach
- **Bezpieczeństwo** – monitoring i analiza
- **Rolnictwo** – identyfikacja chorób roślin

## Ograniczenia

- Może być oszukane przez „adversarial attacks"
- Wymaga dużo danych do treningu
- Może powielać uprzedzenia z danych
        `,
        keyPoints: [
          "Dla komputera obraz to macierz liczb",
          "CNN wykrywają cechy od prostych do złożonych",
          "Computer Vision ma szerokie zastosowania praktyczne"
        ],
        funFact: "Pierwsze sieci rozpoznające obrazy w 2012 roku popełniały 15% błędów. Dziś najlepsze modele mają dokładność lepszą niż człowiek!"
      },
      {
        id: "3-2",
        title: "Generowanie obrazów – DALL-E, Midjourney, Stable Diffusion",
        duration: "12 min",
        content: `
# Rewolucja generatywnej grafiki

W 2022 roku świat oszalał na punkcie AI tworzącego obrazy. Oto główni gracze:

## DALL-E (OpenAI)

- Stworzony przez twórców ChatGPT
- Nazwa to połączenie Salvador Dalí + WALL-E
- Mocne strony: realizm, rozumienie złożonych promptów
- Dostęp: przez ChatGPT Plus lub API

## Midjourney

- Niezależna firma, dostęp przez Discord
- Mocne strony: artystyczny styl, estetyka
- Popularny wśród artystów i designerów
- Wersje: v5, v6 coraz bardziej realistyczne

## Stable Diffusion

- Open source – możesz uruchomić lokalnie
- Największa elastyczność i customizacja
- Wiele modeli społeczności (fine-tuned)
- Wolniejszy, ale darmowy

## Jak to działa?

### Model dyfuzyjny (Diffusion)

1. **Zaczynamy od szumu** – losowe piksele
2. **Stopniowo „oczyszczamy"** – model usuwa szum
3. **Prompt kieruje procesem** – tekst mówi, co ma powstać
4. **Wynik** – obraz zgodny z opisem

## Porównanie

| Cecha | DALL-E | Midjourney | Stable Diffusion |
|-------|--------|------------|------------------|
| Cena | Płatny | Płatny | Darmowy |
| Jakość | Wysoka | Bardzo wysoka | Zależy od modelu |
| Łatwość | Łatwy | Średni | Trudniejszy |
| Customizacja | Niska | Średnia | Bardzo wysoka |
        `,
        keyPoints: [
          "DALL-E, Midjourney i Stable Diffusion to główne narzędzia",
          "Modele dyfuzyjne tworzą obraz z szumu",
          "Każde narzędzie ma swoje mocne strony"
        ],
        funFact: "Obraz wygenerowany przez Midjourney wygrał konkurs artystyczny w 2022 roku, wywołując ogromną dyskusję o przyszłości sztuki!"
      },
      {
        id: "3-3",
        title: "Jak pisać dobre prompty dla obrazów",
        duration: "10 min",
        content: `
# Prompt Engineering dla obrazów

Generowanie świetnych obrazów wymaga umiejętności pisania promptów. Oto sprawdzone techniki:

## Struktura dobrego promptu

\`\`\`
[Główny temat], [styl], [oświetlenie], [kompozycja], [szczegóły], [jakość]
\`\`\`

## Przykład

❌ Słaby prompt:
„Kot"

✅ Dobry prompt:
„Majestatyczny rudy kot perski siedzący na aksamitnej poduszce, w stylu obrazów renesansowych, miękkie światło z okna, ultra szczegółowy, 8K"

## Elementy do uwzględnienia

### 1. Temat i akcja
- Co/kto jest na obrazie?
- Co robi?

### 2. Styl artystyczny
- Fotorealizm, anime, akwarela, oil painting
- Artysta: „w stylu Van Gogha"
- Era: „retro 80s", „futurystyczny"

### 3. Oświetlenie
- Golden hour, neonowe, dramatyczne cienie
- Backlit, studio lighting, natural light

### 4. Kompozycja
- Close-up, wide shot, bird's eye view
- Rule of thirds, centered

### 5. Szczegóły techniczne
- 8K, ultra detailed, hyperrealistic
- Sharp focus, bokeh background

## Negative prompts

Możesz też powiedzieć, czego NIE chcesz:
„Bez tekstu, bez zniekształconych rąk, bez rozmycia"

## Iteracja

Rzadko pierwszy prompt jest idealny. Eksperymentuj!
- Zmień styl
- Dodaj szczegóły
- Usuń elementy
        `,
        keyPoints: [
          "Struktura: temat, styl, oświetlenie, kompozycja, jakość",
          "Im więcej szczegółów, tym lepszy wynik",
          "Negative prompts pomagają uniknąć problemów"
        ],
        funFact: "Profesjonalni użytkownicy Midjourney często piszą prompty mające 200+ słów dla uzyskania perfekcyjnych rezultatów!"
      },
      {
        id: "3-4",
        title: "Deepfake i etyka AI",
        duration: "10 min",
        content: `
# Ciemna strona AI obrazów

Technologia generowania obrazów niesie ze sobą poważne wyzwania etyczne.

## Co to jest Deepfake?

**Deepfake** to syntetyczne media, w których twarz lub głos osoby są zamieniane lub generowane przez AI.

### Jak działa?
1. AI analizuje tysiące zdjęć/filmów osoby
2. Uczy się rysów twarzy, mimiki, głosu
3. Może wstawić tę twarz w dowolne wideo

## Zagrożenia

### Dezinformacja
- Fałszywe wypowiedzi polityków
- Manipulacja wyborami
- Fake news na nowym poziomie

### Oszustwa
- Podszywanie się pod osoby
- Wyłudzenia (np. fałszywe rozmowy video z „szefem")

### Naruszenie prywatności
- Pornografia deepfake (bez zgody)
- Nękanie i szantaż

### Podważenie zaufania
- „Czy to prawdziwe wideo?"
- Paradoks: nawet prawdziwe materiały mogą być odrzucane jako fake

## Jak się bronić?

### Narzędzia wykrywające
- AI do wykrywania AI (ironia!)
- Analiza niespójności

### Prawo
- Nowe regulacje (EU AI Act)
- Kary za tworzenie deepfakes

### Edukacja
- Krytyczne myślenie
- Weryfikacja źródeł

## Dobre zastosowania

Nie wszystko jest złe:
- Filmy i gry (rejuvenacja aktorów)
- Edukacja (historyczne postacie „mówiące")
- Dostępność (synteza mowy dla niepełnosprawnych)
        `,
        keyPoints: [
          "Deepfake to syntetyczne media z AI",
          "Zagrożenia: dezinformacja, oszustwa, naruszenie prywatności",
          "Obrona: narzędzia, prawo, edukacja"
        ],
        funFact: "W 2023 roku deepfake CEO firmy energetycznej wyłudził 243 000 dolarów przez fałszywy telefon!"
      },
      {
        id: "3-5",
        title: "AI w fotografii i designie",
        duration: "10 min",
        content: `
# AI rewolucjonizuje twórcze branże

AI stało się nieodzownym narzędziem dla fotografów i designerów.

## AI w fotografii

### Edycja zdjęć
- **Automatyczna retusz** – usuwanie niedoskonałości
- **Zmiana tła** – jednym kliknięciem
- **Kolorowanie** – B&W do kolorowych
- **Upscaling** – zwiększanie rozdzielczości

### Narzędzia
- Adobe Photoshop (Generative Fill)
- Luminar Neo
- Topaz Photo AI
- Remove.bg

### Kontrowersje
- Gdzie kończy się „ulepszanie", a zaczyna „fałszowanie"?
- Etyka w fotoreportażu

## AI w designie graficznym

### Logo i branding
- Generowanie wariantów logo
- Palety kolorów
- Mockupy produktów

### Narzędzia
- Canva AI
- Adobe Firefly
- Figma AI
- Looka (logo)

### Social media
- Automatyczne dostosowanie formatów
- Generowanie wariantów postów
- A/B testing wizualizacji

## AI w UX/UI

- Generowanie wireframe'ów
- Konwersja szkicu na kod
- Personalizacja interfejsów
- Analiza heatmap

## Przyszłość zawodów kreatywnych

AI nie zastąpi kreatywności, ale:
- Przyspieszy workflow
- Obniży barierę wejścia
- Zmieni oczekiwania klientów
- Wymusi nowe umiejętności
        `,
        keyPoints: [
          "AI rewolucjonizuje edycję zdjęć i design",
          "Narzędzia jak Adobe Firefly czy Canva AI są coraz popularniejsze",
          "AI wspiera, ale nie zastępuje ludzkiej kreatywności"
        ],
        funFact: "Adobe Photoshop z funkcją Generative Fill pozwala rozszerzyć zdjęcie poza jego oryginalne granice – AI 'dogaduje' brakujące elementy!"
      },
      {
        id: "3-6",
        title: "Praktyczne ćwiczenie – stwórz swój obraz",
        duration: "8 min",
        content: `
# Czas na praktykę!

Teraz wykorzystasz zdobytą wiedzę do stworzenia własnych obrazów.

## Ćwiczenie 1: Podstawowy prompt

Stwórz obraz używając struktury:
\`\`\`
[Temat] w stylu [styl], [oświetlenie], [jakość]
\`\`\`

**Twój temat:** Wybierz coś, co lubisz (zwierzę, miejsce, przedmiot)

### Przykład ucznia:
„Stara biblioteka pełna magicznych ksiąg, w stylu fantasy concept art, ciepłe światło świec, ultra detailed, 8K"

## Ćwiczenie 2: Eksperymentuj ze stylami

Weź ten sam temat i stwórz 3 wersje:
1. Fotorealistyczna
2. W stylu anime
3. Jako obraz olejny

### Porównaj wyniki – który styl najbardziej ci odpowiada?

## Ćwiczenie 3: Negative prompts

Stwórz prompt dla portretu osoby i dodaj:
\`\`\`
Negative: deformed hands, extra fingers, blurry, low quality
\`\`\`

## Gdzie tworzyć (za darmo)?

1. **Bing Image Creator** – darmowy, używa DALL-E 3
2. **Leonardo.ai** – darmowe kredyty dziennie
3. **Playground AI** – 100 obrazów/dzień
4. **Stable Diffusion** – przez Google Colab

## Wyzwanie końcowe

Stwórz obraz na temat:
> „Przyszłość, w której AI i ludzie współpracują"

Użyj wszystkiego, czego się nauczyłeś:
- Szczegółowy opis sceny
- Styl artystyczny
- Oświetlenie i atmosfera
- Szczegóły techniczne

## Udostępnij!

Pochwal się swoimi dziełami w sekcji społeczności! 🎨
        `,
        keyPoints: [
          "Praktyka czyni mistrza – eksperymentuj z promptami",
          "Są darmowe narzędzia do generowania obrazów",
          "Porównuj style i ucz się z wyników"
        ],
        funFact: "Niektórzy artyści tworzą obrazy używając 50+ iteracji promptu, za każdym razem dopracowując szczegóły!"
      },
      {
        id: "3-7",
        title: "Nowe generatory 2024/2025: FLUX, Ideogram i Recraft",
        duration: "12 min",
        content: `
# Rewolucja w generowaniu obrazów 2024/2025

Rynek AI obrazów eksplodował nowymi narzędziami. Poznaj najważniejsze!

## FLUX (Black Forest Labs)

Najnowsza gwiazda open-source od twórców Stable Diffusion.

### Wersje FLUX
- **FLUX.1 Pro** – najwyższa jakość, API płatne
- **FLUX.1 Dev** – dla deweloperów, open source
- **FLUX.1 Schnell** – szybki, darmowy

### Mocne strony
- Niesamowita jakość tekstu w obrazach
- Fotorealistyczne detale
- Świetne zrozumienie promptów
- Open source (Schnell i Dev)

### Gdzie używać?
- ComfyUI, Automatic1111
- Replicate, fal.ai
- Poe, Perplexity

## Ideogram

Specjalizuje się w tekście i typografii w obrazach.

### Zastosowania
- Logo i branding
- Plakaty z tekstem
- Social media graphics
- Wizytówki

### Mocne strony
- Najlepszy tekst w AI obrazach
- Świetny styl plakatowy
- Łatwa obsługa webowa

## Recraft V3

Profesjonalne narzędzie dla designerów.

### Unikalne funkcje
- Kontrola kolorów i palet
- Wektorowe SVG
- Spójność stylu w seriach
- Mock-upy produktowe

## Adobe Firefly 3

### Nowości 2024
- Generative Fill w Photoshop
- Reference images
- Stylizacja na podstawie zdjęcia
- Bezpieczne prawnie treści

## Porównanie 2024/2025

| Generator | Tekst | Realizm | Cena | Szybkość |
|-----------|-------|---------|------|----------|
| FLUX Pro | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | $$$ | Średnia |
| FLUX Schnell | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | Darmowy | Szybka |
| Ideogram | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | $ | Szybka |
| Recraft | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | $$ | Średnia |
| Midjourney v6 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | $$$ | Wolna |
| DALL-E 3 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | $$ | Szybka |

## Ćwiczenie praktyczne

Stwórz ten sam obraz w 3 różnych generatorach:
> "Minimalistyczne logo kawiarni z filiżanką i tekstem 'Coffee Lab'"

Porównaj wyniki – który generator najlepiej obsłużył tekst?
        `,
        keyPoints: [
          "FLUX to nowa gwiazda open-source z rewelacyjną jakością",
          "Ideogram i Recraft specjalizują się w tekście i designie",
          "Każdy generator ma swoją niszę – wybieraj narzędzie do zadania"
        ],
        funFact: "FLUX.1 osiągnął pierwsze miejsce w rankingach jakości obrazów, pokonując nawet Midjourney v6!"
      }
    ],
    quiz: [
      {
        id: "q3-1",
        question: "Czym jest CNN w kontekście rozpoznawania obrazów?",
        options: ["Cable News Network", "Convolutional Neural Network", "Computer Number Notation", "Central Neuron Node"],
        correctIndex: 1,
        explanation: "CNN (Convolutional Neural Network) to sieć neuronowa specjalnie zaprojektowana do przetwarzania obrazów."
      },
      {
        id: "q3-2",
        question: "Który model AI do generowania obrazów jest open source?",
        options: ["DALL-E", "Midjourney", "Stable Diffusion", "Adobe Firefly"],
        correctIndex: 2,
        explanation: "Stable Diffusion jest open source i można go uruchomić lokalnie."
      },
      {
        id: "q3-3",
        question: "Co to jest 'model dyfuzyjny'?",
        options: ["Model rozpraszający światło", "AI tworzący obraz przez stopniowe usuwanie szumu", "Algorytm kompresji", "Typ filtru"],
        correctIndex: 1,
        explanation: "Modele dyfuzyjne zaczynają od szumu i stopniowo go usuwają, kierowane promptem."
      },
      {
        id: "q3-4",
        question: "Co to jest deepfake?",
        options: ["Głęboko ukryty plik", "Syntetyczne media z zamienioną twarzą/głosem", "Rodzaj wirusa", "Format obrazu"],
        correctIndex: 1,
        explanation: "Deepfake to syntetyczne media, gdzie AI zamienia lub generuje twarz/głos osoby."
      },
      {
        id: "q3-5",
        question: "Co powinien zawierać dobry prompt dla obrazu?",
        options: ["Tylko temat", "Temat, styl, oświetlenie, szczegóły", "Kod programu", "Link do przykładu"],
        correctIndex: 1,
        explanation: "Dobry prompt zawiera temat, styl artystyczny, oświetlenie, kompozycję i szczegóły techniczne."
      }
    ]
  },
  {
    id: 4,
    slug: "ai-w-praktyce",
    title: "AI w praktyce",
    description: "Naucz się wykorzystywać AI w codziennym życiu, pracy i nauce.",
    icon: "Zap",
    duration: "90 min",
    lessonsCount: 8,
    color: "accent",
    heroImage: {
      src: module4Hero,
      alt: "Nowoczesne biurko z narzędziami AI i automatyzacją workflow"
    },
    lessons: [
      {
        id: "4-1",
        title: "AI w pracy – automatyzacja i produktywność",
        duration: "12 min",
        content: `
# AI jako asystent w pracy

AI może dramatycznie zwiększyć twoją produktywność. Oto jak:

## Pisanie i komunikacja

### E-maile
- Generowanie odpowiedzi
- Poprawianie tonu
- Tłumaczenie

### Dokumenty
- Tworzenie szkiców
- Streszczenia długich tekstów
- Poprawianie gramatyki

### Prezentacje
- Generowanie slajdów
- Tworzenie bullet points
- Wizualizacje danych

## Analiza i research

- Podsumowywanie raportów
- Analiza danych
- Wyszukiwanie informacji
- Porównywanie opcji

## Automatyzacja zadań

### Narzędzia
- **Zapier + AI** – automatyzacja workflow
- **Microsoft Copilot** – w Office 365
- **Notion AI** – w zarządzaniu projektami

### Przykłady
- Automatyczne raporty
- Kategoryzacja e-maili
- Aktualizacja CRM

## Wskazówki praktyczne

1. **Zacznij od powtarzalnych zadań** – szukaj wzorców
2. **Nie zastępuj, wspomagaj** – AI to asystent
3. **Weryfikuj wyniki** – szczególnie dane i fakty
4. **Ucz się promptowania** – to klucz do efektywności

## ROI z AI

Badania pokazują:
- 30-50% oszczędności czasu na pisaniu
- 60% szybsze researche
- 40% wzrost produktywności w kodowaniu
        `,
        keyPoints: [
          "AI przyspiesza pisanie, analizę i automatyzację",
          "Microsoft Copilot i Notion AI to popularne narzędzia biurowe",
          "AI to asystent – zawsze weryfikuj wyniki"
        ],
        funFact: "Pracownicy używający AI do kodowania wykonują zadania średnio 56% szybciej!"
      },
      {
        id: "4-2",
        title: "AI w nauce i edukacji",
        duration: "10 min",
        content: `
# AI zmienia sposób nauki

AI rewolucjonizuje edukację na wszystkich poziomach.

## Dla uczniów i studentów

### Zrozumienie materiału
- Wyjaśnianie trudnych koncepcji „jak dla 5-latka"
- Alternatywne wyjaśnienia
- Przykłady z życia

### Pisanie prac
- Brainstorming tematów
- Tworzenie outline'ów
- Poprawianie gramatyki i stylu
- ⚠️ NIE kopiuj – używaj jako wsparcie!

### Nauka języków
- Rozmowy z AI
- Poprawianie błędów
- Tłumaczenia z kontekstem

### Przygotowanie do egzaminów
- Generowanie pytań testowych
- Powtarzanie materiału
- Flashcards

## Dla nauczycieli

- Tworzenie materiałów dydaktycznych
- Personalizacja nauki
- Automatyzacja oceniania
- Generowanie zadań

## Narzędzia edukacyjne z AI

- **Khan Academy + Khanmigo** – tutor AI
- **Duolingo** – nauka języków z AI
- **Photomath** – rozwiązywanie matematyki
- **Quizlet** – fiszki generowane przez AI

## Etyka AI w edukacji

- Kiedy używanie AI jest OK, a kiedy oszustwem?
- Jak cytować AI jako źródło?
- Rozwijanie własnych umiejętności

## Złota zasada

> AI powinno ci pomóc ZROZUMIEĆ, a nie ZASTĄPIĆ myślenie.
        `,
        keyPoints: [
          "AI pomaga zrozumieć trudne koncepcje",
          "Używaj AI jako wsparcie, nie zastępstwo",
          "Narzędzia jak Khan Academy wykorzystują AI do personalizacji nauki"
        ],
        funFact: "Uczniowie używający AI tutorów osiągają podobne wyniki jak ci z indywidualnym nauczycielem-człowiekiem!"
      },
      {
        id: "4-3",
        title: "AI w kreatywności – pisanie, muzyka, sztuka",
        duration: "12 min",
        content: `
# AI jako partner kreatywny

AI otwiera nowe możliwości dla twórców.

## Pisanie kreatywne

### Zastosowania
- Przełamywanie blokady twórczej
- Generowanie pomysłów na fabuły
- Tworzenie dialogów postaci
- Różne style narracji

### Narzędzia
- ChatGPT, Claude – ogólne
- Jasper, Copy.ai – marketing
- NovelAI – fikcja
- Sudowrite – dla pisarzy

### Wskazówka
Używaj AI jako „partnera do burzy mózgów", nie jako ghostwritera.

## Muzyka

### Możliwości
- Generowanie melodii
- Tworzenie akompaniamentu
- Mastering i miksowanie
- Remix i sampling

### Narzędzia
- Suno AI – generowanie piosenek
- AIVA – muzyka klasyczna
- Mubert – tła muzyczne
- Udio – piosenki z tekstem

## Sztuka wizualna

Już omówiliśmy (moduł 3), ale dodatkowo:
- AI jako asystent do konceptów
- Generowanie wariantów
- Rozszerzanie istniejących dzieł

## Wideo

- Runway – efekty specjalne AI
- Synthesia – awatary AI
- Pika Labs – generowanie wideo
- HeyGen – tłumaczenie z lip sync

## Debata: Czy to jeszcze twórczość?

Argumenty za:
- AI to narzędzie jak pędzel
- Ludzka wizja nadal jest kluczowa
- Otwiera drzwi dla nowych twórców

Argumenty przeciw:
- Brak „duszy" w dziele
- Problemy praw autorskich
- Dewaluacja rzemiosła

## Moja opinia

> AI rozszerza paletę twórczą, ale serce sztuki pozostaje ludzkie.
        `,
        keyPoints: [
          "AI wspiera pisanie, muzykę i sztukę wizualną",
          "Narzędzia jak Suno AI czy Runway rewolucjonizują tworzenie",
          "AI to narzędzie – wizja artystyczna pozostaje ludzka"
        ],
        funFact: "Piosenka stworzona przez AI (Heart on My Sleeve) naśladująca Drake'a i The Weeknd stała się viralem i wywołała dyskusję o prawach autorskich!"
      },
      {
        id: "4-4",
        title: "AI w zdrowiu i medycynie",
        duration: "12 min",
        content: `
# AI ratuje życie

Medycyna to jedna z dziedzin, gdzie AI ma największy potencjał.

## Diagnostyka

### Obrazowanie medyczne
- Wykrywanie nowotworów na RTG/MRI
- Analiza zdjęć dermatologicznych
- Badania okulistyczne
- Dokładność często lepsza niż lekarza!

### Przykłady
- Google DeepMind wykrywa ponad 50 chorób oczu
- AI wykrywa raka piersi 5 lat przed objawami

## Odkrywanie leków

- Symulacje molekularne
- Przewidywanie interakcji
- Przyspieszenie badań klinicznych
- AlphaFold – przewidywanie struktur białek

## Personalizowana medycyna

- Analiza genomu
- Dobór terapii do pacjenta
- Przewidywanie reakcji na leki
- Optymalizacja dawkowania

## Opieka i monitorowanie

- Smartwatche wykrywające arytmię
- Chatboty do triażu
- Przypomnienia o lekach
- Monitorowanie przewlekłych chorób

## Zdrowie psychiczne

- Chatboty terapeutyczne (Woebot)
- Analiza mowy pod kątem depresji
- Wsparcie między sesjami
- ⚠️ NIE zastępują terapeuty!

## Wyzwania

- Prywatność danych medycznych
- Odpowiedzialność za błędy
- Nierówny dostęp
- Zaufanie pacjentów

## Przyszłość

- Operacje z pomocą AI
- Wirtualni asystenci lekarzy
- Precyzyjna diagnostyka
- Wydłużenie życia?
        `,
        keyPoints: [
          "AI wykrywa choroby z dokładnością często lepszą niż człowiek",
          "AlphaFold rewolucjonizuje odkrywanie leków",
          "Smartwatche z AI mogą ratować życie"
        ],
        funFact: "AlphaFold w kilka miesięcy przewidział struktury niemal wszystkich znanych białek – zadanie, które zajęłoby naukowcom wieki!"
      },
      {
        id: "4-5",
        title: "AI w biznesie i marketingu",
        duration: "10 min",
        content: `
# AI napędza biznes

Firmy wykorzystują AI do zwiększania przychodów i optymalizacji operacji.

## Marketing

### Personalizacja
- Rekomendacje produktów
- Dynamiczne ceny
- Spersonalizowane e-maile
- Targetowanie reklam

### Content
- Generowanie tekstów reklamowych
- Tworzenie grafik
- A/B testing z AI
- Analiza sentymentu

### Narzędzia
- Jasper, Copy.ai – copywriting
- Canva AI – grafika
- HubSpot AI – automatyzacja

## Obsługa klienta

- Chatboty 24/7
- Analiza ticketów
- Przewidywanie problemów
- Personalizowane odpowiedzi

## Sprzedaż

- Lead scoring
- Przewidywanie churnu
- Optymalizacja cen
- Analiza konkurencji

## Operacje

### Łańcuch dostaw
- Prognozowanie popytu
- Optymalizacja zapasów
- Planowanie logistyki

### Finanse
- Wykrywanie fraudów
- Analiza ryzyka
- Automatyzacja księgowości

## HR

- Screening CV
- Matching kandydatów
- Analiza retencji
- Chatboty rekrutacyjne

## Strategie AI dla firm

1. Zacznij od konkretnego problemu
2. Pilotaż przed skalowaniem
3. Mierz ROI
4. Buduj kompetencje zespołu
        `,
        keyPoints: [
          "AI personalizuje marketing i obsługę klienta",
          "Chatboty działają 24/7 i oszczędzają koszty",
          "AI optymalizuje łańcuchy dostaw i wykrywa oszustwa"
        ],
        funFact: "Netflix oszczędza 1 miliard dolarów rocznie dzięki AI rekomendującemu filmy i zmniejszającemu rezygnacje z subskrypcji!"
      },
      {
        id: "4-6",
        title: "Bezpieczeństwo i prywatność z AI",
        duration: "10 min",
        content: `
# Ochrona w erze AI

AI niesie nowe zagrożenia, ale też narzędzia obrony.

## Zagrożenia związane z AI

### Dla prywatności
- Rozpoznawanie twarzy bez zgody
- Analiza zachowań online
- Profilowanie konsumentów
- Deepfakes

### Dla bezpieczeństwa
- Phishing generowany przez AI
- Automatyczne exploity
- Fałszywe głosy i wideo
- Social engineering z AI

## AI w cyberbezpieczeństwie

### Obrona
- Wykrywanie anomalii
- Analiza malware
- Automatyczna reakcja na ataki
- Weryfikacja tożsamości

### Przykłady
- Google używa AI do blokowania 99.9% spamu
- Banki wykrywają fraudy w czasie rzeczywistym

## Ochrona prywatności

### Co robić?
1. Sprawdzaj ustawienia prywatności
2. Używaj VPN
3. Minimalizuj udostępnianie danych
4. Czytaj polityki prywatności AI

### Prawa
- RODO w Europie
- EU AI Act
- Prawo do wyjaśnienia decyzji AI

## Rozpoznawanie fałszywek

### Jak wykryć deepfake?
- Niespójności w oczach
- Dziwne ruchy twarzy
- Artefakty wokół włosów
- Narzędzia do weryfikacji

### Jak nie dać się oszukać?
- Weryfikuj źródła
- Bądź sceptyczny
- Używaj oficjalnych kanałów
- Nie działaj pod presją

## Zasada ostrożności

> Nie ufaj ślepo temu, co widzisz i słyszysz online – technologia umożliwia tworzenie przekonujących fałszywek.
        `,
        keyPoints: [
          "AI tworzy nowe zagrożenia: deepfakes, phishing, profilowanie",
          "AI też pomaga w obronie: wykrywanie anomalii, weryfikacja",
          "Bądź sceptyczny i weryfikuj źródła"
        ],
        funFact: "FBI odnotowało wzrost oszustw z użyciem syntetycznych głosów o 500% między 2021 a 2023!"
      },
      {
        id: "4-7",
        title: "Przyszłość AI – co nas czeka?",
        duration: "12 min",
        content: `
# Horyzont AI

Co przyniosą kolejne lata rozwoju sztucznej inteligencji?

## Krótkoterminowo (1-3 lata)

### Więcej multimodalności
- Modele łączące tekst, obraz, dźwięk, wideo
- Bardziej naturalne interfejsy
- Real-time tłumaczenie z lip sync

### AI agenci
- Autonomiczne wykonywanie zadań
- Planowanie i rezerwacje
- Automatyzacja workflow

### Personalizacja
- Osobiste AI dostosowane do ciebie
- Pamięć długoterminowa
- Kontekst twojego życia

## Średnioterminowo (3-10 lat)

### Robotyka
- Roboty domowe
- Humanoidy w pracy
- Autonomiczne pojazdy wszędzie

### Nauka
- Przełomy w medycynie
- Nowe materiały
- Rozwiązania klimatyczne

### Interfejsy
- Naturalna rozmowa z AI
- AR/VR z AI
- Brain-computer interfaces

## Długoterminowo (10+ lat)

### AGI?
- Artificial General Intelligence
- AI dorównujące człowiekowi we wszystkim
- Ogromne niepewności

### Pytania egzystencjalne
- Co to znaczy być człowiekiem?
- Jaka jest nasza rola?
- Jak zachować kontrolę?

## Scenariusze

### Optymistyczny
AI rozwiązuje choroby, ubóstwo, zmianę klimatu. Ludzie żyją dłużej i szczęśliwiej, zajmując się kreatywnością i relacjami.

### Pesymistyczny
AI pogłębia nierówności, eliminuje miejsca pracy, jest używane do kontroli. Dezinformacja triumfuje.

### Realistyczny
Mix – ogromne korzyści, ale też wyzwania. Kluczowe będzie zarządzanie transformacją.

## Twoja rola

> Przyszłość AI zależy też od ciebie – od tego, jak ją wykorzystasz i jakie wartości wniesiesz.
        `,
        keyPoints: [
          "Najbliższe lata: multimodalność, AI agenci, personalizacja",
          "Średni termin: robotyka, przełomy naukowe, nowe interfejsy",
          "Długi termin: AGI i fundamentalne pytania o ludzkość"
        ],
        funFact: "Eksperci szacują, że AGI może powstać między 2030 a 2060 – ale nikt nie wie na pewno!"
      },
      {
        id: "4-8",
        title: "Twój plan działania z AI",
        duration: "12 min",
        content: `
# Twój osobisty roadmap AI

Ukończyłeś kurs! Teraz czas na działanie.

## Krok 1: Wybierz jeden obszar

Gdzie AI może ci pomóc TERAZ?
- [ ] Praca i produktywność
- [ ] Nauka i rozwój
- [ ] Twórczość
- [ ] Codzienne życie

## Krok 2: Zacznij od jednego narzędzia

Nie próbuj wszystkiego naraz. Wybierz:

### Dla początkujących
- **ChatGPT** – uniwersalny asystent
- **Google Bard** – zintegrowany z Google
- **Bing Chat** – wyszukiwanie z AI

### Dla pracy
- **Microsoft Copilot** (jeśli masz Office)
- **Notion AI** (zarządzanie)
- **Grammarly** (pisanie)

### Dla twórczości
- **Canva AI** (grafika)
- **Bing Image Creator** (obrazy za darmo)
- **Descript** (audio/wideo)

## Krok 3: Eksperymentuj codziennie

**Wyzwanie 7 dni:**
1. Dzień 1: Napisz e-mail z pomocą AI
2. Dzień 2: Poproś o wyjaśnienie czegoś
3. Dzień 3: Stwórz listę pomysłów
4. Dzień 4: Podsumuj artykuł
5. Dzień 5: Wygeneruj obraz
6. Dzień 6: Naucz się czegoś nowego
7. Dzień 7: Zautomatyzuj rutynowe zadanie

## Krok 4: Śledź rozwój

### Źródła wiedzy
- Twitter/X: @OpenAI, @AnthropicAI
- Newslettery: The Rundown AI, Ben's Bites
- YouTube: Two Minute Papers, AI Explained
- Subreddity: r/artificial, r/ChatGPT

## Krok 5: Buduj nawyki

- Pytaj AI przed Google
- Używaj AI do pierwszych szkiców
- Automatyzuj powtarzalne zadania
- Dziel się wiedzą z innymi

## Pamiętaj

- AI to narzędzie, nie magia
- Twoja wiedza i kreatywność są bezcenne
- Ciągła nauka jest kluczowa
- Baw się i eksperymentuj!

## Gratulacje! 🎉

Ukończyłeś kurs **AIStart**. Teraz wiesz więcej o AI niż większość ludzi. Wykorzystaj tę wiedzę mądrze!
        `,
        keyPoints: [
          "Wybierz jeden obszar i jedno narzędzie na start",
          "Eksperymentuj codziennie przez tydzień",
          "Śledź rozwój AI i buduj nawyki"
        ],
        funFact: "Osoby, które regularnie używają AI w pracy, mają o 35% wyższe szanse na awans – bo są bardziej produktywne!"
      }
    ],
    quiz: [
      {
        id: "q4-1",
        question: "Jakie narzędzie AI jest zintegrowane z Microsoft Office?",
        options: ["ChatGPT", "Copilot", "Bard", "Claude"],
        correctIndex: 1,
        explanation: "Microsoft Copilot jest zintegrowany z pakietem Office 365."
      },
      {
        id: "q4-2",
        question: "Co to jest AlphaFold?",
        options: ["Gra planszowa AI", "AI przewidujący struktury białek", "Chatbot medyczny", "Program do origami"],
        correctIndex: 1,
        explanation: "AlphaFold od DeepMind rewolucjonizuje biologię, przewidując struktury białek."
      },
      {
        id: "q4-3",
        question: "Jaki % spamu blokuje Gmail dzięki AI?",
        options: ["50%", "75%", "99.9%", "100%"],
        correctIndex: 2,
        explanation: "Google używa AI do blokowania 99.9% spamu w Gmail."
      },
      {
        id: "q4-4",
        question: "Co oznacza skrót AGI?",
        options: ["Advanced Graphics Interface", "Artificial General Intelligence", "Automated Goal Implementation", "AI Governance Initiative"],
        correctIndex: 1,
        explanation: "AGI (Artificial General Intelligence) to AI dorównujące człowiekowi w każdym zadaniu intelektualnym."
      },
      {
        id: "q4-5",
        question: "Jaka jest najlepsza strategia na rozpoczęcie przygody z AI?",
        options: ["Nauczyć się wszystkich narzędzi naraz", "Wybrać jeden obszar i jedno narzędzie", "Czekać aż AI się rozwinie", "Unikać AI"],
        correctIndex: 1,
        explanation: "Najlepiej zacząć od jednego obszaru i jednego narzędzia, stopniowo rozszerzając umiejętności."
      }
    ]
  },
  {
    id: 5,
    slug: "etyka-ai",
    title: "Etyka i odpowiedzialność AI",
    description: "Poznaj etyczne aspekty AI, bias, EU AI Act, RODO i odpowiedzialny rozwój technologii.",
    icon: "Scale",
    duration: "70 min",
    lessonsCount: 7,
    color: "primary",
    heroImage: {
      src: module5Hero,
      alt: "Waga sprawiedliwości z elementami AI symbolizująca etykę"
    },
    lessons: [
      {
        id: "5-1",
        title: "Bias i dyskryminacja w AI",
        duration: "10 min",
        content: `
# Bias w sztucznej inteligencji

Systemy AI uczą się na danych stworzonych przez ludzi – a ludzie mają uprzedzenia. To prowadzi do poważnych problemów.

## Co to jest bias w AI?

**Bias** (uprzedzenie) w AI to systematyczne błędy, które faworyzują lub dyskryminują określone grupy ludzi.

## Przykłady z życia

### Rekrutacja
Amazon stworzył AI do rekrutacji, które dyskryminowało kobiety – bo uczyło się na historycznych CV, głównie od mężczyzn.

### Rozpoznawanie twarzy
Systemy rozpoznawania twarzy mają znacznie wyższą dokładność dla białych mężczyzn niż dla osób o ciemnej karnacji.

### Kredyty
Algorytmy kredytowe mogą nieświadomie dyskryminować na podstawie kodu pocztowego, co koreluje z rasą.

## Skąd się bierze bias?

1. **Dane treningowe** – jeśli dane są niereprezentatywne
2. **Historyczne nierówności** – AI uczy się z przeszłości
3. **Wybory projektantów** – nieświadome decyzje zespołu
4. **Brak różnorodności** – homogeniczne zespoły tworzące AI

## Jak temu przeciwdziałać?

- Różnorodne zespoły projektowe
- Audyty algorytmów
- Reprezentatywne dane treningowe
- Transparentność w procesie tworzenia AI
        `,
        keyPoints: [
          "Bias w AI to systematyczne uprzedzenia faworyzujące lub dyskryminujące grupy",
          "AI uczy się biasu z danych i historycznych nierówności",
          "Przeciwdziałanie wymaga różnorodności, audytów i transparentności"
        ],
        funFact: "W 2018 roku Amazon porzucił swój system rekrutacyjny AI po odkryciu, że dyskryminował kobiety!"
      },
      {
        id: "5-2",
        title: "Transparentność algorytmów",
        duration: "9 min",
        content: `
# Problem czarnej skrzynki

Wiele zaawansowanych systemów AI to "czarne skrzynki" – nie wiemy, jak podejmują decyzje.

## Explainable AI (XAI)

**XAI** to dziedzina zajmująca się tworzeniem AI, którego decyzje można zrozumieć i wyjaśnić.

## Dlaczego to ważne?

### W medycynie
Lekarz musi wiedzieć, DLACZEGO AI sugeruje daną diagnozę.

### W finansach
Bank musi wyjaśnić, dlaczego odmówił kredytu.

### W prawie
Sądy wymagają uzasadnienia decyzji.

## Prawo do wyjaśnienia

RODO (GDPR) w Europie daje obywatelom prawo do wyjaśnienia decyzji automatycznych, które ich dotyczą.

## Metody XAI

- **LIME** – wyjaśnia pojedyncze predykcje
- **SHAP** – pokazuje wpływ każdej cechy
- **Attention maps** – wizualizuje, na co "patrzy" AI

## Kompromis

Często istnieje trade-off między dokładnością a interpretowalnością. Prostsze modele są łatwiejsze do zrozumienia, ale mniej precyzyjne.
        `,
        keyPoints: [
          "Wiele systemów AI to 'czarne skrzynki' bez wyjaśnień",
          "XAI pomaga zrozumieć decyzje AI",
          "RODO daje prawo do wyjaśnienia decyzji automatycznych"
        ],
        funFact: "Google DeepMind stworzył AlphaFold, który przewiduje struktury białek – ale nawet naukowcy nie do końca rozumieją, jak to robi!"
      },
      {
        id: "5-3",
        title: "Prawa autorskie i AI",
        duration: "10 min",
        content: `
# AI a własność intelektualna

Generatywne AI rodzi fundamentalne pytania o prawa autorskie.

## Kluczowe pytania

1. Czy AI może być autorem?
2. Kto jest właścicielem wygenerowanych treści?
3. Czy trening na cudzych dziełach narusza prawa?

## Aktualne stanowisko prawne

### USA
US Copyright Office: AI nie może być autorem. Tylko ludzie mogą posiadać prawa autorskie.

### UE
Podobne stanowisko – wymagany jest "ludzki wkład twórczy".

## Spory sądowe

### Getty Images vs Stability AI
Getty Images pozywa za trening na ich zdjęciach bez zgody.

### Artyści vs Midjourney
Artyści twierdzą, że AI "kradnie" ich styl.

## Praktyczne wskazówki

- Sprawdzaj licencje narzędzi AI
- Dokumentuj swój wkład twórczy
- Unikaj generowania treści "w stylu" konkretnych artystów
- Bądź transparentny o użyciu AI

## Przyszłość

Prawo musi nadążyć za technologią. Spodziewaj się nowych regulacji w najbliższych latach.
        `,
        keyPoints: [
          "AI nie może być autorem według obecnego prawa",
          "Trening na cudzych dziełach budzi kontrowersje prawne",
          "Dokumentuj swój wkład twórczy przy użyciu AI"
        ],
        funFact: "W 2023 roku komiks stworzony z użyciem Midjourney stracił ochronę prawnoautorską w USA!"
      },
      {
        id: "5-4",
        title: "AI a rynek pracy",
        duration: "9 min",
        content: `
# Czy AI zabierze nam pracę?

To jedno z najczęściej zadawanych pytań o AI. Odpowiedź jest złożona.

## Historyczne lekcje

Każda rewolucja technologiczna:
- Eliminowała pewne zawody
- Tworzyła nowe profesje
- Ostatecznie zwiększała produktywność

## Co mówią eksperci?

### Optymistyczny scenariusz
AI jako "copilot" – wspomaga ludzi, nie zastępuje.

### Pesymistyczny scenariusz
Masowa automatyzacja w ciągu dekady.

### Realistyczny scenariusz
Transformacja – większość zawodów się zmieni, niektóre znikną, powstaną nowe.

## Zawody najbardziej zagrożone

- Wprowadzanie danych
- Podstawowe tłumaczenia
- Proste analizy i raporty
- Rutynowa obsługa klienta

## Zawody względnie bezpieczne

- Wymagające kreatywności i empatii
- Prace fizyczne w nieprzewidywalnych środowiskach
- Role wymagające głębokiej ekspertyzy
- Zawody oparte na relacjach międzyludzkich

## Jak się przygotować?

1. Rozwijaj umiejętności pracy z AI
2. Buduj kompetencje, które AI nie ma
3. Bądź elastyczny i gotowy na zmiany
4. Uczenie się przez całe życie
        `,
        keyPoints: [
          "AI transformuje zawody, nie tylko je eliminuje",
          "Umiejętności pracy z AI stają się kluczowe",
          "Kreatywność i empatia są trudne do automatyzacji"
        ],
        funFact: "McKinsey szacuje, że do 2030 roku nawet 30% godzin pracy może być zautomatyzowanych przez AI!"
      },
      {
        id: "5-5",
        title: "Regulacje i prawo (EU AI Act)",
        duration: "9 min",
        content: `
# EU AI Act – pierwsza kompleksowa regulacja AI

Unia Europejska stworzyła przełomowe prawo regulujące sztuczną inteligencję.

## Klasyfikacja ryzyka

AI Act dzieli systemy AI na kategorie:

### Niedopuszczalne ryzyko (zakazane)
- Social scoring jak w Chinach
- Manipulacja podprogowa
- Biometryczna identyfikacja w czasie rzeczywistym (z wyjątkami)

### Wysokie ryzyko
- Rekrutacja i HR
- Ocena kredytowa
- Systemy medyczne
- Infrastruktura krytyczna

### Ograniczone ryzyko
- Chatboty (muszą informować, że są AI)
- Deepfakes (muszą być oznaczone)

### Minimalne ryzyko
- Filtry spamu
- Gry z AI

## Obowiązki dla firm

- Dokumentacja i transparentność
- Nadzór ludzki
- Testowanie i certyfikacja
- Zgłaszanie incydentów

## Kary

Do 35 milionów euro lub 7% globalnego obrotu!

## Harmonogram

Pełne wejście w życie: 2025-2027
        `,
        keyPoints: [
          "EU AI Act to pierwsza kompleksowa regulacja AI na świecie",
          "Systemy są klasyfikowane według poziomu ryzyka",
          "Kary sięgają 35 mln euro lub 7% obrotu"
        ],
        funFact: "Chiny i USA intensywnie obserwują EU AI Act – może stać się globalnym standardem!"
      },
      {
        id: "5-6",
        title: "Odpowiedzialny rozwój AI",
        duration: "8 min",
        content: `
# Jak tworzyć AI odpowiedzialnie?

Odpowiedzialny rozwój AI to nie tylko etyka – to także lepszy biznes.

## Zasady odpowiedzialnego AI

### 1. Sprawiedliwość (Fairness)
AI nie powinno dyskryminować.

### 2. Transparentność
Użytkownicy powinni wiedzieć, gdy mają do czynienia z AI.

### 3. Prywatność
Ochrona danych osobowych.

### 4. Bezpieczeństwo
AI nie powinno powodować szkód.

### 5. Odpowiedzialność
Musi być jasne, kto odpowiada za działania AI.

## Praktyczne kroki

1. **Audyty** – regularne sprawdzanie systemów
2. **Różnorodność** – diverse teams = lepsze AI
3. **Red teaming** – szukanie słabości
4. **Feedback loops** – uczenie się z błędów

## Rola jednostki

Każdy z nas może:
- Zgłaszać problematyczne zachowania AI
- Wymagać transparentności
- Edukować innych
- Wspierać odpowiedzialne firmy

## Przyszłość

Odpowiedzialne AI to nie wybór – to konieczność dla zrównoważonego rozwoju technologii.
        `,
        keyPoints: [
          "Odpowiedzialne AI opiera się na sprawiedliwości, transparentności i bezpieczeństwie",
          "Audyty i różnorodność zespołów są kluczowe",
          "Każdy może przyczynić się do odpowiedzialnego rozwoju AI"
        ],
        funFact: "Microsoft, Google i OpenAI mają zespoły odpowiedzialne za etykę AI liczące setki osób!"
      },
      {
        id: "5-7",
        title: "RODO i ochrona danych w erze AI",
        duration: "10 min",
        content: `
# RODO a sztuczna inteligencja

RODO (GDPR) to europejskie prawo, które zyskuje nowe znaczenie w erze AI.

## Czym jest RODO?

**Rozporządzenie o Ochronie Danych Osobowych** – europejskie prawo chroniące prywatność obywateli UE.

### Kluczowe zasady
- Zgoda na przetwarzanie danych
- Prawo do bycia zapomnianym
- Prawo do przenoszenia danych
- Prawo do wyjaśnienia decyzji automatycznych

## AI a RODO – kluczowe pytania

### Trening modeli
Czy można trenować AI na danych osobowych bez zgody?

### Odpowiedź: To zależy
- Potrzebna podstawa prawna
- Często wymaga zgody lub uzasadnionego interesu
- Anonimizacja może pomóc

### Decyzje automatyczne (Art. 22)

RODO daje prawo do:
- Niepodlegania decyzjom wyłącznie automatycznym
- Uzyskania wyjaśnienia decyzji
- Zakwestionowania i ludzkiej interwencji

### Dotyczy to:
- Automatycznej oceny kredytowej
- Rekrutacji AI
- Personalizacji cenowej

## Praktyczne implikacje

### Dla firm używających AI
1. Dokumentuj, jak AI podejmuje decyzje
2. Zapewnij możliwość wyjaśnienia
3. Umożliw odwołanie do człowieka
4. Wykonuj ocenę wpływu na prywatność (DPIA)

### Dla użytkowników
- Pytaj, czy decyzje podejmuje AI
- Żądaj wyjaśnień
- Wnoś sprzeciw wobec profilowania

## Case study: ChatGPT a RODO

### Włochy (2023)
- Czasowy zakaz ChatGPT
- Obawy o dane treningowe i wiek użytkowników
- OpenAI musiało wprowadzić zmiany

### Co zmieniło OpenAI?
- Weryfikacja wieku
- Łatwiejszy opt-out z treningu
- Informacja o przetwarzaniu danych

## Przyszłość

AI Act + RODO = kompleksowa ochrona w UE
        `,
        keyPoints: [
          "RODO daje prawo do wyjaśnienia decyzji automatycznych",
          "Firmy muszą dokumentować, jak AI podejmuje decyzje",
          "Użytkownicy mogą wnosić sprzeciw wobec profilowania"
        ],
        funFact: "Włochy jako pierwszy kraj czasowo zablokowały ChatGPT z powodu obaw o RODO – co wymusiło globalne zmiany w OpenAI!"
      }
    ],
    quiz: [
      {
        id: "q5-1",
        question: "Co to jest bias w AI?",
        options: ["Typ algorytmu", "Systematyczne uprzedzenia faworyzujące grupy", "Błąd techniczny", "Forma uczenia maszynowego"],
        correctIndex: 1,
        explanation: "Bias to systematyczne błędy, które faworyzują lub dyskryminują określone grupy ludzi."
      },
      {
        id: "q5-2",
        question: "Co oznacza skrót XAI?",
        options: ["eXtreme AI", "eXplainable AI", "eXtended AI", "eXperimental AI"],
        correctIndex: 1,
        explanation: "XAI (Explainable AI) to dziedzina zajmująca się tworzeniem zrozumiałych systemów AI."
      },
      {
        id: "q5-3",
        question: "Czy AI może być autorem według obecnego prawa?",
        options: ["Tak, zawsze", "Nie, tylko ludzie mogą mieć prawa autorskie", "Tylko w USA", "Tylko w Chinach"],
        correctIndex: 1,
        explanation: "Według obecnego prawa w USA i UE, tylko ludzie mogą posiadać prawa autorskie."
      },
      {
        id: "q5-4",
        question: "Które systemy AI są zakazane przez EU AI Act?",
        options: ["Wszystkie chatboty", "Social scoring i manipulacja podprogowa", "Filtry spamu", "Gry wideo"],
        correctIndex: 1,
        explanation: "EU AI Act zakazuje m.in. social scoringu i manipulacji podprogowej."
      },
      {
        id: "q5-5",
        question: "Co NIE jest zasadą odpowiedzialnego AI?",
        options: ["Sprawiedliwość", "Transparentność", "Maksymalizacja zysków", "Bezpieczeństwo"],
        correctIndex: 2,
        explanation: "Odpowiedzialne AI opiera się na sprawiedliwości, transparentności, prywatności i bezpieczeństwie – nie na maksymalizacji zysków."
      },
      {
        id: "q5-6",
        question: "Jaki artykuł RODO dotyczy decyzji automatycznych?",
        options: ["Art. 5", "Art. 12", "Art. 22", "Art. 50"],
        correctIndex: 2,
        explanation: "Art. 22 RODO daje prawo do niepodlegania decyzjom wyłącznie automatycznym."
      },
      {
        id: "q5-7",
        question: "Który kraj pierwszy zablokował ChatGPT?",
        options: ["Niemcy", "Francja", "Włochy", "Hiszpania"],
        correctIndex: 2,
        explanation: "Włochy jako pierwszy kraj czasowo zablokowały ChatGPT z powodu obaw o RODO."
      }
    ]
  },
  {
    id: 6,
    slug: "ai-dla-tworcow",
    title: "AI dla twórców",
    description: "Odkryj, jak AI rewolucjonizuje tworzenie treści, social media, marketingu i kreatywności.",
    icon: "Palette",
    duration: "70 min",
    lessonsCount: 7,
    color: "accent",
    heroImage: {
      src: module6Hero,
      alt: "Studio kreatywne z narzędziami AI do tworzenia contentu"
    },
    lessons: [
      {
        id: "6-1",
        title: "AI w copywritingu i content marketingu",
        duration: "10 min",
        content: `
# AI jako partner copywritera

AI nie zastępuje copywriterów – daje im supermoc.

## Zastosowania AI w pisaniu

### Generowanie pomysłów
- Tematy na blogi
- Nagłówki i hooks
- Outline'y artykułów

### Tworzenie draftu
- Pierwszy szkic tekstu
- Rozwinięcie punktów
- Warianty tekstów

### Optymalizacja
- SEO suggestions
- Poprawa czytelności
- A/B testing wariantów

## Popularne narzędzia

- **ChatGPT** – uniwersalne
- **Jasper** – marketing-focused
- **Copy.ai** – krótkie formy
- **Writesonic** – blogi i SEO

## Workflow z AI

1. Brief i context
2. AI generuje draft
3. Człowiek edytuje i dopracowuje
4. AI pomaga optymalizować
5. Finalna ludzka kontrola

## Czego AI nie zrobi?

- Nie zna twojego brand voice
- Nie ma aktualnych danych o firmie
- Może halucynować fakty
- Nie zastąpi kreatywności i strategii
        `,
        keyPoints: [
          "AI wspomaga, nie zastępuje copywriterów",
          "Najlepsze rezultaty daje współpraca AI + człowiek",
          "Zawsze weryfikuj fakty i dodawaj ludzki touch"
        ],
        funFact: "Według badań, marketerzy używający AI są 50% bardziej produktywni!"
      },
      {
        id: "6-2",
        title: "AI w tworzeniu wideo",
        duration: "10 min",
        content: `
# Rewolucja wideo z AI

Tworzenie wideo nigdy nie było tak dostępne.

## Narzędzia AI do wideo

### Generowanie wideo z tekstu
- **Runway** – profesjonalne efekty
- **Pika** – krótkie klipy
- **Sora** (OpenAI) – przełomowa jakość

### Edycja wideo
- **Descript** – edycja przez tekst
- **CapCut** – auto-captions
- **Topaz** – upscaling i poprawa jakości

### Avatary AI
- **Synthesia** – wirtualni prezenterzy
- **HeyGen** – klonowanie głosu i wizerunku
- **D-ID** – animowane zdjęcia

## Praktyczne zastosowania

- Szkolenia i kursy online
- Materiały marketingowe
- Social media content
- Prototypowanie przed produkcją

## Etyczne dylematy

- Deepfakes i dezinformacja
- Zgoda na użycie wizerunku
- Transparentność wobec widzów

## Przyszłość

Wkrótce każdy będzie mógł tworzyć filmy na poziomie Hollywood ze swojego laptopa.
        `,
        keyPoints: [
          "AI demokratyzuje tworzenie wideo",
          "Syntetyczne avatary rewolucjonizują produkcję",
          "Etyka i transparentność są kluczowe"
        ],
        funFact: "Pierwszy pełnometrażowy film stworzony całkowicie przez AI może pojawić się już w 2025 roku!"
      },
      {
        id: "6-3",
        title: "AI w projektowaniu graficznym",
        duration: "10 min",
        content: `
# Design z AI

AI zmienia sposób, w jaki projektujemy.

## Generowanie grafik

### Midjourney
- Artystyczne, kreatywne obrazy
- Świetne do konceptów i inspiracji

### DALL-E 3
- Zintegrowane z ChatGPT
- Dobre zrozumienie promptów

### Stable Diffusion
- Open source
- Można trenować własne modele

### Adobe Firefly
- Zintegrowane z Creative Cloud
- Bezpieczne prawnie

## AI w UX/UI

- **Figma AI** – auto-layout, suggestions
- **Uizard** – sketch to design
- **Galileo** – text to UI

## Workflow projektanta z AI

1. Mood board z AI-generated inspiracji
2. Koncepty z Midjourney/DALL-E
3. Dopracowanie w tradycyjnych narzędziach
4. AI do wariantów i iteracji

## Wskazówki

- AI to narzędzie, nie zastępstwo dla designera
- Łącz AI z tradycyjnymi umiejętnościami
- Zawsze dopracowuj i personalizuj wyniki
- Pamiętaj o spójności marki
        `,
        keyPoints: [
          "Każdy generator ma swoje mocne strony",
          "AI świetnie nadaje się do konceptów i inspiracji",
          "Finalne dopracowanie zawsze wymaga ludzkiego designera"
        ],
        funFact: "Midjourney ma ponad 16 milionów użytkowników – to więcej niż populacja wielu krajów!"
      },
      {
        id: "6-4",
        title: "AI w produkcji muzycznej",
        duration: "10 min",
        content: `
# Muzyka tworzona przez AI

AI wkracza do świata muzyki – od kompozycji po mastering.

## Narzędzia do tworzenia muzyki

### Generatory muzyki
- **Suno** – pełne utwory z tekstu
- **Udio** – wysokiej jakości produkcje
- **AIVA** – muzyka klasyczna i filmowa

### Produkcja i mixing
- **Landr** – automatyczny mastering
- **iZotope** – AI-assisted mixing
- **Splice** – AI sample suggestions

### Klonowanie głosu
- **Eleven Labs** – realistyczne głosy
- **Kits.ai** – voice conversion

## Zastosowania

- Muzyka do filmów i gier
- Podkłady do podcastów
- Prototypowanie przed sesją nagraniową
- Personalizowane jingle

## Kontrowersje

### Prawa artystów
Czy trenowanie na ich muzyce jest legalne?

### Autentyczność
Czy AI-generated muzyka to "prawdziwa" sztuka?

### Ekonomia
Jak wpłynie na muzyków i producentów?

## Przyszłość

AI jako instrument i współtwórca, nie zamiennik artysty.
        `,
        keyPoints: [
          "AI może tworzyć kompletne utwory muzyczne",
          "Automatyczny mastering demokratyzuje produkcję",
          "Pytania o prawa autorskie pozostają otwarte"
        ],
        funFact: `W 2023 roku piosenka "wygenerowana przez AI" w stylu Drake'a i The Weeknd stała się viralem, zanim została usunięta!`,
      },
      {
        id: "6-5",
        title: "Portfolio i kariera z AI",
        duration: "10 min",
        content: `
# Budowanie kariery z umiejętnościami AI

Umiejętności AI to obecnie jeden z najbardziej pożądanych skillów.

## Nowe role zawodowe

- **Prompt Engineer** – tworzenie skutecznych promptów
- **AI Trainer** – uczenie i dostrajanie modeli
- **AI Artist** – tworzenie sztuki z AI
- **AI Curator** – selekcja i edycja wyników AI

## Budowanie portfolio

### Co pokazać?
- Before/after z AI-assisted projektami
- Dokumentacja procesu twórczego
- Różnorodność narzędzi i stylów
- Jasne oznaczenie roli AI

### Platformy
- Behance, Dribbble (design)
- GitHub (projekty techniczne)
- Własna strona portfolio
- LinkedIn

## Jak się wyróżnić?

1. **Specjalizacja** – znajdź niszę
2. **Proces** – pokazuj JAK tworzysz
3. **Transparentność** – bądź uczciwy o użyciu AI
4. **Ciągłe uczenie** – branża zmienia się co miesiąc

## Monetyzacja umiejętności

- Freelancing (Fiverr, Upwork)
- Konsulting dla firm
- Kursy i edukacja
- Produkty cyfrowe (prompty, modele)

## Wskazówka

Najcenniejsi są ci, którzy łączą umiejętności AI z domenową ekspertyzą.
        `,
        keyPoints: [
          "Umiejętności AI są bardzo pożądane na rynku pracy",
          "Portfolio powinno pokazywać proces, nie tylko efekty",
          "Transparentność o użyciu AI buduje zaufanie"
        ],
        funFact: "Średnia pensja Prompt Engineera w USA to ponad 100 000$ rocznie!"
      },
      {
        id: "6-6",
        title: "AI w social media i marketingu cyfrowym",
        duration: "10 min",
        content: `
# AI rewolucjonizuje social media

Od tworzenia treści po analizę wyników – AI zmienia grę w marketingu społecznościowym.

## Tworzenie treści

### Teksty i posty
- **ChatGPT/Claude** – generowanie postów
- **Copy.ai** – warianty copy
- **Buffer AI** – optymalizacja postów

### Grafika
- **Canva AI** – szybkie projekty
- **Adobe Express** – szablony z AI
- **Leonardo.ai** – unikalne obrazy

### Wideo
- **CapCut** – auto-edycja i napisy
- **InVideo** – wideo z tekstu
- **Opus Clip** – wycinki z długich filmów

## Planowanie i strategia

### Analiza konkurencji
- Monitorowanie trendów
- Analiza sentymentu
- Identyfikacja okazji

### Optymalizacja postów
- Najlepsze godziny publikacji
- Testowanie wariantów
- Predykcja wirusowości

## Automatyzacja

### Chatboty
- Obsługa DM 24/7
- FAQ i odpowiedzi
- Kwalifikacja leadów

### Scheduling
- Automatyczne planowanie
- Cross-posting
- Recykling treści

## Platformy 2024/2025

### TikTok
- AI do montażu
- Trendy audio
- Filtry generatywne

### Instagram/Meta
- Advantage+ campaigns
- Auto A/B testing
- Predictive targeting

### LinkedIn
- AI writing assistant
- Collaborative articles
- Smart suggestions

## Etyka w social media AI

- Oznaczaj treści AI
- Nie manipuluj algorytmami
- Zachowaj autentyczność
- Weryfikuj fakty

## Wskazówka

> AI tworzy skalę, ale autentyczność tworzy połączenie. Łącz oba.
        `,
        keyPoints: [
          "AI przyspiesza tworzenie i optymalizację treści social media",
          "Automatyzacja chatbotów i schedulingu oszczędza czas",
          "Autentyczność i oznaczanie AI są kluczowe"
        ],
        funFact: "Posty optymalizowane przez AI mają średnio 25% wyższy engagement niż te tworzone bez wsparcia AI!"
      },
      {
        id: "6-7",
        title: "Warsztat kreatywny: od pomysłu do publikacji",
        duration: "10 min",
        content: `
# Praktyczny workflow twórcy z AI

Przeprowadzę cię przez kompletny proces tworzenia z AI – od pustej kartki do gotowej publikacji.

## Case study: Stwórz kampanię marketingową

### Scenariusz
Masz kawiarnie i chcesz wypromować nową sezonową kawę. Masz budżet 0 zł i 2 godziny.

## Krok 1: Brainstorming (15 min)

### Prompt do ChatGPT
\`\`\`
Jestem właścicielem małej kawiarni w Krakowie. 
Wprowadzam nową jesienną kawę dyniową.
Wygeneruj 10 pomysłów na posty na Instagram 
promujące tę kawę. Różne formaty: Reels, Stories, posty.
\`\`\`

### Wynik
Dostajesz 10 gotowych koncepcji do wyboru.

## Krok 2: Copy (20 min)

### Wybierz 3 najlepsze pomysły
Poproś AI o rozwinięcie:

\`\`\`
Dla pomysłu "Behind the scenes z tworzenia kawy dyniowej"
napisz:
1. Caption na Instagram (max 150 znaków)
2. 5 wariantów do A/B testingu
3. Hashtagi
4. CTA
\`\`\`

## Krok 3: Grafika (30 min)

### Ideogram/Canva AI
\`\`\`
Prompt: Przytulna jesienna atmosfera kawiarni, 
parująca kawa dyniowa z latte art, 
ciepłe światło, liście klonu, 
fotorealistyczne, Instagram square format
\`\`\`

### Edycja w Canva
- Dodaj logo
- Overlay tekstu
- Brand colors

## Krok 4: Wideo (30 min)

### CapCut / InVideo
- Użyj stocków + wygenerowanych obrazów
- Auto-napisy
- Trending music

## Krok 5: Scheduling (15 min)

### Buffer/Later
- Zaplanuj posty na tydzień
- Najlepsze godziny (AI podpowiada)
- Ustaw Stories

## Krok 6: Analiza (ciągłe)

### Po tygodniu
- Sprawdź engagement
- Porównaj warianty
- Ucz się i iteruj

## Twój turniej!

### Wyzwanie
Stwórz 3 posty na swój profil używając AI:
1. Post inspiracyjny
2. Behind-the-scenes
3. Edukacyjny tip

Użyj minimum 2 narzędzi AI.

## Podsumowanie workflow

\`\`\`
Pomysł → AI brainstorm
Copy → ChatGPT/Claude
Grafika → Ideogram/Canva AI
Wideo → CapCut/InVideo
Schedule → Buffer/Later
Analiza → AI insights
\`\`\`

> Całość zajmuje 2h zamiast 2 dni!
        `,
        keyPoints: [
          "Kompletny workflow z AI: od pomysłu przez copy, grafikę, wideo do publikacji",
          "AI skraca czas tworzenia z dni do godzin",
          "Iteracja i analiza są kluczowe dla sukcesu"
        ],
        funFact: "Twórcy korzystający z AI workflow raportują 5x szybsze tworzenie contentu przy zachowaniu jakości!"
      }
    ],
    quiz: [
      {
        id: "q6-1",
        question: "Które narzędzie jest najpopularniejsze do generowania artystycznych obrazów?",
        options: ["Microsoft Word", "Midjourney", "Excel", "PowerPoint"],
        correctIndex: 1,
        explanation: "Midjourney to jedno z najpopularniejszych narzędzi do generowania artystycznych obrazów AI."
      },
      {
        id: "q6-2",
        question: "Co to jest Synthesia?",
        options: ["Edytor tekstu", "Narzędzie do tworzenia wirtualnych avatarów wideo", "Przeglądarka", "System operacyjny"],
        correctIndex: 1,
        explanation: "Synthesia pozwala tworzyć wideo z wirtualnymi prezenterami AI."
      },
      {
        id: "q6-3",
        question: "Które narzędzie służy do automatycznego masteringu muzyki?",
        options: ["Photoshop", "Landr", "Midjourney", "ChatGPT"],
        correctIndex: 1,
        explanation: "Landr to narzędzie do automatycznego masteringu muzyki z wykorzystaniem AI."
      },
      {
        id: "q6-4",
        question: "Co powinno zawierać portfolio AI artysty?",
        options: ["Tylko finalne efekty", "Dokumentację procesu twórczego i rolę AI", "Wyłącznie kod", "Tylko zdjęcia selfie"],
        correctIndex: 1,
        explanation: "Dobre portfolio pokazuje proces twórczy i jasno określa rolę AI."
      },
      {
        id: "q6-5",
        question: "Jaka jest kluczowa zasada przy używaniu AI w pracy twórczej?",
        options: ["Ukrywać użycie AI", "Transparentność o użyciu AI", "Nigdy nie używać AI", "Zastąpić całą pracę AI"],
        correctIndex: 1,
        explanation: "Transparentność o użyciu AI buduje zaufanie i jest etycznie właściwa."
      },
      {
        id: "q6-6",
        question: "Które narzędzie AI automatycznie tworzy napisy do wideo?",
        options: ["Excel", "CapCut", "Photoshop", "Notepad"],
        correctIndex: 1,
        explanation: "CapCut ma wbudowaną funkcję AI do automatycznego generowania napisów."
      },
      {
        id: "q6-7",
        question: "Jakie narzędzie AI jest dobre do tworzenia grafik na social media?",
        options: ["Microsoft Word", "Canva AI", "Kalkulator", "Terminarz"],
        correctIndex: 1,
        explanation: "Canva AI oferuje szybkie tworzenie grafik z pomocą sztucznej inteligencji."
      }
    ]
  },
  {
    id: 7,
    slug: "zaawansowany-prompt-engineering",
    title: "Zaawansowany Prompt Engineering",
    description: "Opanuj zaawansowane techniki promptów, system prompts i bibliotekę 50+ szablonów.",
    icon: "Wand2",
    duration: "65 min",
    lessonsCount: 7,
    color: "primary",
    heroImage: {
      src: module7Hero,
      alt: "Terminal z kodem i magicznymi efektami prompt engineering"
    },
    lessons: [
      {
        id: "7-1",
        title: "Anatomia doskonałego promptu",
        duration: "9 min",
        content: `
# Struktura skutecznego promptu

Dobry prompt to klucz do najlepszych wyników z AI.

## Elementy promptu

### 1. Kontekst (Context)
Kim jesteś, jaka jest sytuacja, dla kogo tworzysz.

### 2. Rola (Role)
Kim ma być AI – ekspertem, copywriterem, nauczycielem?

### 3. Zadanie (Task)
Co dokładnie AI ma zrobić.

### 4. Format (Format)
Jak ma wyglądać odpowiedź – lista, tabela, akapity?

### 5. Ograniczenia (Constraints)
Czego unikać, jakie limity.

### 6. Przykłady (Examples)
Wzory pożądanego outputu.

## Szablon uniwersalny

\`\`\`
Kontekst: [sytuacja i tło]
Rola: Jesteś [ekspert/profesja]
Zadanie: [konkretne polecenie]
Format: [struktura odpowiedzi]
Ograniczenia: [czego unikać]
Przykład: [wzór odpowiedzi]
\`\`\`

## Błędy do unikania

- Zbyt ogólne polecenia
- Brak kontekstu
- Nieokreślony format
- Sprzeczne instrukcje
        `,
        keyPoints: [
          "Dobry prompt ma strukturę: kontekst, rola, zadanie, format",
          "Przykłady znacząco poprawiają jakość odpowiedzi",
          "Precyzja i konkretność są kluczowe"
        ],
        funFact: "Różnica między przeciętnym a doskonałym promptem może zwiększyć jakość odpowiedzi nawet o 80%!"
      },
      {
        id: "7-2",
        title: "Chain of Thought i Tree of Thought",
        duration: "9 min",
        content: `
# Zaawansowane techniki rozumowania

Te techniki wymuszają na AI głębsze myślenie.

## Chain of Thought (CoT)

Prosimy AI, by myślało krok po kroku.

### Przykład
"Rozwiąż ten problem krok po kroku, pokazując tok rozumowania:"

### Dlaczego działa?
- Zmusza do logicznego myślenia
- Redukuje błędy
- Pokazuje, gdzie może być problem

### Zero-shot CoT
Dodaj: "Let's think step by step" lub "Pomyślmy krok po kroku"

## Tree of Thought (ToT)

AI rozważa wiele ścieżek rozumowania równocześnie.

### Jak używać?
"Rozważ trzy różne podejścia do tego problemu. Dla każdego:
1. Opisz podejście
2. Wymień za i przeciw
3. Oceń szanse sukcesu
Następnie wybierz najlepsze."

## Self-Consistency

Proś AI o wiele odpowiedzi i wybierz najczęściej powtarzającą się.

### Przykład
"Odpowiedz na to pytanie 3 razy, każdorazowo myśląc od nowa. Następnie wybierz najbardziej wiarygodną odpowiedź."

## Kiedy używać?

- CoT: matematyka, logika, debugging
- ToT: złożone decyzje, strategie
- Self-Consistency: gdy potrzebujesz pewności
        `,
        keyPoints: [
          "Chain of Thought wymusza logiczne, krokowe myślenie",
          "Tree of Thought eksploruje wiele rozwiązań",
          "Self-Consistency zwiększa wiarygodność odpowiedzi"
        ],
        funFact: "Chain of Thought może poprawić dokładność AI w zadaniach matematycznych nawet o 40%!"
      },
      {
        id: "7-3",
        title: "Few-shot i Zero-shot Learning",
        duration: "9 min",
        content: `
# Uczenie AI przez przykłady

Jak efektywnie "pokazać" AI, czego oczekujesz.

## Zero-shot

AI wykonuje zadanie BEZ przykładów.

### Przykład
"Napisz haiku o programowaniu."

### Kiedy używać?
- Proste, jasne zadania
- Gdy format jest powszechnie znany

## One-shot

Dajesz JEDEN przykład.

### Przykład
"Napisz slogan reklamowy w stylu:
Przykład: Nike – Just Do It
Teraz dla marki ekologicznych butów:"

## Few-shot

Dajesz KILKA przykładów (2-5).

### Przykład
"Kategoryzuj recenzje:
'Świetny produkt!' → Pozytywna
'Nie polecam' → Negatywna
'Jest OK' → Neutralna

Teraz kategoryzuj:
'Absolutnie fantastyczne!' →"

## Dobre praktyki

### Wybór przykładów
- Reprezentatywne dla zadania
- Różnorodne (edge cases)
- Spójne w formacie

### Ilość przykładów
- 2-3 dla prostych zadań
- 4-6 dla złożonych

### Kolejność
- Od prostych do złożonych
- Lub losowa (dla różnorodności)
        `,
        keyPoints: [
          "Zero-shot: bez przykładów, dla prostych zadań",
          "Few-shot: kilka przykładów znacząco poprawia wyniki",
          "Wybór dobrych przykładów jest kluczowy"
        ],
        funFact: "GPT-3 został nazwany 'few-shot learner' – potrzebuje zaledwie kilku przykładów, by opanować nowe zadanie!"
      },
      {
        id: "7-4",
        title: "Prompt chaining i automatyzacja",
        duration: "9 min",
        content: `
# Łączenie promptów w przepływy

Jak budować złożone systemy z wielu promptów.

## Prompt Chaining

Output jednego promptu staje się inputem następnego.

### Przykład przepływu
1. Prompt 1: "Wygeneruj 10 tematów na blog o AI"
2. Prompt 2: "Dla tematu X napisz outline"
3. Prompt 3: "Rozwiń punkt Y w pełny akapit"

## Architektura łańcucha

### Liniowa
A → B → C → D

### Rozgałęziona
A → B₁ + B₂ → C

### Iteracyjna
A → B → A (z poprawkami) → B

## Automatyzacja z narzędziami

### LangChain
Framework Python do budowania łańcuchów.

### Zapier / Make
No-code automatyzacje z AI.

### Custom scripts
Python + OpenAI API.

## Dobre praktyki

1. **Modularność** – małe, wyspecjalizowane prompty
2. **Walidacja** – sprawdzaj output przed przekazaniem
3. **Fallbacks** – co robić, gdy krok zawiedzie
4. **Logging** – zapisuj każdy krok do debugowania

## Przykładowy workflow

\`\`\`
[Input tekstu]
    ↓
[Prompt: Streszczenie]
    ↓
[Prompt: Wyciągnij kluczowe punkty]
    ↓
[Prompt: Stwórz post na social media]
    ↓
[Output: Gotowy post]
\`\`\`
        `,
        keyPoints: [
          "Prompt chaining łączy wiele promptów w przepływ",
          "Modularność i walidacja są kluczowe",
          "Narzędzia jak LangChain ułatwiają automatyzację"
        ],
        funFact: "Zaawansowane systemy AI mogą łączyć setki promptów w złożone przepływy pracy!"
      },
      {
        id: "7-5",
        title: "Debugowanie i optymalizacja promptów",
        duration: "9 min",
        content: `
# Gdy prompt nie działa

Jak diagnozować i naprawiać problemy z promptami.

## Typowe problemy

### 1. Zbyt ogólne odpowiedzi
**Rozwiązanie:** Dodaj więcej kontekstu i specyficznych instrukcji.

### 2. Halucynacje
**Rozwiązanie:** Proś o źródła, używaj "Jeśli nie wiesz, powiedz"

### 3. Ignorowanie instrukcji
**Rozwiązanie:** Powtórz kluczowe instrukcje na końcu promptu

### 4. Niespójny format
**Rozwiązanie:** Daj konkretny przykład formatu

### 5. Za krótkie/długie odpowiedzi
**Rozwiązanie:** Określ dokładną długość: "w 3 paragrafach" lub "w 50 słowach"

## Techniki debugowania

### Iteracja
Zmieniaj jeden element na raz.

### A/B testing
Testuj warianty promptów.

### Temperature tuning
- Niższa (0.1-0.3): bardziej deterministyczne
- Wyższa (0.7-1.0): bardziej kreatywne

### Prompt injection testing
Sprawdź, czy prompt jest odporny na manipulację.

## Optymalizacja

### Długość
Czasem krótszy prompt działa lepiej!

### Słowa kluczowe
"WAŻNE:", "KRYTYCZNE:", "ZAWSZE:"

### Negatywne instrukcje
"NIE rób X" może być skuteczniejsze niż "Rób Y"

### Persona stacking
"Jesteś ekspertem X z 20-letnim doświadczeniem, który..."

## Dokumentuj swoje odkrycia!

Prowadź notes z działającymi promptami.
        `,
        keyPoints: [
          "Debuguj iteracyjnie – jeden element na raz",
          "Temperature wpływa na kreatywność vs przewidywalność",
          "Dokumentuj skuteczne prompty do ponownego użycia"
        ],
        funFact: "Profesjonalni prompt engineers mogą spędzać godziny optymalizując pojedynczy prompt!"
      },
      {
        id: "7-6",
        title: "System prompts i instrukcje dla AI",
        duration: "10 min",
        content: `
# System prompts – ukryta moc AI

System prompt to instrukcje, które definiują zachowanie AI na poziomie fundamentalnym.

## Czym jest system prompt?

To specjalna wiadomość, która:
- Definiuje osobowość AI
- Ustala reguły i ograniczenia
- Określa styl komunikacji
- Jest "niewidoczna" dla użytkownika

## Struktura system promptu

\`\`\`
Jesteś [ROLA].
Twoim celem jest [CEL].
Zawsze [ZASADY].
Nigdy nie [ZAKAZY].
Odpowiadaj w formacie [FORMAT].
\`\`\`

## Przykład: Asystent sprzedaży

\`\`\`
Jesteś doświadczonym konsultantem sprzedaży.
Twoim celem jest pomagać klientom znaleźć idealny produkt.
Zawsze zadawaj pytania o potrzeby przed rekomendacją.
Nigdy nie bądź nachalny ani agresywny.
Odpowiadaj przyjaźnie i profesjonalnie.
\`\`\`

## Zaawansowane techniki

### Persona stacking
Łącz wiele ról dla lepszych efektów.

### Guardrails
Ustaw granice, czego AI nie powinno robić.

### Output formatting
Definiuj strukturę odpowiedzi.

## Gdzie używać?

- Chatboty na stronach
- Asystenci w aplikacjach
- Narzędzia wewnętrzne
- Custom GPTs
        `,
        keyPoints: [
          "System prompt definiuje fundamentalne zachowanie AI",
          "Dobry system prompt zawiera rolę, cel, zasady i ograniczenia",
          "Guardrails chronią przed niepożądanymi odpowiedziami"
        ],
        funFact: "System prompt ChatGPT ma ponad 1500 słów i jest regularnie aktualizowany!"
      },
      {
        id: "7-7",
        title: "Biblioteka promptów – 50+ gotowych szablonów",
        duration: "12 min",
        content: `
# Twoja biblioteka promptów

Gotowe szablony do natychmiastowego użycia. Kopiuj, modyfikuj, używaj!

## 📝 Pisanie

### Email profesjonalny
\`\`\`
Napisz profesjonalny email do [ODBIORCA] w sprawie [TEMAT].
Ton: [formalny/przyjazny]. Cel: [CO CHCĘ OSIĄGNĄĆ].
Max 150 słów.
\`\`\`

### Post na LinkedIn
\`\`\`
Napisz angażujący post na LinkedIn o [TEMAT].
Struktura: hook, historia, lekcja, CTA.
Użyj emoji sparingly. Max 200 słów.
\`\`\`

## 📊 Analiza

### Podsumowanie dokumentu
\`\`\`
Przeanalizuj poniższy tekst i stwórz:
1. Streszczenie (3 zdania)
2. Kluczowe punkty (5 bullet points)
3. Wnioski i rekomendacje
[TEKST]
\`\`\`

### SWOT
\`\`\`
Przeprowadź analizę SWOT dla [FIRMA/PRODUKT].
Format: tabela 2x2.
Podaj po 3-5 punktów w każdej kategorii.
\`\`\`

## 🎨 Kreatywność

### Brainstorming
\`\`\`
Wygeneruj 20 pomysłów na [TEMAT].
Połowa poważnych, połowa szalonych.
Dla każdego: tytuł + 1 zdanie opisu.
\`\`\`

### Storytelling
\`\`\`
Napisz historię o [TEMAT] używając struktury:
1. Problem bohatera
2. Odkrycie rozwiązania
3. Transformacja
4. Morał/CTA
\`\`\`

## 💼 Biznes

### Pitch
\`\`\`
Stwórz 60-sekundowy pitch dla [PRODUKT].
Struktura: Problem, Rozwiązanie, Wyróżnik, CTA.
Język prosty, bez żargonu.
\`\`\`

### Meeting notes
\`\`\`
Na podstawie notatek ze spotkania:
1. Lista decyzji
2. Action items (kto, co, kiedy)
3. Otwarte kwestie
[NOTATKI]
\`\`\`

## 🖼️ Obrazy

### Midjourney/FLUX fotorealizm
\`\`\`
[TEMAT], professional photography, 
natural lighting, shallow depth of field,
shot on Canon EOS R5, 85mm lens, 
ultra detailed, 8K resolution
\`\`\`

### Ilustracja
\`\`\`
[TEMAT], digital illustration style,
vibrant colors, clean lines,
modern vector art, flat design,
trending on Dribbble
\`\`\`

## 💡 Wskazówka

Stwórz własną bibliotekę promptów w Notion lub Obsidian!
        `,
        keyPoints: [
          "Biblioteka promptów oszczędza czas i zapewnia spójność",
          "Szablony można łatwo modyfikować do własnych potrzeb",
          "Warto budować własną kolekcję sprawdzonych promptów"
        ],
        funFact: "Profesjonalni użytkownicy AI mają biblioteki z setkami promptów – to ich przewaga konkurencyjna!"
      }
    ],
    quiz: [
      {
        id: "q7-1",
        question: "Które elementy powinien zawierać dobry prompt?",
        options: ["Tylko pytanie", "Kontekst, rola, zadanie, format", "Tylko słowa kluczowe", "Losowe instrukcje"],
        correctIndex: 1,
        explanation: "Dobry prompt zawiera kontekst, rolę, zadanie, format i opcjonalnie przykłady."
      },
      {
        id: "q7-2",
        question: "Co to jest Chain of Thought?",
        options: ["Łańcuch blokowy", "Technika wymuszająca myślenie krok po kroku", "Typ sieci neuronowej", "Narzędzie do programowania"],
        correctIndex: 1,
        explanation: "Chain of Thought to technika, która wymusza na AI logiczne, krokowe rozumowanie."
      },
      {
        id: "q7-3",
        question: "Ile przykładów dajemy w few-shot learning?",
        options: ["Zero", "Jeden", "2-5 przykładów", "Ponad 100"],
        correctIndex: 2,
        explanation: "Few-shot learning zazwyczaj używa 2-5 przykładów."
      },
      {
        id: "q7-4",
        question: "Co to jest prompt chaining?",
        options: ["Typ kryptowaluty", "Łączenie wielu promptów w przepływ", "Rodzaj błędu", "Technika hakowania"],
        correctIndex: 1,
        explanation: "Prompt chaining to łączenie wielu promptów, gdzie output jednego staje się inputem następnego."
      },
      {
        id: "q7-5",
        question: "Jak naprawić problem halucynacji AI?",
        options: ["Ignorować", "Prosić o źródła i używać 'Jeśli nie wiesz, powiedz'", "Pisać dłuższe prompty", "Zrezygnować z AI"],
        correctIndex: 1,
        explanation: "Proszenie o źródła i instrukcja 'Jeśli nie wiesz, powiedz' redukują halucynacje."
      },
      {
        id: "q7-6",
        question: "Co to jest system prompt?",
        options: ["Błąd systemowy", "Instrukcja definiująca zachowanie AI", "Typ komputera", "Format pliku"],
        correctIndex: 1,
        explanation: "System prompt to specjalna instrukcja definiująca fundamentalne zachowanie AI."
      },
      {
        id: "q7-7",
        question: "Dlaczego warto mieć bibliotekę promptów?",
        options: ["Dla zabawy", "Oszczędza czas i zapewnia spójność", "Bo tak każą", "Nie warto"],
        correctIndex: 1,
        explanation: "Biblioteka promptów oszczędza czas i zapewnia spójne, wysokiej jakości wyniki."
      }
    ]
  },
  {
    id: 8,
    slug: "multimodalne-ai",
    title: "Multimodalne AI w praktyce",
    description: "Projektuj generatywne workflow łączące tekst, obraz, wideo i audio w prawdziwych projektach.",
    icon: "Image",
    duration: "70 min",
    lessonsCount: 5,
    color: "accent",
    heroImage: {
      src: module8Hero,
      alt: "Centralna sfera AI z przepływem tekstu, obrazów i wideo"
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1529333166433-0000c8f7e8c8?auto=format&fit=crop&w=1400&q=80",
        alt: "Moodboard z kolorowymi szkicami dla systemu generowania obrazów",
        caption: "Moodboard pomaga precyzyjnie zdefiniować styl przed generowaniem obrazów."
      },
      {
        src: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1400&q=80",
        alt: "Osoba edytująca klatki wideo na laptopie",
        caption: "Storyboarding i krótkie klipy referencyjne skracają czas iteracji modeli wideo."
      },
      {
        src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1400&q=80",
        alt: "Mikrofon studyjny podczas nagrywania narracji",
        caption: "Dobrze przygotowany dźwięk referencyjny poprawia jakość syntetycznego voice-overu."
      }
    ],
    lessons: [
      {
        id: "8-1",
        title: "Mapa pracy z multimodalną AI",
        duration: "14 min",
        content: `
# Dlaczego multimodalna AI zmienia pracę zespołów

Modele multimodalne (łączące tekst, obraz, wideo i audio) pozwalają przejść od briefu do prototypu w ciągu godzin zamiast tygodni.

![Zespół planujący przepływ pracy z AI](https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1200&q=80)

## Uniwersalny przepływ pracy
1. **Brief i referencje** – definicja celu, grupy odbiorców, stylu, ograniczeń prawnych.
2. **Szkice niskiej wierności** – tekstowe opisy i szybkie miniatury (np. szkice w Figmie lub markerem na papierze).
3. **Iteracje modelu** – generacje w małej rozdzielczości, porównanie kilku wersji i wybór najlepszego wariantu.
4. **Produkcja wysokiej jakości** – upscale, poprawki ręczne, dodanie dźwięku/lektora, eksport do docelowego formatu.

## Kluczowe decyzje projektowe
- Jakie dane referencyjne są dostępne (zdjęcia, storyboard, sample audio)?
- Czy potrzebujemy spójności między scenami (postacie, kolorystyka, typografia)?
- Jak będziemy wersjonować prompt i pliki (Notion, Git, foldery w chmurze)?

## Przykład workflow "90 minut do prototypu"
- 15 min – zebranie briefu i przykładowych kadrów od klienta.
- 30 min – wygenerowanie 12 miniatur referencyjnych (tekst → obraz) i wybór top 3.
- 30 min – storyboard 6 scen + krótkie klipy referencyjne (obraz → wideo).
- 15 min – syntetyczny lektor + miks podstawowy.
        `,
        keyPoints: [
          "Multimodalne modele skracają czas od briefu do prototypu",
          "Workflow zaczyna się od referencji i szybkich szkiców",
          "Wersjonowanie promptów i plików pozwala uniknąć chaosu"
        ],
        funFact: "Demo GPT-4o pokazało dialog w czasie rzeczywistym z analizą obrazu i dźwięku, co przyspiesza iteracje nad storyboardami."
      },
      {
        id: "8-2",
        title: "Tekst → obraz: spójne style i kompozycje",
        duration: "12 min",
        content: `
# Jak prowadzić modele tekst→obraz

Stabilne kadry wymagają jasnych instrukcji dotyczących perspektywy, oświetlenia i stylu.

![Moodboard stylu i kolorystyki](https://images.unsplash.com/photo-1529333166433-0000c8f7e8c8?auto=format&fit=crop&w=1200&q=80)

## Wzór promptu dla spójnego stylu
1. **Temat** – kto/co jest głównym obiektem.
2. **Kadr i perspektywa** – plan amerykański, ujęcie z góry, macro itp.
3. **Światło** – soft light, golden hour, neon, film noir.
4. **Paleta i tekstury** – pastelowe kolory, ziarnistość filmu 35mm, matowy metal.
5. **Sprzęt lub technika** – "shot on 50mm", "isometric illustration", "vector art".

## Praktyczne ustawienia
- Modele: Midjourney/FLUX (styl), Stable Diffusion (kontrola i lokalne uruchomienie).
- Narzędzia kontroli: ControlNet/Guidance dla spójnych póz i layoutu.
- Upscaling: 2x–4x, delikatne odszumianie, korekcja skóry/tekstu w edytorze graficznym.

## Czego unikać
- Zbyt ogólnych promptów bez kontekstu.
- Sprzecznych instrukcji ("noc" + "pełne słońce").
- Braku referencji wizualnych – nawet szkic na kartce poprawia wynik.
        `,
        keyPoints: [
          "Spójny prompt opisuje temat, kadr, światło, paletę i technikę",
          "ControlNet lub podobne narzędzia utrzymują układ i pozę",
          "Referencje wizualne zmniejszają liczbę nieudanych generacji"
        ],
        funFact: "Modele tekst→obraz najlepiej radzą sobie z klarownymi instrukcjami dotyczącymi oświetlenia i kompozycji."
      },
      {
        id: "8-3",
        title: "Obraz → wideo i generowanie ujęć",
        duration: "14 min",
        content: `
# Przechodzenie z obrazu do ruchu

Narzędzia takie jak Runway Gen-3, Pika lub Luma pozwalają animować statyczne kadry.

![Storyboard do animacji wideo](https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80)

## Krok po kroku
1. Wybierz 6–8 kluczowych kadrów z moodboardu.
2. Dodaj krótkie opisy ruchu: "delikatny ruch kamery w prawo", "dronowy najazd".
3. Generuj klipy 4–8 sekund, zapisuj metadane promptu do każdego ujęcia.
4. Łącz klipy w edytorze (CapCut, Premiere) i wyrównaj kolorystykę LUT-em.

## Dobre praktyki
- Używaj referencyjnych klipów (video-to-video) dla realizmu ruchu.
- Generuj dźwięk tła osobno, aby uniknąć artefaktów w eksporcie.
- Sprawdzaj licencje narzędzi – komercyjne użycie może wymagać planu pro.

## Minimalny setup techniczny
- GPU z co najmniej 8 GB VRAM, jeśli korzystasz z lokalnych modeli.
- Stabilne łącze do uploadu referencji, gdy pracujesz w chmurze.
        `,
        keyPoints: [
          "Storyboard i krótkie opisy ruchu prowadzą modele wideo",
          "Lepsze efekty daje video-to-video z referencyjnym klipem",
          "Parametry eksportu i licencje trzeba sprawdzić przed publikacją"
        ],
        funFact: "Runway opublikował pierwszą wersję Gen-3 skierowaną do twórców w 2024 roku, poprawiając stabilność ruchu względem Gen-2."
      },
      {
        id: "8-4",
        title: "Audio, dubbing i synchronizacja ust",
        duration: "12 min",
        content: `
# Jak przygotować syntetyczny głos

Systemy takie jak ElevenLabs, PlayHT czy Azure AI potrafią klonować głos na podstawie kilku minut nagrań (z zachowaniem zgody osoby nagranej).

## Checklist przed nagraniem referencyjnym
- 5–10 minut czystego audio bez szumu tła.
- Różne emocje i tempo mowy, aby model odwzorował intonację.
- Jasne oświadczenie o zgodzie na użycie głosu.

## Synchronizacja ust
- Narzędzia: HeyGen, Pika lip-sync, D-ID (dla awatarów mówiących).
- Lepiej działa, gdy dostarczysz czysty master audio i spójny framerate wideo.
- Unikaj nadmiernej kompresji – artefakty utrudniają dopasowanie ruchu ust.

## Najczęstsze problemy
- **Przydźwięk i echo** – nagrywaj w pomieszczeniu z wygłuszeniem.
- **Niespójny akcent** – dodaj w promptach: "neutralna polszczyzna" lub "lekki akcent brytyjski".
- **Opóźnienie audio** – dopasuj klatkaż i eksportuj w 24/25/30 fps zgodnie z materiałem źródłowym.
        `,
        keyPoints: [
          "Klonowanie głosu wymaga zgody i dobrej jakości nagrań",
          "Synchronizacja ust działa lepiej z czystym master audio",
          "Drobne ustawienia (fps, kompresja) wpływają na finalną jakość"
        ],
        funFact: "Modele do syntezy mowy zazwyczaj potrzebują kilku minut audio, aby odtworzyć barwę i intonację mówiącego."
      },
      {
        id: "8-5",
        title: "Ocena jakości, bezpieczeństwo i prawa autorskie",
        duration: "18 min",
        content: `
# Jak ocenić wynik i pozostać fair

W multimodalnych projektach liczy się nie tylko efekt wizualny, ale też zgodność z prawem i etyką.

## Checklista jakości
- Czy obraz/wideo jest ostre i pozbawione artefaktów? (brak dodatkowych palców, brak glitchy)
- Czy styl jest spójny między scenami i zgodny z briefem?
- Czy teksty/napisy są czytelne i bez błędów?

## Bezpieczeństwo i zgodność
- Korzystaj z własnych lub licencjonowanych referencji (CC, stock, materiały klienta).
- Włącz filtry bezpieczeństwa modeli, gdy generujesz wizerunki osób.
- Przechowuj log zmian (prompty, ustawienia) – ułatwia to audyt i obronę praw autorskich.

## Praktyczne zasady prawne
- W UE obowiązuje prawo autorskie do elementów twórczych – jeśli korzystasz z cudzych materiałów, upewnij się, że masz licencję.
- Regulacje AI Act wymagają oznaczania treści syntetycznych w określonych kontekstach (np. deepfake osób publicznych).
- W projektach komercyjnych zapisuj w umowach, jakie modele i źródła danych zostały użyte.
        `,
        keyPoints: [
          "Jakość oceniamy po spójności stylu i braku artefaktów",
          "Licencje i filtry bezpieczeństwa chronią przed ryzykiem prawnym",
          "Logowanie promptów ułatwia audyt i zgodność z AI Act"
        ],
        funFact: "AI Act UE przewiduje oznaczanie syntetycznych treści w sytuacjach mogących wprowadzać odbiorcę w błąd, np. deepfake znanych osób."
      }
    ],
    quiz: [
      {
        id: "q8-1",
        question: "Jaki jest pierwszy krok w workflow multimodalnym?",
        options: ["Upscaling", "Brief i referencje", "Dodawanie filtrów", "Korekcja barw"],
        correctIndex: 1,
        explanation: "Workflow zaczyna się od briefu i zebrania referencji wizualnych/dźwiękowych."
      },
      {
        id: "q8-2",
        question: "Co pomaga utrzymać spójny układ postaci lub obiektów?",
        options: ["Losowe prompty", "ControlNet lub podobne narzędzia prowadzące kompozycję", "Brak referencji", "Przypadkowe style"],
        correctIndex: 1,
        explanation: "ControlNet i pokrewne narzędzia pozwalają zachować kompozycję i pozę między generacjami."
      },
      {
        id: "q8-3",
        question: "Dlaczego zapis promptów i ustawień wideo jest ważny?",
        options: ["Aby zajmowały więcej miejsca", "Ułatwia reprodukcję i audyt projektu", "Nie ma znaczenia", "Służy tylko do testów"],
        correctIndex: 1,
        explanation: "Logowanie promptów i parametrów ułatwia ponowne wygenerowanie klipów i pokazuje, jak powstał materiał."
      },
      {
        id: "q8-4",
        question: "Jakie źródła audio należy użyć do klonowania głosu?",
        options: ["Nagrania bez zgody", "Nagrania z wyraźną zgodą i dobrą jakością", "Dowolne klipy z internetu", "Stare nagrania telefoniczne"],
        correctIndex: 1,
        explanation: "Klonowanie głosu wymaga zgody osoby nagranej i czystych technicznie próbek audio."
      },
      {
        id: "q8-5",
        question: "Co należy sprawdzić przed komercyjnym użyciem modeli wideo?",
        options: ["Nic, można używać dowolnie", "Warunki licencji narzędzia", "Tylko rozdzielczość", "Tylko kolorystykę"],
        correctIndex: 1,
        explanation: "Licencje modeli wideo często różnią się w zależności od planu – trzeba je potwierdzić przed publikacją."
      },
      {
        id: "q8-6",
        question: "Jak poprawić synchronizację ust w awatarze?",
        options: ["Dodać szum do audio", "Użyć czystego master audio i dobranego fps", "Zrezygnować z lektora", "Kompresować wideo maksymalnie"],
        correctIndex: 1,
        explanation: "Czyste audio i zgodny klatkaż poprawiają działanie narzędzi lip-sync."
      },
      {
        id: "q8-7",
        question: "Co jest elementem checklisty jakości generatywnego wideo?",
        options: ["Czy materiał jest wystarczająco ziarnisty", "Spójność stylu i brak artefaktów w klatkach", "Czy kolory są losowe", "Brak metadanych"],
        correctIndex: 1,
        explanation: "Spójność stylu oraz brak artefaktów i glitchy to kluczowe kryteria oceny jakości."
      }
    ]
  }
];

export const getModuleBySlug = (slug: string): Module | undefined => {
  return modules.find(m => m.slug === slug);
};

export const getLessonById = (moduleSlug: string, lessonId: string): Lesson | undefined => {
  const module = getModuleBySlug(moduleSlug);
  return module?.lessons.find(l => l.id === lessonId);
};

export const getNextLesson = (moduleSlug: string, currentLessonId: string): Lesson | undefined => {
  const module = getModuleBySlug(moduleSlug);
  if (!module) return undefined;

  const currentIndex = module.lessons.findIndex(l => l.id === currentLessonId);
  if (currentIndex === -1 || currentIndex === module.lessons.length - 1) return undefined;

  return module.lessons[currentIndex + 1];
};

export const getPreviousLesson = (moduleSlug: string, currentLessonId: string): Lesson | undefined => {
  const module = getModuleBySlug(moduleSlug);
  if (!module) return undefined;

  const currentIndex = module.lessons.findIndex(l => l.id === currentLessonId);
  if (currentIndex <= 0) return undefined;

  return module.lessons[currentIndex - 1];
};
