// default config: https://github.com/xolvio/chimp/blob/master/src/bin/default.js
// var ip = require("ip");
// var host = ip.address();

module.exports = {
  // port: 4444,
  // host: "e2e-env",
  browser: 'firefox',
  screenshotPath: '/app/test/e2e/report/',
  webdriverio: {
    // baseUrl: 'http://debug:1338',
    waitforTimeout: 5000,
    screenshotPath: __dirname+"/test/e2e/screenshot"
  },
};
