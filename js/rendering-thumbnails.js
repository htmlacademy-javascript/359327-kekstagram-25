import {getPhotosArr} from "./data.js";

const sectionPictures = document.querySelector('.pictures');
const templatePicture = document.querySelector('#picture').content.querySelector('a');


getPhotosArr(25).forEach((photo) => {
  const photoElement = templatePicture.cloneNode(true);
  photoElement.querySelector('img').setAttribute('src', photo.url);
  photoElement.querySelector('.picture__likes').textContent = photo.likes;
  photoElement.querySelector('.picture__comments').textContent = photo.comments[0].id;
  sectionPictures.appendChild(photoElement);
});
