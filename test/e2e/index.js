require("../bootstrap.test.js")
import {login} from "../util/e2eHelper.js"

describe('test logout', () => {
	before((done)=>{
		try {
			login("admin");
			done();
		} catch (e) {
			done(e);
		}
	})
	it('logout @watch', (done) => {
		try {
			browser.click('#logout-link');
			done()
		} catch (e) {
			done(e);
		}
	});
});
