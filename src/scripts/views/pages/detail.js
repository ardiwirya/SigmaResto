import FavoriteRestaurantDB from '../../data/favorite-restaurant-idb';
import RestaurantDbSource from '../../data/restaurantdb-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-presenter';
import ReviewInitiator from '../../utils/review-initiator';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const detail = {
  async render() {
    return `
      <div class="loader-container" id="loader-container">
        <div id="loader"></div>
      </div> 
      <section class="content" id="content" tabindex="0">
        <div class="card">
          <h1 class="card__label">Restaurant Detail</h1>
          <div class="detail" id="detail"></div>
          <div id="likeButtonContainer"></div>
          <div id="customerReviewFormContainer"></div>
        </div>
      </section>  
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { restaurant } = await RestaurantDbSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#detail');
    const mainContainer = document.querySelector('#hero');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
    mainContainer.style.display = 'none';

    const loaderContainer = document.querySelector('#loader-container');
    loaderContainer.style.display = 'none';

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurant: FavoriteRestaurantDB,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        rating: restaurant.rating,
      },
    });

    ReviewInitiator.init({
      customerReviewContainer: document.querySelector('.detailRestaurant-review'),
      customerReviewFormContainer: document.querySelector('#customerReviewFormContainer'),
    });
  },
};

export default detail;
