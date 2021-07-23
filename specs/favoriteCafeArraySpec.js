import { itActsAsFavoriteCafeModel } from './contract/favoriteCafeContract';
 
let favoriteCafes = [];
 
const FavoriteCafeArray = {
 
  getCafe(id) {
    if (!id) {
      return;
    }
 
    return favoriteCafes.find((cafe) => cafe.id == id);
  },
 
  getAllCafes() {
    return favoriteCafes;
  },
 
  putCafe(cafe) {
    if (!cafe.hasOwnProperty('id')) {
      return;
    }
 
    if (this.getCafe(cafe.id)) {
      return;
    }
 
    favoriteCafes.push(cafe);
  },
 
  deleteCafe(id) {
    favoriteCafes = favoriteCafes.filter((cafe) => cafe.id != id);
  },
};
 
describe('Favorite Cafe Array Contract Test Implementation', () => {
  afterEach(() => favoriteCafes = []);
 
  itActsAsFavoriteCafeModel(FavoriteCafeArray);
});