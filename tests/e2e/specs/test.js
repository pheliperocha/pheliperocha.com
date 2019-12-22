// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'Test sections from home page': (browser) => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#app', 5000)
      .assert.containsText('#header', 'Header')
      .assert.containsText('#footer', 'Footer')
      .end();
  },
};
