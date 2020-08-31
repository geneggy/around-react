import React from 'react';
import avatar from '../images/Avatar.png';
import pen from '../images/pen.svg';




function Main() {
  function handleEditAvatarClick(e) {
    e.preventDefault();
    document.querySelector('.popup_avatar').classList.add('popup_open');
  }

  function handleEditProfileClick(e) {
    e.preventDefault();
    document.querySelector('.popup_edit').classList.add('popup_open')
  }

  function handleAddPlaceClick(e) {
    e.preventDefault();
    document.querySelector('.popup_new-place').classList.add('popup_open')
  }


  return (
    <main>
      <section className="profile">
        <div className="profile__avatar-container">
          <img src={avatar} className="profile__avatar" alt="avatar" />
          <img src={pen} alt="button" className="profile__avatar-edit" onClick={handleEditAvatarClick}/>
        </div>

        <div className="profile__info">
          <h1 className="profile__name">Jacques Cousteau</h1>
          <button
            className="profile__edit-button"
            aria-label="open profile edit window"
            onClick={handleEditProfileClick}
          ></button>
          <p className="profile__subtitle">Explorer</p>
        </div>

        <button
          className="profile__add-button"
          aria-label="open add new image button"
          onClick={handleAddPlaceClick}
        ></button>
      </section>

      <section className="places"></section>
    </main>
  );
}

export default Main;
