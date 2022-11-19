// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
console.log(galleryItems);

// -----------------1------------------
const items = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
 <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"/>
</a>
</div>`;
  })
  .join('');

const galleryEl = document.querySelector('.gallery');
galleryEl.insertAdjacentHTML('beforeend', items);

// ---------------------2-----------------

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: '250ms',
});
