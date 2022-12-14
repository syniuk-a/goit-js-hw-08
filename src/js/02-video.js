// ! імпортуємо бібліотеки:
// відео програвач
import Player from "@vimeo/player";
// бібліотека затримки
import throttle from "lodash.throttle";

// знаходимо програвач по id. На сторінці мождиво декілька програвачів з однаковим класом для стилізації і тому може бути коллапс
const firstIframe = document.querySelector('#vimeo-player');
// створюємо копію програвача
const videoPlayer = new Player(firstIframe);

// отримуємо поточну позицію
const LOCALSTORAGE_KEY = localStorage.getItem('videoplayer-current-time');

// записуємо в локальні поточну позицію
const onPlay = videoPlayTime =>
  localStorage.setItem('videoplayer-current-time', videoPlayTime.seconds);
//  якщо поточна позиція після перезавантаження відмінна від "0", встановлюємо на плеєрі попередню позицію зупинки
LOCALSTORAGE_KEY ? videoPlayer.setCurrentTime(LOCALSTORAGE_KEY) : null;

// під час запуску перегляду викликаємо обробку та передаємо поточний час з інтервалом в одну секунду
videoPlayer.on('timeupdate', throttle(onPlay, 1000));

