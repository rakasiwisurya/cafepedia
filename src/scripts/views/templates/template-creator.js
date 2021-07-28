import CONFIG from '../../globals/config';

const createCafeDetailTemplate = (cafe) => {
  let cafeCategories = '';
  let cafeFoods = '';
  let cafeDrinks = '';
  let cafeReviews = '';

  cafe.categories.forEach((category) => {
    cafeCategories += category.name;
  });

  cafe.menus.foods.forEach((food) => {
    cafeFoods += food.name;
  });

  cafe.menus.drinks.forEach((drink) => {
    cafeDrinks += drink.name;
  });

  cafe.customerReviews.forEach((review) => {
    cafeReviews += `
    <div class="post-item">
      <div tabindex="0" class="post-item__content">
        <div>
          <h3 tabindex="0"> ${review.name}</h3>
          <h6 tabindex="0"> ${review.date}</h6>
          <p tabindex="0">${review.review}</p>
        </div>
      </div>
    </div>`;
  });

  return `
  <div class="single__img">
    <img tabindex="0" class="lazyload" height="200" width="100%" data-src="${CONFIG.IMG_MED + cafe.pictureId}" alt="${cafe.name}" crossorigin="anonymous">
    <div class="like"></div>
    <div class="post-item__location">
      <span>
        <i class="fa fa-star"></i>
      </span>
      <h2 tabindex="0">${cafe.rating}</h2>
    </div>
  </div>
  <div class="single__content">
    <article tabindex="0" class="post-item">
        <div class="post-item__content">
            <p class="post-item__description">

              <span class="post-item__detail-title">
                <i class="fa fa-spoon"></i>
                <i class="fa fa-spoon fa-mr-5"></i>
              </span>
              <span tabindex="0"><b> ${cafeCategories} </b></span>

              <br><br>

              <span class="post-item__detail-title">
                <i class="fa fa-map-marker fa-mr-5"></i>
              </span>
              <span tabindex="0"><b> ${cafe.address}, ${cafe.city} </b></span>

              <br><br>
                
              <span>
                <span class="post-item__detail-title">
                  <i class="fa fa-sticky-note fa-mr-5"></i>
                </span>
                <span>
                  <b tabindex="0">Description : </b>
                </span>
                <br>
                <br>
                <span tabindex="0"> ${cafe.description} </span>
              </span>
            </p>
        </div>
    </article>
    <div class="single__menu">
        <article class="post-item">
            <div class="post-item__content">
                <div class="post-item__content-title">
                    <h2 tabindex="0">Foods</h2>
                </div>
                <p tabindex="0" class="post-item__description">
                    ${cafeFoods}
                </p>
            </div>
        </article>
        <article class="post-item">
            <div class="post-item__content">
                <div class="post-item__content-title">
                    <h2 tabindex="0">Drinks</h2>
                </div>
                <p tabindex="0" class="post-item__description">
                    ${cafeDrinks}
                </p>
            </div>
        </article>
    </div>
  </div>
  <div class="single__review">
    <div class="single__content-title">
      <h2 tabindex="0">Feedback</h2>
    </div>
    <div class="single__user-review">
        ${cafeReviews}
    </div>
  </div>
  `;
};

const createCafeItemTemplate = (cafe) => `
    <article class="post-item" tabindex="0">
        <div class="post-item__card">
            <img tabindex="0" class="post-item__thumbnail lazyload" height="225" width="100%" data-src="${CONFIG.IMG_SMALL + cafe.pictureId}" alt="${cafe.name}" crossorigin="anonymous">
            <div class="post-item__location">
              <span>
                <i class="fa fa-map-marker fa-map-marker-1"></i>
              </span>
              <h2>${cafe.city}</h2>
            </div>
        </div>
        <div class="post-item__content">
            <div class="post-item__title-rating">
                <h3 class="post-item__title">
                  <a href="${`/#/detail/${cafe.id}`}"> ${cafe.name} </a>
                </h3>
                <p class="post-item__rating">
                  <span>
                    <i class="fa fa-star"></i>
                  </span>
                  ${cafe.rating}
                </p>
            </div>
            <p tabindex="0" class="post-item__description">${cafe.description.substr(0, 200)}..</p>
        </div>
    </article>
  `;

const createLikeCafeButtonTemplate = () => `
  <button aria-label="like this cafe" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeButtonTemplate = () => `
  <button aria-label="unlike this cafe" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createCafeDetailTemplate,
  createCafeItemTemplate,
  createLikeCafeButtonTemplate,
  createUnlikeButtonTemplate,
};
