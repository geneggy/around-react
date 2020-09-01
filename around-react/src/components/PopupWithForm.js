import React from 'react';

// props name :edit
// props title : popup__title
// props onExit : onClick closing popup
// props onSubmit: onSubmit submit
// next step, export this to separate components with specific form fields or
// write a way to generate unique form fields for each specific popup.  


function PopupWithForm(props) {
  return (
    <div
      className={`form popup__${props.name} ${
        props.isOpen ? 'popup_open' : ''
      }`}
    >
      <div className="popup__container">
        <button
          className="popup__exit"
          aria-label="close"
          onClick={props.onExit}
        ></button>
        <h2 className="popup__title">{props.title}</h2>

        <form
          className={`popup__form popup__form_${props.name}`}
          onSubmit={props.onSubmit}
          novalidate
        >
          <input
            type="text"
            className="popup__form-name popup__input"
            id="name-input"
            value=""
            name="name"
            placeholder="name"
            required
            minlength="2"
            maxlength="40"
          />
          <span className="popup__error" id="name-input-error">
            Test
          </span>

          <input
            type="text"
            className="popup__form-about popup__input"
            id="about-input"
            value=""
            name="about"
            placeholder="about"
            required
            minlength="2"
            maxlength="200"
          />
          <span className="popup__error" id="about-input-error">
            Test
          </span>

          <button
            className="popup__button popup__button-edit"
            aria-label="save"
            type="submit"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
