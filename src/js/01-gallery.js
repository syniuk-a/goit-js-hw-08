// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

// знаходимо галерею
const galleryList = document.querySelector('.gallery');
// викликаємо 
const createGallaryItemMurkup = galleryItems
  .map(({ original, preview, description }) => `
  <div class="gallery__item">
  <a href="${original}" class="gallery__link">
  <img src="${preview}" alt="${description}" class="gallery__image">
  </a>
  </div>`,
)
.join('');

// додаємо на сторінку
galleryList.innerHTML = createGallaryItemMurkup;

// додаємо властивості
const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 200,
  captionsData: 'alt',
});

document.addEventListener('click', lightbox);