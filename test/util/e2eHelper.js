

module.exports = {
  login: (user) => {
    try {
      console.log("=== login ===");
      browser.windowHandleSize({width:1280,height:900}).url('/');
      browser.pause(1000);
      browser.click('#login');
      browser.setValue('#identifier', user)
      browser.setValue('#password', user)
      browser.click('#submit-button');
      browser.element('#logout-link').state.should.be.equal('success');

    } catch (e) {
      throw e;
    }
  },

  logout: () => {
    try {
      console.log("=== logout ===");
      browser.url('/logout');

    } catch (e) {
      throw e;
    }
  }
}
