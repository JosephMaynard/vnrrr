import React from 'react';
import { Link } from 'react-router-dom';
import OutsideClickHandler from 'react-outside-click-handler';

import IconButton from '../IconButton/IconButton';

export interface IProps {
  close: () => void;
}

export type TRef = HTMLDivElement;

const SideMenu = React.forwardRef<TRef, IProps>(
  ({ close }: IProps, ref): JSX.Element => (
    <OutsideClickHandler onOutsideClick={close}>
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
        <Link to="/r/politics" onClick={close} className="SideMenu_link">
          /r/politics
        </Link>
        <Link
          to="/r/relationship_advice/"
          onClick={close}
          className="SideMenu_link"
        >
          /r/relationship_advice/
        </Link>
        <Link
          to="/r/javascript+programming+ProgrammerHumor+webdev"
          onClick={close}
          className="SideMenu_link"
        >
          Programming stuff
        </Link>
      </div>
    </OutsideClickHandler>
  )
);

export default SideMenu;
