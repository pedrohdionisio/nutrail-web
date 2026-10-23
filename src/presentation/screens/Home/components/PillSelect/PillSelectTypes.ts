export interface IPillSelectOption<TValue extends string> {
  value: TValue;
  label: string;
}

export interface IPillSelectProps<TValue extends string> {
  label: string;
  value: TValue;
  options: IPillSelectOption<TValue>[];
  onChange: (value: TValue) => void;
  className?: string;
}
