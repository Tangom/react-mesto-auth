import React from 'react';
import logo from "../images/header.svg"

function Header(props) {
  const [isOpened, setIsOpened] = React.useState(false);

  function toggleMenu() {
    setIsOpened(!isOpened);
  }

  return (
    <header className="header">
      {isOpened && (
        <nav className={props.isOpened ? 'header__menu-mobile' : 'header__menu'}>
          <p className={`header__menu-email ${props.isOpened && "header__menu-email_mobile"}`}>
            {props.email}
          </p>
          <button onClick={props.onClick} className="header__menu-email header__menu-email_button">
            {props.menuText}
          </button>
        </nav>
      )}
      <img alt="Логотип заголовка" className="header__logo" src={logo}/>
      <div className={isOpened ?'header__menu-line header__menu-line_opened' : 'header__menu-line'} onClick={toggleMenu}></div>
      {!isOpened && (
        <nav className={props.isOpened ? 'menu__mobile' : 'menu'}>
          <p className={`header__menu-email ${props.isOpened && "header__menu-email_mobile"}`}>
            {props.email}
          </p>
          <button onClick={props.onClick} className="header__menu-email header__menu-email_button">
            {props.menuText}
          </button>
        </nav>
      )}
    </header>
  )
 }

export default Header;
