import { itActsAsFavoriteCafeModel } from './contract/favoriteCafeContract';
import FavoriteCafeIdb from '../src/scripts/data/favorite-cafe-idb';
 
describe('Favorite Cafe Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteCafeIdb.getAllCafes()).forEach(async (cafe) => {
      await FavoriteCafeIdb.deleteCafe(cafe.id);
    });
  });
 
  itActsAsFavoriteCafeModel(FavoriteCafeIdb);
});