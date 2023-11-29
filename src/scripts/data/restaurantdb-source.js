import API_ENDPOINT from '../global/api-endpoint';

class RestaurantDbSource {
  static async restaurantList() {
    const response = await fetch(API_ENDPOINT.RESTAURANT_LIST);
    const responseJson = await response.json();
    return responseJson;
  }

  static async detailRestaurant(id) {
    // eslint-disable-next-line no-undef
    const response = await fetch(API_ENDPOINT.DETAIL_RESTAURANT(id));
    return response.json();
  }

  static async postRestaurantReview(data) {
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      };
      const responseText = await fetch(API_ENDPOINT.POST_REVIEW, options);
      return responseText.json();
    } catch (error) {
      return {
        error: true,
        message: `${error.message}! Review not successfully added!\nPlease check your internet connection!`,
      };
    }
  }
}

export default RestaurantDbSource;
