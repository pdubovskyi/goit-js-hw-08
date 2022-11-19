// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
console.log(galleryItems);
// ------------1----------------

const items = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
  })
  .join('');

const galleryEl = document.querySelector('.gallery');
galleryEl.insertAdjacentHTML('beforeend', items);

// ---------------2------------------
galleryEl.addEventListener('click', onGalleryClick);

function onGalleryClick(e) {
  e.preventDefault();
  if (!e.target.classList.contains('gallery__image')) {
    return;
  }
  console.log(e.target);
  const origImg = e.target.dataset.source;
  console.log(origImg);
  const instance = basicLightbox.create(`
    <img src="${origImg}">
`);
  instance.show();

  window.addEventListener('keydown', onEscapeClick);

  function onEscapeClick(e) {
    if (e.code === 'Escape') {
      console.log(e.code);
      instance.close();
      onCloseModal();
    }
  }

  function onCloseModal() {
    window.removeEventListener('keydown', onEscapeClick);
  }
}
