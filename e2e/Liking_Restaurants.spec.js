const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#query');
  I.see('No Favorite Restaurant:)', '.restaurant-item__not__found');
});

Scenario('liking one restaurant', async ({ I }) => {
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
});

Scenario('searching restaurants', async ({ I }) => {
  I.see('No Favorite Restaurant:)', '.restaurant-item__not__found');
  I.amOnPage('/');
  I.waitForElement('.list-item__content', 10);
  I.seeElement('.list-item__content');
  const titles = [];

  for (let i = 1; i <= 3; i++) {
    I.click(locate('.list-item__content').at(i));
    I.waitForElement('#likeButton', 10);
    I.click('#likeButton');
    titles.push(await I.grabTextFrom('.list-item__title'));
    I.amOnPage('/');
  }

  I.amOnPage('/#/favorite');
  I.seeElement('#query');

  const searchQuery = titles[1].substring(1, 3);
  const matchingRestaurants = titles.filter((title) => title.indexOf(searchQuery) !== -1);

  I.fillField('#query', searchQuery);
  I.pressKey('Enter');

  const visibleLikedRestaurants = await I.grabNumberOfVisibleElements('.list-item__content');
  assert.strictEqual(matchingRestaurants.length, visibleLikedRestaurants);

  matchingRestaurants.forEach(async (title, index) => {
    const visibleTitle = await I.grabTextFrom(locate('.list-item__title').at(index + 1));
    assert.strictEqual(title, visibleTitle);
  });
});
