import './Header.scss'
import { Link, animateScroll as scroll } from 'react-scroll';
import { langContext } from "../Context/langContext";
import { useContext } from "react";
import { FormattedMessage } from "react-intl";

const Header = () => {
    const idioma = useContext(langContext);

  return (
    <>
    <nav className="header">
        <div className="header__lang">
          <button className="header__btn" onClick={() => idioma.establecerLenguaje("es-ES")}>ES</button>
          <button className="header__btn" onClick={() => idioma.establecerLenguaje("en-EN")}>EN</button>
        </div>
        <div className="header__links">
          <Link className="header__link"  to="whoIAm" smooth={true} duration={500} spy={true}><FormattedMessage id="general:about"/></Link>
          <Link className="header__link" to="proyects" smooth={true} duration={500} spy={true}><FormattedMessage id="general:proyects"/></Link>
          <Link className="header__link" to="footer" smooth={true} duration={500} spy={true}><FormattedMessage id="general:contact"/></Link>
        </div>
      
    </nav>
      

    </>
  )
};

export default Header;