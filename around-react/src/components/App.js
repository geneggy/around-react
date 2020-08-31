/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

function App() {
  return (
    <>
      <div className="page__content">
        <Header />
        <Main />
        <Footer />
      </div>

      <div className="popup popup_edit">
        <div className="popup__container">
          <button
            className="popup__exit popup__exit_edit"
            aria-label="close"
          ></button>
          <h2 className="popup__title">Edit Profile</h2>

          <form className="popup__form popup__form_edit" novalidate>
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

      <div className="popup popup_new-place">
        <div className="popup__container">
          <button
            className="popup__exit popup__exit_new-place"
            aria-label="close"
          ></button>
          <h2 className="popup__title">New Place</h2>

          <form className="popup__form popup__form_add" novalidate>
            <input
              type="text"
              className="popup__form-title popup__input"
              id="title-input"
              placeholder="Title"
              name="name"
              value=""
              required
              minlength="1"
              maxlength="30"
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

            <button
              className="popup__button popup__button-image"
              aria-label="save"
              type="submit"
            >
              Create
            </button>
          </form>
        </div>
      </div>

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

      <div className="popup popup_avatar">
        <div className="popup__container popup__container_avatar">
          <button
            className="popup__exit popup__exit_avatar"
            aria-label="close"
          ></button>
          <h2 className="popup__title">Edit Profile Picture</h2>

          <form className="popup__form popup__form_avatar" novalidate>
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
            <button
              className="popup__button popup__button-avatar"
              aria-label="save"
              type="submit"
            >
              Save
            </button>
          </form>
        </div>
      </div>

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
