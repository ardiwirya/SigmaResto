import { createRestaurantListTemplate } from '../../templates/template-creator';

class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
      <div class="loader-container" id="loader-container">
      <div id="loader"></div>
    </div> 
      <div class="content">
        <h2 class="content__heading">Your Favorite Restaurant</h2>
        <div class="search">
        <input id="query" type="text" placeholder="Search Favorite Restaurant...">
        </div>
          <div id="lists" class="lists">
        </div>
    </div>
      `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showRestaurants(restaurants) {
    this._showFavoriteRestaurants(restaurants);
  }

  showFavoriteRestaurants(restaurants = []) {
    let html;

    if (restaurants.length) {
      html = restaurants.reduce((carry, restaurant) => carry.concat(createRestaurantListTemplate(restaurant)), '');
    } else {
      html = this._getEmptyRestaurantTemplate();
    }

    document.getElementById('lists').innerHTML = html;

    document.getElementById('lists').dispatchEvent(new Event('lists:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return '<div class="restaurant-item__not__found">No Favorite Restaurant:)</div>';
  }
}

export default FavoriteRestaurantSearchView;
