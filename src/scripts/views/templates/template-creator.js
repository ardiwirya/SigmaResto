/* eslint-disable import/no-cycle */
import CONFIG from '../../global/config';
import DetailHelper from '../../utils/detail-helper';

const createRestaurantDetailTemplate = (restaurant) => `
<img class="restaurant-picture lazyload" crossorigin="anonymous" alt="${
  restaurant.name
}" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" tabindex="0" >
<div class="detailRestaurant">
    <div class="detailRestaurant-info">
        <div class="detailRestaurant-name">
            <h2><i class="fas fa-store"></i> Restaurant Name</h2>
            <p class="list-item__title">${restaurant.name}</p>
        </div>
        <div class="detailRestaurant-address">
            <h2><i class="far fa-compass"></i> Address</h2>
            <p>${restaurant.address}, ${restaurant.city}</p>
        </div>
        <div class="detailRestaurant-rate">
            <h2><i class="far fa-star"></i> Rating</h2>
            <p>${restaurant.rating}</p>
        </div>
    </div>
    <h2 class="restaurant-description-title">Description</h2>
    <p class="restaurant-description">${restaurant.description}</p>
</div>
<div class="restaurant-categories">
    ${restaurant.categories.map((category) => `<span class="restaurant-category-title">${category.name}</span>`).join('')}
</div>

<div class="detailRestaurant-menu">
    <h2>Menu</h2>

    <div class="restaurant-menu">
        <ul>
            <h3>Food</h3>
            ${restaurant.menus.foods.map((food) => `<li><p><i class="fa-solid fa-utensils"></i>  ${food.name}</p></li>`).join('')}
        </ul>

        <ul>
            <h3>Beverage</h3>
            ${restaurant.menus.drinks.map((drink) => `<li><p><i class="fas fa-cocktail"></i>  ${drink.name}</p></li>`).join('')}
        </ul>
    </div>
</div>
<h2 class="restaurant-review-title">Customers Review</h2>
${DetailHelper.eachCustomerReview(restaurant)}
`;

const createCustomerReviewTemplate = (customerReview) => `
<div class="detailRestaurant-review">
    <div class="restaurant-review" id="restaurant-review">
        <div class="review-header">
            <p class="review-name"><i class="far fa-user"></i>  ${customerReview.name}</p>
            <p class="review-date">${customerReview.date}</p>
        </div>
        <div class="review-comment">
            <p><i class="far fa-comment"></i>  ${customerReview.review}</p>
        </div>
    </div>
`;

const createRestaurantListTemplate = (restaurant) => `
    <article class="list-item">
    <a href="#/detail/${restaurant.id}">
          <div class="list-thumbnail">
              <img class="list-item__thumbnail lazyload" tabindex="0" class="card-image" crossorigin="anonymous" alt="${restaurant.name || '-'}" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}"/>
              <p class="list-item_rate"><i title="ratings" class="fa fa-star card-rating"></i>  ${restaurant.rating || '-'}</p>
          </div>
          <div class="list-item__content">
              <p class="list-city"> ${restaurant.city || '-'}</p>
              <h2 class="list-item__title">${restaurant.name || '-'}</h2>
              <p class="list-item__description">${restaurant.description || '-'}...</p>
          </div>
    </a>
    </article>
`;

const createCustomerReviewFormTemplate = () => `<form class="form-review" id="form-review">
<h2>Submit Your Review</h2>
<div class="form-group">
    <label for="inputName">Name:</label>
    <input id="inputName" type="text" class="form-control" placeholder="Your Name...">
</div>
<div class="form-group">
    <label for="inputReview">Review:</label>
    <input id="inputReview" type="text" class="form-control" placeholder="Your Review...">
</div>
<div class="form-group">
    <button id="submitReview" type="submit" class="submitReview">Submit</button>
</div>
</form>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
  <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
  <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantListTemplate,
  createCustomerReviewTemplate,
  createCustomerReviewFormTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
