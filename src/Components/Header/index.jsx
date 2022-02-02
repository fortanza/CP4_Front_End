import wild from 'assets/wild.png';
import BurgerMenu from 'Components/MenuBurger';
import HeaderStyle from './style';

export default function Header() {
  return (
    <HeaderStyle>
      <header>
        <h1 className="headerTitle">WildBoard</h1>
        <img src={wild} alt="Wild logo" className="imgHeader" />
        <BurgerMenu />
      </header>
    </HeaderStyle>
  );
}
