import FavoriteCafeIdb from '../data/favorite-cafe-idb';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, cafe }) {
    this._likeButtonContainer = likeButtonContainer;
    this._cafe = cafe;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._cafe;

    if (await this._isCafeExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isCafeExist(id) {
    const cafe = await FavoriteCafeIdb.getCafe(id);
    return !!cafe;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteCafeIdb.putCafe(this._cafe);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteCafeIdb.deleteCafe(this._cafe.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;