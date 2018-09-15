// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': (browser) => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.menu')
      .assert.containsText('h1', 'Phelipe Rocha')
      .end();
  },

  'Test sections from home page': (browser) => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#app', 5000)
      .assert.containsText('#aboutSection h1', 'ABOUT')
      .assert.containsText('#servicesSection h1', 'SERVICES')
      .assert.containsText('#projectsSection h1', 'PROJECTS')
      .assert.containsText('#blogSection h1', 'BLOG')
      .assert.containsText('#contactSection h1', 'CONTACT')
      .assert.containsText('#newsletterSection h1', 'NEWSLETTER')
      .end();
  },
};
