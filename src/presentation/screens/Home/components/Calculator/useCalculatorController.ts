import { type FormEvent, useState } from 'react';
import {
  ACTIVITY_LEVELS,
  type ActivityLevel,
  type Gender,
  type Goal
} from 'shared/constants/profile';
import { useCountUp } from 'shared/hooks/useCountUp';
import { calculateGoals } from './utils/calculateGoals';

const LIMITS = {
  age: { min: 15, max: 100 },
  height: { min: 50, max: 250 },
  weight: { min: 20, max: 400 }
} as const;

type Measure = keyof typeof LIMITS;

interface IHandleChangeMeasureParams {
  name: Measure;
  value: string;
}

function parseMeasure(name: Measure, value: string): number | null {
  const parsed = Number(value.replace(',', '.'));

  if (value.trim() === '' || Number.isNaN(parsed)) {
    return null;
  }

  return parsed >= LIMITS[name].min && parsed <= LIMITS[name].max ? parsed : null;
}

export function useCalculatorController() {
  const [goal, setGoal] = useState<Goal>('LOSE');
  const [gender, setGender] = useState<Gender>('FEMALE');
  const [activityLevel, setActivityLevel] = useState<ActivityLevel>('LIGHT');
  const [measures, setMeasures] = useState<Record<Measure, string>>({
    age: '30',
    height: '165',
    weight: '62'
  });

  const age = parseMeasure('age', measures.age);
  const height = parseMeasure('height', measures.height);
  const weight = parseMeasure('weight', measures.weight);
  const goals =
    age !== null && height !== null && weight !== null
      ? calculateGoals({ goal, gender, age, height, weight, activityLevel })
      : null;

  const calories = useCountUp(goals?.calories ?? 0);
  const protein = useCountUp(goals?.protein ?? 0);
  const carbohydrate = useCountUp(goals?.carbohydrate ?? 0);
  const fat = useCountUp(goals?.fat ?? 0);

  function handleChangeMeasure({ name, value }: IHandleChangeMeasureParams) {
    setMeasures((current) => ({ ...current, [name]: value }));
  }

  function handleChangeActivityLevel(value: string) {
    const level = ACTIVITY_LEVELS.find((option) => option === value);

    if (level) {
      setActivityLevel(level);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return {
    goal,
    gender,
    activityLevel,
    measures,
    limits: LIMITS,
    hasResult: goals !== null,
    result: { calories, protein, carbohydrate, fat },
    handleChangeGoal: setGoal,
    handleChangeGender: setGender,
    handleChangeActivityLevel,
    handleChangeMeasure,
    handleSubmit
  };
}
