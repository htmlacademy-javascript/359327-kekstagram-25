import {openFullScreenPhoto} from './full-screen-photo.js';

const sectionPictures = document.querySelector('.pictures');
const templatePicture = document.querySelector('#picture').content.querySelector('a');

function getPhotoElement(data){
  const photoElement = templatePicture.cloneNode(true);
  const img = photoElement.querySelector('img');
  const pictureLikes = photoElement.querySelector('.picture__likes');
  const pictureComments = photoElement.querySelector('.picture__comments');
  img.setAttribute('src', data.url);
  pictureLikes.textContent = data.likes;
  pictureComments.textContent = data.comments[0].id;
  return photoElement;
}

export function renderPhotos(photosArr){
  photosArr.forEach((photo) => {
    const filledPhoto = getPhotoElement(photo);
    sectionPictures.appendChild(filledPhoto).addEventListener('click', () => {
      openFullScreenPhoto(photo);
    });
  });
}

