const assert = require('assert');

Feature('Unliking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#query');
  I.see('No Favorite Restaurant:)', '.restaurant-item__not__found');
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see('No Favorite Restaurant:)', '.restaurant-item__not__found');
  I.amOnPage('/');
  I.waitForElement('.list-item__content', 10);
  I.seeElement('.list-item__content');

  const firstRestaurant = locate('.list-item__content').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  I.waitForElement('#likeButton', 10);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.seeElement('.list-item__content');

  const likedRestaurantTitle = await I.grabTextFrom('.list-item__content');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  I.click(firstRestaurant);
  I.waitForElement('#likeButton', 10);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.see('No Favorite Restaurant:)', '.restaurant-item__not__found');
});
