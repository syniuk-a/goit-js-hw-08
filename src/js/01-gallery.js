// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

// описання в документації
import simpleLightbox from 'simplelightbox';
// додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallaryContainer = document.querySelector('.gallary');
// викликаємо функцію створення
const gallaryItemMarkup = createGallaryItemMurkup(galleryItems);
//створюємо функцію з макетом розмітки галереї
function createGallaryItemMurkup(galleryImages) {
  return galleryImages.map(({ original, preview, description }) => {
    return `<div class="gallery__item">
        <a href="${original}" class="gallery__link">
          <img src="${preview}" alt="${description}" class="gallery__image">
          </a>
          </div>`}).join('');
};
// додаємо властивості
const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 200,
  captionsData: 'alt',
});
// додаємо на сторінку
gallaryContainer.insertAdjacentHTML('beforeend', gallaryItemMarkup);