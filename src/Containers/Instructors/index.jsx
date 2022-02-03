import Cards from 'Components/Cards';
import InstrustorStyle from './style';

export default function Instructors() {
  return (
    <InstrustorStyle>
      <section>
        <h2>Nos Formateurs</h2>
      </section>
      <section>
        <Cards />
      </section>
    </InstrustorStyle>
  );
}
