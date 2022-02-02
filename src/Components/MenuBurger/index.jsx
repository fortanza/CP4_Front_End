import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import wildLogo from 'assets/wcsBlack.png';
import './style.css';

export default function BurgerMenu() {
  return (
    <Menu>
      <Link id="home" className="menuItem" to="/">
        <img src={wildLogo} alt="Wild Logo" />
      </Link>
      <a id="about" className="menu-item" href="/about">
        About
      </a>
      <a id="contact" className="menu-item" href="/contact">
        Contact
      </a>
    </Menu>
  );
}
