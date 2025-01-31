export interface IInput {
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
  type: string;
  disabled?: boolean;
  className?: string;
}