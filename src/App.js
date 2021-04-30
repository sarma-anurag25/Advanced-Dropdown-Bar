import './index.css';
import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
//import { ReactComponent as BoltIcon } from './icons/bolt.svg';
import { ReactComponent as ArgentinaIcon } from './icons/argentina.svg';
import { ReactComponent as BrazilIcon } from './icons/belgium.svg';
import { ReactComponent as BosniaIcon } from './icons/germany.svg';
import { ReactComponent as IndiaIcon } from './icons/india.svg';
import { ReactComponent as FranceIcon } from './icons/france.svg';
import { ReactComponent as MessiIcon } from './icons/messi.svg';
import { ReactComponent as RonaldoIcon } from './icons/ronaldo.svg';
import { ReactComponent as NeymarIcon } from './icons/neymar.svg';
import { ReactComponent as RonaldinhoIcon } from './icons/ronaldinho.svg';
import { ReactComponent as LineIcon } from './icons/lineup.svg';
import { ReactComponent as CommentIcon } from './icons/comment.svg';



import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

function App() {
  return (
    <Navbar>
      <h2>Welcome to our extravagant sport website</h2>
      <NavItem icon={<PlusIcon />} />
      <NavItem icon={<CommentIcon />} />
      <NavItem icon={<LineIcon />} />

      <NavItem icon={<CaretIcon />}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </Navbar>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    
    return (
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      

      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem
          leftIcon={<CogIcon />}
          rightIcon={<ChevronIcon />}>
          My Profile

          </DropdownItem>
          <DropdownItem
            leftIcon="🎫"
            rightIcon={<ChevronIcon />}
            goToMenu="settings">
            Choose Nation
          </DropdownItem>
          <DropdownItem
            leftIcon="👦"
            rightIcon={<ChevronIcon />}
            goToMenu="animals">
            Choose Players
          </DropdownItem>

        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Nations</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<ArgentinaIcon />}>Argentina</DropdownItem>
          <DropdownItem leftIcon={<BrazilIcon />}>Belgium</DropdownItem>
          <DropdownItem leftIcon={<BosniaIcon />}>Germany</DropdownItem>
          <DropdownItem leftIcon={<IndiaIcon />}>India</DropdownItem>
          <DropdownItem leftIcon={<FranceIcon />}>France</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'animals'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Players</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<MessiIcon />}>Messi</DropdownItem>
          <DropdownItem leftIcon={<RonaldoIcon />}>Cristiano</DropdownItem>
          <DropdownItem leftIcon={<NeymarIcon />}>Neymar</DropdownItem>
          <DropdownItem leftIcon={<RonaldinhoIcon />}>Ronaldinho</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default App;
