import { useState } from 'react';
import FormStyle from './style';

export default function YouWantToLeave() {
  const [formData, SetFormData] = useState({
    firstName: '',
    lastName: '',
    quality: '',
    campus: '',
  });
  const hSubmit = (evt) => {
    evt.preventDefault(evt.target.value);
  };
  const hChangeFormData = (evt) => {
    const newData = { ...formData };
    newData[evt.target.name] = evt.target.value;
    SetFormData(newData);
  };
  return (
    <FormStyle>
      <section className="FormUsers">
        <legend>On est désolé de te voir partir. Bonne route à toi</legend>
        <form onSubmit={hSubmit}>
          <fieldset>
            <div className="table">
              <p>Ton Nom</p>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={hChangeFormData}
              />
            </div>
            <div className="table">
              <p>Ton Prénom</p>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={hChangeFormData}
              />
            </div>
            <div className="table">
              <p>Ton rôle</p>
              <input
                type="text"
                name="quality"
                value={formData.quality}
                onChange={hChangeFormData}
              />
            </div>
            <div className="table">
              <p>Ton campus</p>
              <input
                type="text"
                name="campus"
                value={formData.campus}
                onChange={hChangeFormData}
              />
            </div>
            <input type="submit" value="Au revoir 🥲" className="button" />
          </fieldset>
        </form>
      </section>
    </FormStyle>
  );
}
