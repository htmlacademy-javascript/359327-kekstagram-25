import {photosData} from './data.js';

const keyCodeEsc = 27;
const sectionFullSizePictures = document.querySelector('.big-picture');
const showBigPhoto = sectionFullSizePictures.querySelector('.big-picture__img');
const bigPictureCancel = sectionFullSizePictures.querySelector('.big-picture__cancel');
const body = document.querySelector('body');

function closeFullScreenPhoto() {
  sectionFullSizePictures.classList.add('hidden');
  body.classList.remove('modal-open');
}

function generateComments(smallPhoto) {
  const numberComments = smallPhoto.comments.length;
  let comments = '';
  for (let i = 0; i < numberComments; i++) {
    comments += `<li class="social__comment">
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
  showBigPhoto.querySelector('img').setAttribute('src', smallPhoto.url);
  sectionFullSizePictures.querySelector('.likes-count').textContent = smallPhoto.likes;
  sectionFullSizePictures.querySelector('.comments-count').textContent = smallPhoto.comments.length;
  const socialComments = sectionFullSizePictures.querySelector('.social__comments');
  socialComments.innerHTML = generateComments(smallPhoto);
  sectionFullSizePictures.querySelector('.social__caption').textContent = smallPhoto.description;
  sectionFullSizePictures.querySelector('.social__comment-count').classList.add('hidden');
  sectionFullSizePictures.querySelector('.comments-loader').classList.add('hidden');
  body.classList.add('modal-open');
  const onButtonClose = () => {
    closeFullScreenPhoto();
  };
  bigPictureCancel.addEventListener('click', onButtonClose);
  const onKeyCodeEsc = (event) => {
    if (event.keyCode === keyCodeEsc) {
      closeFullScreenPhoto();
    }
  };
  document.addEventListener('keydown', onKeyCodeEsc);
}

const onSectionPicturesClick = (event) => {
  const photoId = event.target.closest('.picture').id;
  const photoDataObj = photosData.find((photo) => +photo.id === +photoId);
  openFullScreenPhoto(photoDataObj);
};
addEventListener('click', onSectionPicturesClick);
