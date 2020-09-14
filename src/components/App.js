/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import PopupImage from './PopupImage.js';

function App() {
  const [isEditAvatarOpen, setIsEditAvatarOpen] = React.useState(false);
  const [isEditProfileOpen, setIsEditProfileOpen] = React.useState(false);
  const [isAddPlaceOpen, setIsAddPlaceOpen] = React.useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = React.useState(false);
  const [isImageOpen, setIsImageOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfileOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlaceOpen(true);
  }

  function handleCloseAllPopups() {
    setIsEditAvatarOpen(false);
    setIsEditProfileOpen(false);
    setIsAddPlaceOpen(false);
    setIsDeleteOpen(false);
    setIsImageOpen(false);
    setSelectedCard({});
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImageOpen(true);
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
          handleCardClick={handleCardClick}
        />
        <Footer />
      </div>

      <PopupWithForm
        onExit={handleCloseAllPopups}
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
       onExit={handleCloseAllPopups}
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

      <PopupImage
        onExit = {handleCloseAllPopups}
        isOpen = {isImageOpen}
        selectedCard = {selectedCard}
      />
     
      <PopupWithForm
        onExit={handleCloseAllPopups}
        isOpen={isDeleteOpen}
        containerName="popup__container_delete"
        name="delete"
        title="Are You Sure?"
        submitButtonText="Yes"
      >
      </PopupWithForm>


      <PopupWithForm
       isOpen={isEditAvatarOpen}
       onExit={handleCloseAllPopups}
       name="avatar"
       containerName="popup__container_avatar"
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

    </>
  );
}

export default App;
