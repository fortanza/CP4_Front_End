import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import wildLogo from 'assets/wcsBlack.png';
import './style.css';

export default function BurgerMenu() {
  return (
    <Menu>
      <Link id="home" className="menuItem" to="/">
        <img src={wildLogo} alt="Wild Logo" className="wildLogoBurger" />
      </Link>
      <Link id="about" className="menu-item" to="/intrustors">
        Les instructeurs
      </Link>
      <Link id="contact" className="menu-item" to="/students">
        Les étudiants
      </Link>
      <Link id="contact" className="menu-item" to="/forgotus">
        On t&#39;a oublié ?
      </Link>
      <Link id="contact" className="menu-item" to="/wanttoleave">
        🥲 Tu veux nous quitter
      </Link>
      <a
        id="contact"
        className="menu-item"
        href="https://www.wildcodeschool.com/fr-FR"
      >
        C&#39;est quoi la Wild
      </a>
    </Menu>
  );
}
