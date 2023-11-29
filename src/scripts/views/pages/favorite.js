import FavoriteRestaurantDB from '../../data/favorite-restaurant-idb';
import FavoriteRestaurantSearchView from './liked-restaurant/favorite-restaurant-search-view';
import FavoriteRestaurantShowPresenter from './liked-restaurant/favorite-restaurant-show-presenter';
import FavoriteRestaurantSearchPresenter from './liked-restaurant/favorite-restaurant-search-presenter';

const view = new FavoriteRestaurantSearchView();

const Favorite = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteRestaurantSearchPresenter({ view, favoriteRestaurants: FavoriteRestaurantDB });
    new FavoriteRestaurantShowPresenter({ view, favoriteRestaurants: FavoriteRestaurantDB });
    const mainContainer = document.querySelector('#hero');
    mainContainer.style.display = 'none';
    const loaderContainer = document.querySelector('#loader-container');
    loaderContainer.style.display = 'none';
  },
};

export default Favorite;
