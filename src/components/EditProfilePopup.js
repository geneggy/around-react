import React from "react";
import PopupWithForm from "./PopupWithForm.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function EditProfilePopup(props) {
  const [name, setName] = React.useState();
  const [description, setDescription] = React.useState();
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleSubmit(e) {
    // Prevent the browser from navigating to the form address
    e.preventDefault();

    // Pass the values of the managed components to the external handler
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      onExit={props.onCloseAllPopups}
      isOpen={props.isEditProfileOpen}
      name="edit"
      title="Edit Profile"
      submitButtonText="Save"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="popup__form-name popup__input"
        id="name-input"
        name="name"
        placeholder="name"
        required
        minLength="2"
        maxLength="40"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <span className="popup__error" id="name-input-error">
        Test
      </span>

      <input
        type="text"
        className="popup__form-about popup__input"
        id="about-input"
        name="about"
        placeholder="about"
        required
        minLength="2"
        maxLength="200"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <span className="popup__error" id="name-input-error">
        Test
      </span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
