import React from 'react';
import { Link } from 'react-router-dom';
import IconButton from '../IconButton/IconButton';

export interface IProps {
  close: () => void;
}

export type TRef = HTMLDivElement;

const SideMenu = React.forwardRef<TRef, IProps>(
  ({ close }: IProps, ref): JSX.Element => (
    <div ref={ref} className="SideMenu">
      <IconButton
        icon="cancel"
        onClick={close}
        className="SideMenu_closeButton"
      />
      <Link to="/" onClick={close} className="SideMenu_link">
        Frontpage
      </Link>
      <Link to="/r/all" onClick={close} className="SideMenu_link">
        /r/all
      </Link>
    </div>
  )
);

export default SideMenu;
