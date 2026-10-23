export const MEAL_METHODS = ['PICTURE', 'VOICE', 'TEXT'] as const;

export type MealMethod = (typeof MEAL_METHODS)[number];

export const MEAL_EXAMPLES = [
  { id: 'RICE_AND_BEANS', calories: 612, protein: 48, carbohydrate: 72, fat: 13 },
  { id: 'EGGS_ON_TOAST', calories: 365, protein: 21, carbohydrate: 28, fat: 18 },
  { id: 'ACAI_BOWL', calories: 520, protein: 7, carbohydrate: 88, fat: 16 },
  { id: 'SALMON_POKE', calories: 640, protein: 36, carbohydrate: 70, fat: 22 },
  { id: 'BURGER_AND_FRIES', calories: 980, protein: 38, carbohydrate: 92, fat: 50 }
] as const;

export type MealExample = (typeof MEAL_EXAMPLES)[number];

export type MealExampleId = MealExample['id'];

export const MACROS = ['protein', 'carbohydrate', 'fat'] as const;

export type Macro = (typeof MACROS)[number];
