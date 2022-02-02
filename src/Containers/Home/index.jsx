import WildBanderom from 'Components/WildBanderom';
import HomeStyle from './style';

export default function Home() {
  return (
    <HomeStyle>
      <section>
        <h2>WildBoard, tout savoir sur tout le monde.</h2>
        <WildBanderom />
        <p>
          Wilders, recruteurs, grâce à WildBoard apprenez à connaître les élèves
          de la promo Septembre 2021 de la Wild Code School de Lille! Réalisée
          en React.js et Node.js lors du check point n°4. Le code source est
          disponible sur leurs Github. Bonne visite !
        </p>
      </section>
    </HomeStyle>
  );
}
