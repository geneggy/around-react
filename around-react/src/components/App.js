/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';

function App() {
  const [isEditAvatarOpen, setIsEditAvatarOpen] = React.useState(false);
  const [isEditProfileOpen, setIsEditProfileOpen] = React.useState(false);
  const [isAddPlaceOpen, setIsAddPlaceOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfileOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlaceOpen(true);
  }

  // props isOpen :will be true or false value.
  // props name :edit / new-place /  avatar / delete(confirmation)
  // props title : popup__title
  // props submitButtonText: buttontext

  // props onExit : close handler
  // props onSubmit: submit handler

  return (
    <>
      <div className="page__content">
        <Header />
        <Main
          handleAddPlaceClick={handleAddPlaceClick}
          handleEditAvatarClick={handleEditAvatarClick}
          handleEditProfileClick={handleEditProfileClick}
        />
        <Footer />
      </div>

      <PopupWithForm
        isOpen={isEditProfileOpen}
        name="edit"
        title="Edit Profile"
        submitButtonText="Save"
      >
        <input
          type="text"
          className="popup__form-name popup__input"
          id="name-input"
          value=""
          name="name"
          placeholder="name"
          required
          minLength="2"
          maxLength="40"
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
          minLength="2"
          maxLength="200"
        />
        <span className="popup__error" id="name-input-error">
          Test
        </span>
      </PopupWithForm>

      <PopupWithForm
       isOpen={isAddPlaceOpen}
       name="new-place"
       title="New Place"
       submitButtonText="Create"
      >
        <input
          type="text"
          className="popup__form-title popup__input"
          id="title-input"
          placeholder="Title"
          name="name"
          value=""
          required
          minLength="1"
          maxLength="30"
        />
        <span className="popup__error" id="title-input-error">
          Test
        </span>

        <input
          type="url"
          className="popup__form-link popup__input"
          id="link-input"
          placeholder="Image link"
          name="link"
          value=""
          required
        />
        <span className="popup__error" id="link-input-error">
          Test
        </span>
      </PopupWithForm>

      <div className="popup popup_img">
        <div className="popup__img-container">
          <button
            className="popup__exit popup__exit_img"
            aria-label="close"
          ></button>
          <img alt="" className="popup__image" />
          <p className="popup__subtext"></p>
        </div>
      </div>

      <div className="popup popup_delete">
        <div className="popup__container popup__container_delete">
          <button
            className="popup__exit popup__exit_delete"
            aria-label="close"
          ></button>
          <h2 className="popup__title">Are you sure?</h2>
          <button
            className="popup__button popup__button-delete"
            aria-label="save"
            type="submit"
          >
            Save
          </button>
        </div>
      </div>

      <PopupWithForm
       isOpen={isEditAvatarOpen}
       name="avatar"
       title="Edit Profile Picture"
       submitButtonText="Save"
      >
            <input
              type="url"
              className="popup__form-link popup__input"
              id="link-input"
              placeholder="Image link"
              name="avatar"
              value=""
              required
            />
            <span className="popup__error" id="link-input-error">
              Test
            </span>

    </PopupWithForm>
      <template id="placeTemplate">
        <div className="place">
          <button
            className="place__trash-button place__trash-button_hidden"
            aria-label="delete place"
          ></button>
          <img className="place__image" alt="" />
          <div className="place__text-container">
            <h2 className="place__title"></h2>
            <div className="place__like-container">
              <button
                className="place__like-button"
                aria-label="like place"
              ></button>
              <p className="place__likes">17</p>
            </div>
          </div>
        </div>
      </template>
    </>
  );
}

export default App;
