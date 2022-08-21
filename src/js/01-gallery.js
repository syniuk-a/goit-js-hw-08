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
// викликаємо функцію створення
const gallaryItemMarkup = createGallaryItemMurkup(galleryItems);

//створюємо функцію з макетом розмітки галереї
function createGallaryItemMurkup(galleryItems) {
  return galleryItems.map(({ original, preview, description }) => {    
    return `<div class="gallery__item">
        <a href="${original}" class="gallery__link">
          <img src="${preview}" alt="${description}" class="gallery__image">
          </a>
          </div>`}).join('');
};
// додаємо властивості
const lightbox = new SimpleLightbox('.gallery', {
  captionDelay: 200,
  captionsData: 'alt',
});

// додаємо на сторінку
galleryList.insertAdjacentHTML('beforeend', gallaryItemMarkup);