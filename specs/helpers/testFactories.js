import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';
import FavoriteCafeIdb from '../../src/scripts/data/favorite-cafe-idb';

const createLikeButtonPresenterWithCafe = async (cafe) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteCafes: FavoriteCafeIdb,
    cafe,
  });
};
 
export { createLikeButtonPresenterWithCafe };