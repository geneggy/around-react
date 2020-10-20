import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function AddPlacePopup(props) {
    const [title, setTitle] = React.useState();
    const [link, setLink] = React.useState();
    
    function handleAddPlaceSubmit(e) {
        e.preventDefault();
        props.onAddPlace({title, link})
    }

    return (
        <PopupWithForm
        isOpen={props.isOpen}
        onExit={props.onClose}
        onSubmit={handleAddPlaceSubmit}
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
           onChange={(e) => {setTitle(e.target.value)}}
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
           onChange={(e) => {setLink(e.target.value)}}
         />
         <span className="popup__error" id="link-input-error">
           Test
         </span>
       </PopupWithForm>

    )
}

export default AddPlacePopup;
