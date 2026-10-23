import { useState } from 'react';
import { MEAL_EXAMPLES, type MealExampleId, type MealMethod } from 'shared/constants/mealExamples';
import { useCountUp } from 'shared/hooks/useCountUp';

export function useHeroSentenceController() {
  const [method, setMethod] = useState<MealMethod>('PICTURE');
  const [dishId, setDishId] = useState<MealExampleId>('RICE_AND_BEANS');
  const dish = MEAL_EXAMPLES.find((example) => example.id === dishId) ?? MEAL_EXAMPLES[0];

  const calories = useCountUp(dish.calories);
  const protein = useCountUp(dish.protein);
  const carbohydrate = useCountUp(dish.carbohydrate);
  const fat = useCountUp(dish.fat);

  return {
    method,
    dishId,
    calories,
    macros: { protein, carbohydrate, fat },
    handleChangeMethod: setMethod,
    handleChangeDish: setDishId
  };
}
