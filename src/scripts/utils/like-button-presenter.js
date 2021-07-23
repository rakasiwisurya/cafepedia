import { createLikeCafeButtonTemplate, createUnlikeButtonTemplate } from '../views/templates/template-creator';

const LikeButtonPresenter = {
  async init({ likeButtonContainer, favoriteCafes, cafe }) {
    this._likeButtonContainer = likeButtonContainer;
    this._cafe = cafe;
    this._favoriteCafes = favoriteCafes;

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
    const cafe = await this._favoriteCafes.getCafe(id);
    return !!cafe;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeCafeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteCafes.putCafe(this._cafe);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createUnlikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteCafes.deleteCafe(this._cafe.id);
      this._renderButton();
    });
  },
};

export default LikeButtonPresenter;