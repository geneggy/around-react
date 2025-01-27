/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

// Token: 84e6855b-5fd3-47bd-8833-73dfffbf3da7
// Group ID: group-3
//https://around.nomoreparties.co/v1/group-3
//token goes inside headers

class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._removeCard = this.removeCard.bind(this);
  }

  //https://around.nomoreparties.co/v1/groupId/cards
  getCardList() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    })
      .then((res) =>
        res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
      )
  }

  // get user info
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    })
      .then((res) =>
        res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
      )
  }

  //PATCH https://around.nomoreparties.co/v1/groupId/users/me
  setUserInfo(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify(data),
    })
      .then((res) =>
        res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
      )
  }

  getAppInfo() {}

  //POST https://around.nomoreparties.co/v1/groupId/cards
  addCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify({name: data.title, link: data.link}),
    })
      .then((res) =>
        res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
      )
  }

  //DELETE https://around.nomoreparties.co/v1/groupId/cards/cardId
  //DELETE https://around.nomoreparties.co/v1/groupId/cards/5d1f0611d321eb4bdcd707dd
  removeCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      headers: this._headers,
      method: "DELETE",
    })
      .then((res) =>
        res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
      )
  }

  //PUT https://around.nomoreparties.co/v1/groupId/cards/likes/cardId
  //DELETE https://around.nomoreparties.co/v1/groupId/cards/likes/cardId
  changeLikeCardStatus(cardId, cardIsLiked) {
    return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
      headers: this._headers,
      method: cardIsLiked ? "PUT" : "DELETE",
    })
      .then((res) =>
        res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
      )
  }

  //PATCH https://around.nomoreparties.co/v1/groupId/users/me/avatar
  setUserAvatar(link) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify(link),
    })
      .then((res) =>
        res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
      )
  }
}

const api = new Api({
  baseUrl: 'https://around.nomoreparties.co/v1/group-3',
  headers: {
    authorization: ' 84e6855b-5fd3-47bd-8833-73dfffbf3da7',
    'Content-Type': 'application/json',
  },
});

export default api;