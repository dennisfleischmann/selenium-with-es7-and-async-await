import minimist from 'minimist';
import webdriver, { By, key, until } from 'selenium-webdriver';

const {
	browser
} = minimist(process.argv.slice(2));

const configureDriver = (brwsr) => {
	let targetBrowser = brwsr ? brwsr : browser;

	return new webdriver.Builder()
		.forBrowser(targetBrowser || 'chrome' /* use as default target browser chrome if nothing specified*/ )
		.build();
};

module.exports = {
	configureDriver: configureDriver,
	targetBrowser: browser,
};
