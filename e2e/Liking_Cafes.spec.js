const assert = require('assert');

Feature('Liking Movies');
 
Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Show empty liked cafe', ({ I }) => {
  I.amOnPage('/#/favorite');

  I.seeElement('.latest__label');

  I.see('You dont have any favorite cafe yet.', '.post-item__not__found');
});
 
Scenario('Like a cafe then unlike it', async ({ I }) => { 
  // Like test
  I.seeElement('.post-item__title a');
 
  const firstCafe = locate('.post-item__title a').first();
  const firstCafeTitle = await I.grabTextFrom(firstCafe);
  I.click(firstCafe);
  
  I.seeElement('#likeButton');
  I.click('#likeButton');
 
  I.amOnPage('/#/favorite');
  I.seeElement('.post-item');
  const likedCafeTitle = await I.grabTextFrom('.post-item__title');
 
  assert.strictEqual(firstCafeTitle, likedCafeTitle);

  // Unlike Test
  I.seeElement('.post-item__title a');
  I.click('.post-item__title a');

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.see('You dont have any favorite cafe yet.', '.post-item__not__found');
});