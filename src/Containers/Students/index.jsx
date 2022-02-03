import UserCard from 'Components/Cards';
import { useEffect, useState } from 'react';
import axios from 'axios';
import StudentsStyle from './style';

export default function Students() {
  const [userCards, setUserCards] = useState([
    {
      firstName: 'Benoit',
      lastName: 'Zenone',
      quality: 'student',
      photo:
        'https://drive.google.com/file/d/1xPBDASdqsssNV_Fha_olk8qc6hQUs3FQ/view?usp=sharing',
      campusName: 'Lille',
      age: '28',
      animal: 'Non',
      animalName: 'Non',
      favoriteDish: 'Pizza',
      wildSide: "Je chante des opening d'anime sous la douche",
      hobby: 'Cinéma, manga, anime',
      shill: 'Web',
      motivation:
        "J'ai intégré la Wild pour devenir developpeur web, et ce métier m'attire pour le côté passionnant de la tech",
    },
  ]);

  useEffect(() => {
    axios
      .get(`http://localhost:5050/users`)
      .then(({ data }) => {
        const filterStudent = data.filter(
          (student) => student.quality === 'student'
        );
        setUserCards(filterStudent);
      })
      .catch(() => {
        console.error('Plz fix your call, or set up your internet');
      });
  }, []);
  return (
    <StudentsStyle>
      <section>
        <h2>Nos Formateurs</h2>
      </section>
      <section>
        {userCards.map((user) => {
          return <UserCard {...user} />;
        })}
      </section>
    </StudentsStyle>
  );
}
