import React from 'react';
import { Link } from 'react-router-dom';
import IconButton from '../IconButton/IconButton';

export interface IProps {
  close: () => void;
}

const SideMenu: React.FC<IProps> = ({ close }: IProps): JSX.Element => {
  return (
    <div className="SideMenu">
      <IconButton
        icon="cancel"
        onClick={close}
        className="SideMenu_closeButton"
      />
      <Link to="/r/all" onClick={close}>
        /r/all
      </Link>
    </div>
  );
};

export default SideMenu;
