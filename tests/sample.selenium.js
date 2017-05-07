import { describe, it } from 'mocha';
import { By, key, until } from 'selenium-webdriver';
import { configureDriver, targetBrowser } from '../utils/core';

const driver = configureDriver();

describe(`Sample Test - [${targetBrowser}]`, function() {

  /**
   * Extend timeout for mocha
   */
  this.timeout(20000);
  
  it('should google for react', (done) => {

    driver.get('http://www.google.de/')
      .then(function() {
        driver.findElement(By.name('q')).sendKeys('react')
          .then(function() {
            driver.findElement(By.name('btnG')).click();
            driver.wait(until.elementLocated(By.linkText('A JavaScript library for building user interfaces - React - Facebook Code')))
            .then(function() {
              driver.findElement(By.linkText('A JavaScript library for building user interfaces - React - Facebook Code')).click()
                .then(function() {
                  driver.sleep(5000)
                    .then(function() {
                      driver.quit()
                        .then(function() {
                          done();
                        });
                    });
                });
            });
          });
      });
  });
});