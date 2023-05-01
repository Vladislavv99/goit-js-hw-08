import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const key = 'videoplayer-current-time';

const player = new Player(iframe);
let currentTime = JSON.parse(localStorage.getItem(key));

if (currentTime) {
  player.setCurrentTime(currentTime);
}

player.on('play', () => console.log('Player has been started'));
player.on(
  'timeupdate',
  throttle(data => {
    localStorage.setItem(key, JSON.stringify(data.seconds));
  }, 1000)
);
