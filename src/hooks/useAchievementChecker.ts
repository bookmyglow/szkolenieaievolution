import { useEffect, useCallback } from "react";
import { useProgress } from "@/context/ProgressContext";
import { achievements } from "@/data/achievements";
import { modules } from "@/data/modules";
import { toast } from "@/hooks/use-toast";
import confetti from "canvas-confetti";

export const useAchievementChecker = () => {
  const {
    lessons,
    quizzes,
    achievements: unlockedAchievements,
    points,
    streak,
    unlockAchievement,
    getTotalCompletedLessons,
    getModuleProgress,
  } = useProgress();

  const triggerCelebration = useCallback(() => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 },
      colors: ["#06b6d4", "#f97316", "#22c55e"],
    });
  }, []);

  const checkAchievements = useCallback(() => {
    const totalLessons = getTotalCompletedLessons();
    
    achievements.forEach((achievement) => {
      // Skip already unlocked
      if (unlockedAchievements.some((a) => a.id === achievement.id)) {
        return;
      }

      let shouldUnlock = false;

      switch (achievement.requirement.type) {
        case "lessons":
          shouldUnlock = totalLessons >= achievement.requirement.value;
          break;

        case "quiz_score":
          // Check if any quiz has 100% score
          shouldUnlock = quizzes.some((q) => q.bestScore >= achievement.requirement.value);
          break;

        case "modules":
          if (achievement.requirement.moduleSlug) {
            const module = modules.find((m) => m.slug === achievement.requirement.moduleSlug);
            if (module) {
              const progress = getModuleProgress(achievement.requirement.moduleSlug, module.lessons.length);
              shouldUnlock = progress >= 100;
            }
          }
          break;

        case "streak":
          shouldUnlock = streak >= achievement.requirement.value;
          break;

        case "points":
          shouldUnlock = points >= achievement.requirement.value;
          break;
      }

      if (shouldUnlock) {
        unlockAchievement(achievement.id);
        triggerCelebration();
        toast({
          title: "🏅 Nowa odznaka!",
          description: `Odblokowano: ${achievement.name}`,
        });
      }
    });
  }, [
    getTotalCompletedLessons,
    unlockedAchievements,
    quizzes,
    streak,
    points,
    getModuleProgress,
    unlockAchievement,
    triggerCelebration,
  ]);

  // Check achievements when relevant state changes
  useEffect(() => {
    checkAchievements();
  }, [checkAchievements, lessons.length, quizzes.length, points, streak]);

  return { checkAchievements };
};
