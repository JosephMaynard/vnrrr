import React from 'react';

export interface IProps {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  id: string;
  children: React.ReactNode;
  value: string;
}

const SortSelect: React.FC<IProps> = ({
  label,
  onChange,
  id,
  children,
  value,
}: IProps): JSX.Element => (
  <div className="SortSelect">
    <label htmlFor={id}>{label}</label>
    <select id={id} onChange={onChange} value={value}>
      {children}
    </select>
  </div>
);

export default SortSelect;
