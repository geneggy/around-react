import React from "react";
import pen from "../images/pen.svg";
import Card from "./Card.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Main(props) {
  const userInfo = React.useContext(CurrentUserContext);
  return (
    <main>
      <section className="profile">
        <div className="profile__avatar-container">
          <img src={userInfo.avatar} className="profile__avatar" alt="avatar" />
          <img
            src={pen}
            alt="button"
            className="profile__avatar-edit"
            onClick={props.onEditAvatarClick}
          />
        </div>

        <div className="profile__info">
          <h1 className="profile__name">{userInfo.name}</h1>
          <button
            className="profile__edit-button"
            aria-label="open profile edit window"
            onClick={props.onEditProfileClick}
          ></button>
          <p className="profile__subtitle">{userInfo.about}</p>
        </div>

        <button
          className="profile__add-button"
          aria-label="open add new image button"
          onClick={props.onAddPlaceClick}
        ></button>
      </section>

      <section className="places">
        {props.cards.map((card, i) => (
          <Card
            key={i}
            card={card}
            onCardClick={props.onCardClick}
            onCardLike={props.onCardLike}
            onCardDelete={props.onCardDelete}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
