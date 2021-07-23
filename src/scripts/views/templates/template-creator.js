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
    <img tabindex="0" src="${CONFIG.IMG_MED + cafe.pictureId}" alt="${cafe.name}" crossorigin="anonymous">
    <div class="like"></div>
  </div>
  <div class="single__content">
    <article tabindex="0" class="post-item">
        <div class="post-item__content">
            <p class="post-item__description">
                <b tabindex="0">Categories : </b>
                <br>
                <span tabindex="0"> ${cafeCategories} </span>
                <br><br>
                <b tabindex="0">Rating : </b>
                <br>
                <span tabindex="0"> ${cafe.rating} </span>
                <br><br>
                <b tabindex="0">Address : </b>
                <br>
                <span tabindex="0"> ${cafe.address}, ${cafe.city} </span>
                <br><br>
                <b tabindex="0">Description : </b>
                <br>
                <span tabindex="0"> ${cafe.description} </span>
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
            <img tabindex="0" class="post-item__thumbnail" src="${CONFIG.IMG_SMALL + cafe.pictureId}" alt="${cafe.name}" crossorigin="anonymous">
            <div class="post-item__location">
                <h2>${cafe.city}</h2>
            </div>
        </div>
        <div class="post-item__content">
            <div class="post-item__title-rating">
                <h3 class="post-item__title">
                  <a href="${`/#/detail/${cafe.id}`}"> ${cafe.name} </a>
                </h3>
                <p class="post-item__rating">⭐️<span> ${cafe.rating} </span></p>
            </div>
            <p tabindex="0" class="post-item__description">${cafe.description.substr(0, 200)}..</p>
        </div>
    </article>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this cafe" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this cafe" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createCafeDetailTemplate,
  createCafeItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
