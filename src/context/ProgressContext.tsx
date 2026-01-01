import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface LessonProgress {
  lessonId: string;
  moduleSlug: string;
  completed: boolean;
  completedAt?: string;
}

interface QuizResult {
  moduleSlug: string;
  score: number;
  totalQuestions: number;
  completedAt: string;
  bestScore: number;
}

interface Achievement {
  id: string;
  unlockedAt: string;
}

interface ProgressState {
  lessons: LessonProgress[];
  quizzes: QuizResult[];
  achievements: Achievement[];
  points: number;
  level: number;
  streak: number;
  lastActiveDate: string;
}

interface ProgressContextType extends ProgressState {
  completeLesson: (lessonId: string, moduleSlug: string) => void;
  saveQuizResult: (moduleSlug: string, score: number, totalQuestions: number) => void;
  unlockAchievement: (achievementId: string) => void;
  addPoints: (amount: number) => void;
  isLessonCompleted: (lessonId: string) => boolean;
  getModuleProgress: (moduleSlug: string, totalLessons: number) => number;
  getQuizBestScore: (moduleSlug: string) => number | null;
  getTotalCompletedLessons: () => number;
  checkAndUpdateStreak: () => void;
}

const defaultState: ProgressState = {
  lessons: [],
  quizzes: [],
  achievements: [],
  points: 0,
  level: 1,
  streak: 0,
  lastActiveDate: "",
};

const STORAGE_KEY = "aistart_progress";

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<ProgressState>(() => {
    if (typeof window === "undefined") return defaultState;
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : defaultState;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const checkAndUpdateStreak = () => {
    const today = new Date().toDateString();
    const lastActive = state.lastActiveDate;
    
    if (lastActive === today) return;
    
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    
    setState(prev => ({
      ...prev,
      streak: lastActive === yesterday.toDateString() ? prev.streak + 1 : 1,
      lastActiveDate: today,
    }));
  };

  const completeLesson = (lessonId: string, moduleSlug: string) => {
    if (state.lessons.find(l => l.lessonId === lessonId)) return;
    
    const newLesson: LessonProgress = {
      lessonId,
      moduleSlug,
      completed: true,
      completedAt: new Date().toISOString(),
    };
    
    setState(prev => {
      const newPoints = prev.points + 10;
      const newLevel = Math.floor(newPoints / 100) + 1;
      return {
        ...prev,
        lessons: [...prev.lessons, newLesson],
        points: newPoints,
        level: newLevel,
      };
    });

    checkAndUpdateStreak();
  };

  const saveQuizResult = (moduleSlug: string, score: number, totalQuestions: number) => {
    const existingQuiz = state.quizzes.find(q => q.moduleSlug === moduleSlug);
    const bestScore = existingQuiz ? Math.max(existingQuiz.bestScore, score) : score;
    
    const pointsEarned = Math.floor((score / totalQuestions) * 25);
    
    setState(prev => {
      const filteredQuizzes = prev.quizzes.filter(q => q.moduleSlug !== moduleSlug);
      const newPoints = prev.points + pointsEarned;
      const newLevel = Math.floor(newPoints / 100) + 1;
      
      return {
        ...prev,
        quizzes: [...filteredQuizzes, {
          moduleSlug,
          score,
          totalQuestions,
          completedAt: new Date().toISOString(),
          bestScore,
        }],
        points: newPoints,
        level: newLevel,
      };
    });

    checkAndUpdateStreak();
  };

  const unlockAchievement = (achievementId: string) => {
    if (state.achievements.find(a => a.id === achievementId)) return;
    
    setState(prev => ({
      ...prev,
      achievements: [...prev.achievements, { id: achievementId, unlockedAt: new Date().toISOString() }],
      points: prev.points + 50,
    }));
  };

  const addPoints = (amount: number) => {
    setState(prev => {
      const newPoints = prev.points + amount;
      return {
        ...prev,
        points: newPoints,
        level: Math.floor(newPoints / 100) + 1,
      };
    });
  };

  const isLessonCompleted = (lessonId: string) => {
    return state.lessons.some(l => l.lessonId === lessonId);
  };

  const getModuleProgress = (moduleSlug: string, totalLessons: number) => {
    const completed = state.lessons.filter(l => l.moduleSlug === moduleSlug).length;
    return totalLessons > 0 ? Math.round((completed / totalLessons) * 100) : 0;
  };

  const getQuizBestScore = (moduleSlug: string) => {
    const quiz = state.quizzes.find(q => q.moduleSlug === moduleSlug);
    return quiz ? quiz.bestScore : null;
  };

  const getTotalCompletedLessons = () => {
    return state.lessons.length;
  };

  return (
    <ProgressContext.Provider value={{
      ...state,
      completeLesson,
      saveQuizResult,
      unlockAchievement,
      addPoints,
      isLessonCompleted,
      getModuleProgress,
      getQuizBestScore,
      getTotalCompletedLessons,
      checkAndUpdateStreak,
    }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error("useProgress must be used within a ProgressProvider");
  }
  return context;
};
