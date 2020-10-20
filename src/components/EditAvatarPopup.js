import React from "react";
import PopupWithForm from "./PopupWithForm.js";

function EditAvatarPopup(props) {
  const [avatarUrl, setAvatarUrl] = React.useState();

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: avatarUrl,
    });
  }

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onExit={props.onClose}
      name="avatar"
      containerName="popup__container_avatar"
      title="Edit Profile Picture"
      submitButtonText="Save"
      onSubmit={handleSubmit}
    >
      <input
        type="url"
        className="popup__form-link popup__input"
        id="link-input"
        placeholder="Image link"
        name="avatar"
        required
        onChange={(e) => {
          setAvatarUrl(e.target.value);
        }}
      />
      <span className="popup__error" id="link-input-error">
        Test
      </span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
