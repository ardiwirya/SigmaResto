import FavoriteRestaurantSearchView from '../src/scripts/views/pages/liked-restaurant/favorite-restaurant-search-view';
import FavoriteRestaurantShowPresenter from '../src/scripts/views/pages/liked-restaurant/favorite-restaurant-show-presenter';
import FavoriteRestaurantDB from '../src/scripts/data/favorite-restaurant-idb';

describe('Showing all favorite restaurants', () => {
  let view;

  const renderTemplate = () => {
    view = new FavoriteRestaurantSearchView();
    document.body.innerHTML = view.getTemplate();
  };

  beforeEach(() => {
    renderTemplate();
  });

  describe('When no favorite restaurants', () => {
    it('should render the information that there is no favorite restaurant', () => {
      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantDB);
      const presenter = new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });

      const restaurants = [];
      presenter._displayRestaurants(restaurants);

      expect(document.querySelectorAll('.restaurant-item__not__found').length).toEqual(1);
    });

    it('should ask for the favorite restaurants', () => {
      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantDB);
      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });

      expect(favoriteRestaurants.getAllRestaurants).toHaveBeenCalledTimes(1);
    });
  });

  describe('When favorite restaurants exist', () => {
    it('should show the restaurants', (done) => {
      document.getElementById('lists').addEventListener('lists:updated', () => {
        expect(document.querySelectorAll('.lists').length).toEqual(1);
        done();
      });

      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantDB, false);
      favoriteRestaurants.getAllRestaurants.and.returnValues([
        {
          id: 11,
          name: 'A',
          description: 'Sebuah Restoran A',
          pictureId: '11',
          city: 'Medan',
          rating: 4.2,
        },
        {
          id: 22,
          name: 'B',
          description: 'Sebuah Restoran B',
          pictureId: '22',
          city: 'Jakarta',
          rating: 4.8,
        },
      ]);

      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });
    });
  });
});
