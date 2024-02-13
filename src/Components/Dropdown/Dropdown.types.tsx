export interface DropdownOption {
  label: string;
  value: string | number;
}

export interface DropdownProps {
  options: DropdownOption[];
  disabled?: boolean;
  color?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
