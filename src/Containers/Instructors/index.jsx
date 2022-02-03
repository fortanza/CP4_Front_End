import UserCard from 'Components/Cards';
import { useEffect, useState } from 'react';
import axios from 'axios';
import InstrustorStyle from './style';

export default function Instructors() {
  const [userCards, setUserCards] = useState([]);

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
    <InstrustorStyle>
      <section>
        <h2>Nos Formateurs</h2>
      </section>
      <section>
        {userCards.map((user) => {
          return <UserCard {...user} />;
        })}
      </section>
    </InstrustorStyle>
  );
}
