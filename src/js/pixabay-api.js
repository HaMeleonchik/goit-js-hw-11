// axios
import axios from 'axios';
import {
  iziToastFoo,
  clearGallery,
  createGallery,
  hideLoader,
} from '/js/render-functions';

export function getImagesByQuery(query) {
  axios('https://pixabay.com/api/', {
    params: {
      key: '29412071-9345ed042e2c0766a655100be',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  })
    .then(response => {
      if (response.data.hits.length === 0) {
        iziToastFoo();
        clearGallery();
      } else {
        createGallery(response.data.hits);
      }
    })

    .catch(error => console.log(error))
    .finally(() => {
      hideLoader();
    });
}
