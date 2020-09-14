import React from 'react';
import pen from '../images/pen.svg';
import api from '../utils/Api.js';
import Card from './Card.js';

function Main(props) {

  const [userInfo, setUserInfo] = React.useState({});
  const [cards, setCards] = React.useState([]);

React.useEffect(() => {
  api.getUserInfo()
  .then((user) => {
    setUserInfo(user);
    
  })
}, []);

React.useEffect(() => {
  api.getCardList()
  .then((res) => {
    setCards(res);
    
  })
}, []);

  return (
  
    <main>
      <section className="profile">
        <div className="profile__avatar-container">
          <img src={userInfo.avatar} className="profile__avatar" alt="avatar" />
          <img
            src={pen}
            alt="button"
            className="profile__avatar-edit"
            onClick={props.handleEditAvatarClick}
          />
        </div>

        <div className="profile__info">
  <h1 className="profile__name">{userInfo.name}</h1>
          <button
            className="profile__edit-button"
            aria-label="open profile edit window"
            onClick={props.handleEditProfileClick}
          ></button>
          <p className="profile__subtitle">{userInfo.about}</p>
        </div>

        <button
          className="profile__add-button"
          aria-label="open add new image button"
          onClick={props.handleAddPlaceClick}
        ></button>
      </section>

      <section className="places">

      {cards.map((card, i) => (
            <Card
              key={i}
              card={card}
              handleCardClick={props.handleCardClick}
            />
          ))}
   

      </section>


    </main>
  );
}

export default Main;