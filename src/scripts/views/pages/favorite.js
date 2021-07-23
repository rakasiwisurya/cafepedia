import FavoriteCafeIdb from '../../data/favorite-cafe-idb';
import { createCafeItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <section class="content">
        <div class="latest">
          <h1 class="latest__label" tabindex="0">Your Liked Cafe(s)</h1>
          <div id="favCafeList" class="posts">
          
          </div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const title = document.querySelector('.latest__label');
    const cafesContainer = document.querySelector('#favCafeList');
    title.innerHTML = '<p>Loading</p>';

    try {
      const cafes = await FavoriteCafeIdb.getAllCafes();
      title.innerHTML = 'Favorite Cafes';

      cafes.forEach((cafe) => {
        cafesContainer.innerHTML += createCafeItemTemplate(cafe);
      });
    } catch (error) {
      title.innerHTML = '<p>Connection Error</p>';
    }
  },
};

export default Favorite;