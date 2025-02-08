
import React from 'react';

interface SelectInputProps {
  className?: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
  disabled?: boolean;
}

const SelectInput: React.FC<SelectInputProps> = ({ className = '', options, onChange, disabled }) => {
  return (
    <select
      className={`${className} w-full bg-black border border-primary border-opacity-10 text-white text-[16px] font-semibold outline-none rounded-md px-2 capitalize`}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled ?? false}
    >
      <option value="">
        -- Select an option --
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectInput;