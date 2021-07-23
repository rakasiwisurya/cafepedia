import TheCafeDbSource from '../../data/thecafedb-source';
import { createCafeItemTemplate } from '../templates/template-creator';

const CafeCatalogue = {
  async render() {
    return `
      <section class="content">
        <div class="latest">
          <h1 class="latest__label" tabindex="0">All Cafes List</h1>
          <div id="cafeList" class="posts">
          
          </div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const cafes = await TheCafeDbSource.Home();
    const cafesContainer = document.querySelector('#cafeList');
    cafes.forEach((cafe) => {
      cafesContainer.innerHTML += createCafeItemTemplate(cafe);
    });
  },
};

export default CafeCatalogue;