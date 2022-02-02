import wild from 'assets/wild.png';
import HeaderStyle from './style';

export default function Header() {
  return (
    <HeaderStyle>
      <header>
        <h1 className="headerTitle">WildBoard</h1>
        <img src={wild} alt="Wild logo" />
      </header>
    </HeaderStyle>
  );
}
