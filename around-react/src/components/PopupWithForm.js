import React from 'react';
// props isOpen :will be true or false value.  
// props name :edit / new-place /  avatar / delete(confirmation)
// props title : popup__title
// props submitButtonText: buttontext

// props onExit : close handler
// props onSubmit: submit handler 

// next step, export this to separate components with specific form fields and submit buttons or
// write a way to generate unique form fields and submit button for each unique popup... or
// write separate components for form fields and button?
// or pass input fields as children in main.js <---- probably easiest but seems kinda hacky



function PopupWithForm(props) {
  return (
    <div
      className={`popup popup__${props.name} ${props.isOpen ? 'popup_open' : ''}`}
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
        >
  
          {props.children}

          <button
            className={`popup__button popup__button-${props.name}`}
            aria-label="save"
            type="submit"
          >
            {props.submitButtonText}
          </button>

        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
