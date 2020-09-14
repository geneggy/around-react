import React from 'react';


function PopupImage(props) {
    return (
      <div className={`popup popup_img ${props.isOpen ? 'popup_open' : ''}`}>
        <div className="popup__img-container">
          <button
            className="popup__exit popup__exit_img"
            aria-label="close"
            onClick = {props.onExit}
          ></button>
          <img alt="" className="popup__image" />
          <p className="popup__subtext"></p>
        </div>
      </div>
    );

}

export default PopupImage;