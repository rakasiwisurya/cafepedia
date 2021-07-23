import LikeButtonInitiator from './../src/scripts/utils/like-button-initiator';
import FavoriteCafeIdb from '../src/scripts/data/favorite-cafe-idb';

describe('Liking A Cafe', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };
 
  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the cafe has not been liked before', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      cafe: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="like this cafe"]'))
      .toBeTruthy();
  });

  it('should not show the unlike button when the cafe has not been liked before', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      cafe: {
        id: 1,
      },
    });
   
    expect(document.querySelector('[aria-label="unlike this cafe"]'))
      .toBeFalsy();
  });

  it('should be able to like the cafe', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      cafe: {
        id: 1,
      },
    });
    
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const cafe = await FavoriteCafeIdb.getCafe(1);
 
    expect(cafe).toEqual({ id: 1 });

    FavoriteCafeIdb.deleteCafe(1);
  });

  it('should not add a cafe again when its already liked', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      cafe: {
        id: 1,
      },
    });
   
    await FavoriteCafeIdb.putCafe({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteCafeIdb.getAllCafes()).toEqual([{ id: 1 }]);

    FavoriteCafeIdb.deleteCafe(1);
  });

  xit('should not add a cafe when it has no id', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      cafe: {},
    });
   
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
   
    expect(await FavoriteCafeIdb.getAllCafes()).toEqual([]);
  });
});