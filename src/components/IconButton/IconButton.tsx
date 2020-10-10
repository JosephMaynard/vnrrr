import React from 'react';

import SVGIcon, { TIconType } from '../SVGIcon/SVGIcon';

import './styles/index.scss';

export interface IProps {
  icon: TIconType;
  label?: string;
  onClick: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
}

const IconButton: React.FC<IProps> = ({
  icon,
  label,
  onClick,
  disabled,
}: IProps): JSX.Element => (
  <button
    type="button"
    className="IconButton"
    onClick={onClick}
    disabled={disabled}
  >
    <SVGIcon icon={icon} className="IconButton_icon" />
    {label && <span className="IconButton_label">{label}</span>}
  </button>
);

export default IconButton;
