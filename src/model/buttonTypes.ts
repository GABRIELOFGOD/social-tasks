export interface IActionButton {
  text: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  backgroundColor?: string;
  textColor?: string;
}