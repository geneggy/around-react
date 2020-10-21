import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
// likes: Array(4), _id: "5f5ac10f781030001f3325ae", name: "Hero of Time", link: "https://e7.pngegg.com/pngimages/784/572/png-clipar…nk-princess-zelda-warrior-nintendo-video-game.png", owner: {…}, …}
// createdAt: "2020-09-11T00:13:03.521Z"
// likes: (4) [{…}, {…}, {…}, {…}]
// link: "https://e7.pngegg.com/pngimages/784/572/png-clipart-the-legend-of-zelda-link-illustration-hyrule-warriors-universe-of-the-legend-of-zelda-link-princess-zelda-warrior-nintendo-video-game.png"
// name: "Hero of Time"
// owner: {name: "Brian Wilson", about: "Student, IT Pro", avatar: "https://image-cdn.neatoshop.com/styleimg/38081/none/black/default/279220-20.jpg", _id: "36047ba992bba2e549c84f7c", cohort: "group-3"}
// _id: "5f5ac10f781030001f3325ae"

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);
  // Checking if you are the owner of the current card
  const isOwn = props.card.owner._id === currentUser._id;
  // Creating a variable which you'll then set in `className` for the delete button
  const cardDeleteButtonClassName = `place__trash-button ${
    isOwn ? "" : "place__trash-button_hidden"
  }`;

  // Check if the card was liked by the current user
  const isLiked = props.card.likes.some((i) => i._id === currentUser._id);

  // Create a variable which you then set in `className` for the like button
  const cardLikeButtonClassName = `place__like-button ${
    isLiked ? "place__like-button_liked" : ""
  }`;

  return (
    <div className="place">
      <button
        className={cardDeleteButtonClassName}
        aria-label="delete place"
        onClick={() => {
          props.onCardDelete(props.card);
        }}
      ></button>
      <img
        className="place__image"
        alt=""
        src={props.card.link}
        onClick={() => {
          props.onCardClick(props.card);
        }}
      />
      <div className="place__text-container">
        <h2 className="place__title">{props.card.name}</h2>
        <div className="place__like-container">
          <button
            className={cardLikeButtonClassName}
            aria-label="like place"
            onClick={() => {
              props.onCardLike(props.card);
            }}
          ></button>
          <p className="place__likes">{props.card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
