import { describe, it } from 'mocha';
import { By, key, until } from 'selenium-webdriver';
import { expect } from 'chai'
import { configureDriver, targetBrowser } from '../utils/core';
import mochaAsync from '../utils/mochaAsync';
/**
 * polyfil for async/await feature which is part of ES2017
 */
require("babel-polyfill");

const driver = configureDriver();

/**
 * When the link is not found make sure the link did not change
 */
const firstLink = 'React - A JavaScript library for building user interfaces - Facebook Code';

describe(`Sample Test - [${targetBrowser}]`, function() {
  /**
   * Extend timeout for mocha
   */
  this.timeout(30000);
  
  it('should google for react', mochaAsync ( async () => {
    await driver.get('http://www.google.de/');
    await driver.findElement(By.name('q')).sendKeys('react')
    await driver.findElement(By.name('btnG')).click();
    await driver.wait(until.elementLocated(By.linkText(firstLink)));
    await driver.findElement(By.linkText(firstLink)).click();
    await driver.quit();
  }));
});