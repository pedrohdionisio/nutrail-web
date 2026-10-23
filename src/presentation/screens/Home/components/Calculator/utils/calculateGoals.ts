import type { ActivityLevel, Gender, Goal } from 'shared/constants/profile';

const ACTIVITY_FACTORS: Record<ActivityLevel, number> = {
  SEDENTARY: 1.2,
  LIGHT: 1.375,
  MODERATE: 1.55,
  HEAVY: 1.725,
  ATHLETE: 1.9
};

const GOAL_ADJUSTMENTS: Record<Goal, number> = {
  LOSE: -500,
  MAINTAIN: 0,
  GAIN: 500
};

const PROTEIN_PER_KG = 2;
const FAT_PER_KG = 0.9;
const KCAL_PER_GRAM = { protein: 4, carbohydrate: 4, fat: 9 };

export interface IGoalsInput {
  goal: Goal;
  gender: Gender;
  age: number;
  height: number;
  weight: number;
  activityLevel: ActivityLevel;
}

export interface IGoals {
  calories: number;
  protein: number;
  carbohydrate: number;
  fat: number;
}

export function calculateGoals({
  goal,
  gender,
  age,
  height,
  weight,
  activityLevel
}: IGoalsInput): IGoals {
  const bmr = 10 * weight + 6.25 * height - 5 * age + (gender === 'MALE' ? 5 : -161);
  const calories = Math.round(bmr * ACTIVITY_FACTORS[activityLevel] + GOAL_ADJUSTMENTS[goal]);
  const protein = Math.round(weight * PROTEIN_PER_KG);
  const fat = Math.round(weight * FAT_PER_KG);
  const carbohydrate = Math.max(
    0,
    Math.round(
      (calories - protein * KCAL_PER_GRAM.protein - fat * KCAL_PER_GRAM.fat) /
        KCAL_PER_GRAM.carbohydrate
    )
  );

  return { calories, protein, carbohydrate, fat };
}
