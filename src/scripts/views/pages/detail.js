import UrlParser from '../../routes/url-parser';
import TheCafeDbSource from '../../data/thecafedb-source';
import { createCafeDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteCafeIdb from '../../data/favorite-cafe-idb';

const Detail = {
  async render() {
    return `
      <section class="content">
          <div class="latest">
              <h1 class="latest__label" tabindex="0"></h1>
              <div id="cafeSingle" class="single"></div>
              <div id="likeButtonContainer"></div>
          </div>
      </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const singleContainer = document.querySelector('#cafeSingle');
    const cafeName = document.querySelector('.latest__label');
    cafeName.innerHTML = '<p>Loading</p>';

    try {
      const cafe = await TheCafeDbSource.Detail(url.id);
      if (cafe !== null) {
        singleContainer.innerHTML = createCafeDetailTemplate(cafe);
        cafeName.innerHTML = cafe.name;
      } else {
        cafeName.innerHTML = '<p>Not Found</p>';
      }

      await LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteCafes: FavoriteCafeIdb,
        cafe,
      });
    } catch (error) {
      cafeName.innerHTML = '<p>Connection Error</p>';
    }
  },
};

export default Detail;