/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import PopupImage from './PopupImage.js';
import api from '../utils/Api.js';
import {CurrentUserContext} from '../contexts/CurrentUserContext.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';

function App() {
  const [isEditAvatarOpen, setIsEditAvatarOpen] = React.useState(false);
  const [isEditProfileOpen, setIsEditProfileOpen] = React.useState(false);
  const [isAddPlaceOpen, setIsAddPlaceOpen] = React.useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = React.useState(false);
  const [isImageOpen, setIsImageOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);



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

  function handleCardLike(card) {
    // Check one more time if this card was already liked
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    // Send a request to the API and getting the updated card data
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
        // Create a new array based on the existing one and putting a new card into it
      const newCards = cards.map((c) => c._id === card._id ? newCard : c);
      // Update the state
      setCards(newCards);
    }).catch((err) => {
      console.log(err);
    });
} 

  function handleCardDelete(card) {
    api.removeCard(card._id).then(() => {
      const newCards = cards.filter(c => c._id !== card._id);
      setCards(newCards);

    }).catch((err) => {
      console.log(err);
    })
  }

  function handleUpdateUser({name, about}) {
    api.setUserInfo({name, about}).then((res) => {
      setCurrentUser(res);
      handleCloseAllPopups();
    }).catch((err) => {
      console.log(err);
    })
  }

  function handleUpdateAvatar(link) {
    api.setUserAvatar(link).then((res) => {
      setCurrentUser(res);
      handleCloseAllPopups();
    }).catch((err) => {
      console.log(err);
    })
  }

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((userProfile) => {
        setCurrentUser(userProfile);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  React.useEffect(() => {
    api.getCardList().then((res) => {
      setCards(res);
    })
    .catch((err) => console.log(err));;
  }, []);


  return (
    <CurrentUserContext.Provider value={currentUser}>
    <>
      <div className="page__content">
        <Header />
        <Main
          cards={cards}
          handleAddPlaceClick={handleAddPlaceClick}
          handleEditAvatarClick={handleEditAvatarClick}
          handleEditProfileClick={handleEditProfileClick}
          handleCardClick={handleCardClick}
          handleCardLike={handleCardLike}
          handleCardDelete={handleCardDelete}
        />
        <Footer />
      </div>

      <EditProfilePopup
        handleCloseAllPopups={handleCloseAllPopups}
        isEditProfileOpen={isEditProfileOpen}
        onUpdateUser={handleUpdateUser}
      >
      </EditProfilePopup>

      <EditAvatarPopup 
        isOpen={isEditAvatarOpen}
        onClose={handleCloseAllPopups}
        onUpdateAvatar={handleUpdateAvatar}>

      </EditAvatarPopup>


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



    </>
    </CurrentUserContext.Provider>
  );
}

export default App;
