import React from "react";

function PopupWithForm(props) {
  return (
    <div
      className={`popup popup__${props.name} ${
        props.isOpen ? "popup_open" : ""
      }`}
    >
      <div
        className={`popup__container ${
          props.containerName ? `${props.containerName}` : ""
        } `}
      >
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
