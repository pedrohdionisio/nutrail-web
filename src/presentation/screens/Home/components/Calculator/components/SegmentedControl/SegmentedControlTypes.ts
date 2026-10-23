export interface ISegmentedControlProps<TValue extends string> {
  name: string;
  legend: string;
  value: TValue;
  options: { value: TValue; label: string }[];
  onChange: (value: TValue) => void;
}
