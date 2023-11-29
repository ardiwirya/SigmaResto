const assert = require('assert');

Feature('Review Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('post a restaurant review', async ({ I }) => {
  const reviewText = ' E2E Post Review text';
  I.amOnPage('/');
  I.waitForElement('.list-item__content', 10);
  I.seeElement('.list-item__content');
  I.click(locate('.list-item__content').first());
  I.waitForElement('#form-review', 10);
  I.seeElement('#form-review');
  I.fillField('#inputName', 'E2E Test Review');
  I.fillField('#inputReview', reviewText);
  I.click('#submitReview');
  I.waitForElement('.restaurant-review', 10);

  const lastReview = locate('.restaurant-review p').last();
  const lastReviewText = await I.grabTextFrom(lastReview);
  assert.strictEqual(reviewText, lastReviewText);
});
