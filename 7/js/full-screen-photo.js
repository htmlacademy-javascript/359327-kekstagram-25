import {photosData} from './data.js';

const KEY_CODE_ESC = 27;
const sectionFullSizePictures = document.querySelector('.big-picture');
const showBigPhoto = sectionFullSizePictures.querySelector('.big-picture__img');
const bigPictureCancel = sectionFullSizePictures.querySelector('.big-picture__cancel');
const body = document.querySelector('body');
const socialComments = sectionFullSizePictures.querySelector('.social__comments');
const img = showBigPhoto.querySelector('img');
const likesCount = sectionFullSizePictures.querySelector('.likes-count');
const commentsCount = sectionFullSizePictures.querySelector('.comments-count');
const socialCaption = sectionFullSizePictures.querySelector('.social__caption');
const socialCommentCount = sectionFullSizePictures.querySelector('.social__comment-count');
const commentsLoader = sectionFullSizePictures.querySelector('.comments-loader');
const onButtonClose = () => {
  closeFullScreenPhoto();
};
const onKeyCodeEsc = (event) => {
  if (event.keyCode === KEY_CODE_ESC) {
    closeFullScreenPhoto();
  }
};

export const onSectionPicturesClick = (event) => {
  const photoId = event.target.closest('.picture').id ;
  const photoDataObj = photosData.find((photo) => +photo.id === +photoId);
  openFullScreenPhoto(photoDataObj);
};

function closeFullScreenPhoto() {
  sectionFullSizePictures.classList.add('hidden');
  body.classList.remove('modal-open');
  document.addEventListener('click', onSectionPicturesClick);
  bigPictureCancel.removeEventListener('click', onButtonClose);
  document.removeEventListener('keydown', onKeyCodeEsc);
}

function generateComments(smallPhoto) {
  const numberComments = smallPhoto.comments.length;
  let comments = '';
  for (let i = 0; i < numberComments; i++) {
    comments += `
    <li class="social__comment">
      <img
      class="social__picture"
      src="${smallPhoto.comments[i].avatar}"
      alt="${smallPhoto.comments[i].name}"
      width="35" height="35">
      <p class="social__text">${smallPhoto.comments[i].message}</p>
    </li>`;
  }
  return comments;
}

export function openFullScreenPhoto(smallPhoto) {
  sectionFullSizePictures.classList.remove('hidden');
  img.setAttribute('src', smallPhoto.url);
  likesCount.textContent = smallPhoto.likes;
  commentsCount.textContent = smallPhoto.comments.length;
  socialComments.innerHTML = generateComments(smallPhoto);
  socialCaption.textContent = smallPhoto.description;
  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  body.classList.add('modal-open');
  bigPictureCancel.addEventListener('click', onButtonClose);
  document.addEventListener('keydown', onKeyCodeEsc);
  document.removeEventListener('click',onSectionPicturesClick);
}

document.addEventListener('click', onSectionPicturesClick);

