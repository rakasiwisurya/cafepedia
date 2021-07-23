const assert = require('assert');

Feature('Liking Movies');
 
Before(({ I }) => {
  I.amOnPage('/');
});
 
Scenario('liking one cafe', async ({ I }) => { 
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
});