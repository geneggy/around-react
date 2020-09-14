import React from 'react';

// likes: Array(4), _id: "5f5ac10f781030001f3325ae", name: "Hero of Time", link: "https://e7.pngegg.com/pngimages/784/572/png-clipar…nk-princess-zelda-warrior-nintendo-video-game.png", owner: {…}, …}
// createdAt: "2020-09-11T00:13:03.521Z"
// likes: (4) [{…}, {…}, {…}, {…}]
// link: "https://e7.pngegg.com/pngimages/784/572/png-clipart-the-legend-of-zelda-link-illustration-hyrule-warriors-universe-of-the-legend-of-zelda-link-princess-zelda-warrior-nintendo-video-game.png"
// name: "Hero of Time"
// owner: {name: "Brian Wilson", about: "Student, IT Pro", avatar: "https://image-cdn.neatoshop.com/styleimg/38081/none/black/default/279220-20.jpg", _id: "36047ba992bba2e549c84f7c", cohort: "group-3"}
// _id: "5f5ac10f781030001f3325ae"

function Card(props) {
  return (

    <div className="place" onClick = {() => {props.handleCardClick(props.card)}}>
      <button className="place__trash-button place__trash-button_hidden" aria-label="delete place"></button>
      <img className="place__image" alt="" src={props.card.link}/>
      <div className="place__text-container">
        <h2 className="place__title">{props.card.name}</h2>
        <div className = "place__like-container">
          <button className="place__like-button" aria-label="like place"></button>
          <p className="place__likes">{props.card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
