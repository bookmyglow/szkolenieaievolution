import { Award, BookOpen, Target, Flame, Brain, Star, Zap, Trophy, Medal, Sparkles, Rocket, Crown, GraduationCap, Palette, Scale, Wand2 } from "lucide-react";

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: typeof Award;
  color: "primary" | "accent" | "success";
  requirement: {
    type: "lessons" | "quiz_score" | "modules" | "streak" | "points";
    value: number;
    moduleSlug?: string;
  };
}

export const achievements: Achievement[] = [
  // Lesson milestones
  {
    id: "first_step",
    name: "Pierwszy krok",
    description: "Ukończ swoją pierwszą lekcję",
    icon: Star,
    color: "primary",
    requirement: { type: "lessons", value: 1 },
  },
  {
    id: "curious_mind",
    name: "Ciekawski umysł",
    description: "Ukończ 5 lekcji",
    icon: Brain,
    color: "primary",
    requirement: { type: "lessons", value: 5 },
  },
  {
    id: "bookworm",
    name: "Mól książkowy",
    description: "Ukończ 10 lekcji",
    icon: BookOpen,
    color: "accent",
    requirement: { type: "lessons", value: 10 },
  },
  {
    id: "knowledge_seeker",
    name: "Poszukiwacz wiedzy",
    description: "Ukończ 20 lekcji",
    icon: Rocket,
    color: "accent",
    requirement: { type: "lessons", value: 20 },
  },
  {
    id: "dedicated_learner",
    name: "Oddany uczeń",
    description: "Ukończ 30 lekcji",
    icon: GraduationCap,
    color: "success",
    requirement: { type: "lessons", value: 30 },
  },
  {
    id: "ai_master",
    name: "Mistrz AI",
    description: "Ukończ wszystkie 40 lekcji",
    icon: Crown,
    color: "success",
    requirement: { type: "lessons", value: 40 },
  },

  // Quiz achievements
  {
    id: "perfect_score",
    name: "Celownik",
    description: "Zdobądź 100% w dowolnym quizie",
    icon: Target,
    color: "accent",
    requirement: { type: "quiz_score", value: 100 },
  },

  // Module achievements
  {
    id: "module_master_1",
    name: "Znawca podstaw",
    description: "Ukończ moduł 'Czym jest AI?'",
    icon: Award,
    color: "primary",
    requirement: { type: "modules", value: 1, moduleSlug: "czym-jest-ai" },
  },
  {
    id: "module_master_2",
    name: "Mistrz języka",
    description: "Ukończ moduł 'Modele językowe'",
    icon: Medal,
    color: "accent",
    requirement: { type: "modules", value: 1, moduleSlug: "modele-jezykowe" },
  },
  {
    id: "module_master_3",
    name: "Artysta AI",
    description: "Ukończ moduł 'AI i obrazy'",
    icon: Palette,
    color: "accent",
    requirement: { type: "modules", value: 1, moduleSlug: "ai-i-obrazy" },
  },
  {
    id: "module_master_4",
    name: "Praktyk",
    description: "Ukończ moduł 'AI w praktyce'",
    icon: Zap,
    color: "success",
    requirement: { type: "modules", value: 1, moduleSlug: "ai-w-praktyce" },
  },
  {
    id: "module_master_5",
    name: "Etyk AI",
    description: "Ukończ moduł 'Etyka AI'",
    icon: Scale,
    color: "primary",
    requirement: { type: "modules", value: 1, moduleSlug: "etyka-ai" },
  },
  {
    id: "module_master_6",
    name: "Kreator AI",
    description: "Ukończ moduł 'AI dla twórców'",
    icon: Wand2,
    color: "accent",
    requirement: { type: "modules", value: 1, moduleSlug: "ai-dla-tworcow" },
  },
  {
    id: "module_master_7",
    name: "Mistrz promptów",
    description: "Ukończ moduł 'Zaawansowany Prompt Engineering'",
    icon: Sparkles,
    color: "success",
    requirement: { type: "modules", value: 1, moduleSlug: "zaawansowany-prompt-engineering" },
  },

  // Streak achievements
  {
    id: "streak_3",
    name: "Rozpędzony",
    description: "Utrzymaj 3-dniowy streak",
    icon: Flame,
    color: "accent",
    requirement: { type: "streak", value: 3 },
  },
  {
    id: "streak_7",
    name: "W ogniu!",
    description: "Utrzymaj 7-dniowy streak",
    icon: Zap,
    color: "success",
    requirement: { type: "streak", value: 7 },
  },
  {
    id: "streak_14",
    name: "Niezłomny",
    description: "Utrzymaj 14-dniowy streak",
    icon: Flame,
    color: "success",
    requirement: { type: "streak", value: 14 },
  },

  // Points achievements
  {
    id: "points_100",
    name: "Zbieracz punktów",
    description: "Zdobądź 100 punktów",
    icon: Sparkles,
    color: "primary",
    requirement: { type: "points", value: 100 },
  },
  {
    id: "points_500",
    name: "Ekspert AI",
    description: "Zdobądź 500 punktów",
    icon: Trophy,
    color: "accent",
    requirement: { type: "points", value: 500 },
  },
  {
    id: "points_1000",
    name: "Legenda",
    description: "Zdobądź 1000 punktów",
    icon: Crown,
    color: "success",
    requirement: { type: "points", value: 1000 },
  },
];

export const getLevelInfo = (points: number) => {
  const levels = [
    { name: "Nowicjusz", minPoints: 0 },
    { name: "Uczeń", minPoints: 100 },
    { name: "Adept", minPoints: 250 },
    { name: "Ekspert", minPoints: 500 },
    { name: "Mistrz AI", minPoints: 1000 },
  ];
  
  const currentLevel = [...levels].reverse().find(l => l.minPoints <= points) || levels[0];
  const nextLevel = levels.find(l => l.minPoints > points);
  
  return {
    name: currentLevel.name,
    nextLevelName: nextLevel?.name,
    nextLevelPoints: nextLevel?.minPoints,
    currentLevelPoints: currentLevel.minPoints,
  };
};
