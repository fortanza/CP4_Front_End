import { useState } from 'react';
import FormStyle from './style';

export default function WeForgotYou() {
  const [formData, SetFormData] = useState({
    photo: '',
    firstName: '',
    lastName: '',
    age: '',
    quality: '',
    campus: '',
    animal: '',
    animalName: '',
    favoriteDish: '',
    hobby: '',
    skill: '',
    motivation: '',
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
        <legend>
          Ah désolé de t&#39;avoir oublié. On t&#39;invite à t&#39;ajouter à
          notre groupe
        </legend>
        <form onSubmit={hSubmit}>
          <fieldset>
            <div className="table">
              <p>Ta photo</p>
              <input
                type="text"
                name="photo"
                value={formData.photo}
                onChange={hChangeFormData}
              />
            </div>
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
              <p>Ton age</p>
              <input
                type="text"
                name="age"
                value={formData.age}
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
            <div className="table">
              <p>As tu un animal</p>
              <input
                type="text"
                name="animal"
                value={formData.animal}
                onChange={hChangeFormData}
              />
            </div>
            <div className="table">
              <p>Nom de ton animal</p>
              <input
                type="text"
                name="animalName"
                value={formData.animalName}
                onChange={hChangeFormData}
              />
            </div>
            <div className="table">
              <p>Ton plat favoris</p>
              <input
                type="text"
                name="favoriteDish"
                value={formData.favoriteDish}
                onChange={hChangeFormData}
              />
            </div>
            <div className="table">
              <p>Tes hobby</p>
              <input
                type="text"
                name="hobby"
                value={formData.hobby}
                onChange={hChangeFormData}
              />
            </div>
            <div className="table">
              <p>Compétences</p>
              <input
                type="text"
                name="skill"
                value={formData.skill}
                onChange={hChangeFormData}
              />
            </div>
            <div className="table">
              <p>Motivations</p>
              <input
                type="text"
                name="motivation"
                value={formData.motivation}
                onChange={hChangeFormData}
              />
            </div>
            <input type="submit" value="rejoins-nous" className="button" />
          </fieldset>
        </form>
      </section>
    </FormStyle>
  );
}
