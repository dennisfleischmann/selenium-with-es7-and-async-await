## Introduction

e2e tests is a tool which should not miss in any project which must meet enterprise requirements. Using Selemium tests is nowdays a market standard which is wildey used among many projects. Unfortunteley often times projects find themself in the [Callback Hell](http://callbackhell.com/).

Fortunately with the EcmaScript2017 specification `async` and `await` is  coming along which will help us reducing this headcache and gain clearity about our tests again.

```javascript
  it('should google for react', mochaAsync ( async () => {
  
    await driver.get('http://www.google.de/');
    await driver.findElement(By.name('q')).sendKeys('react')
    await driver.findElement(By.name('btnG')).click();
    await driver.wait(until.elementLocated(By.linkText(firstLink)));
    await driver.findElement(By.linkText(firstLink)).click();
    await driver.quit();
    
  }));

```

## Used Node Modules


| node_module           | Description                                           |
|-----------------------|-------------------------------------------------------|
| selenium-driver       | Responsible for communication with the browser.       |
| chai                  | Test expectations (expect)                            |
| mocha                 | Test Runner (describe,it,before,after,...)            


## Selenium Webdriver

In order to communicate with the browser it is necessary to give selenium-driver the appropriate driver for each browser.

| browser               | selenium-webdriver                                    |
|-----------------------|-------------------------------------------------------|
| chrome                | chromedriver.exe (win) chromdriver (OSX)              |
| IE                    | IEDriverServer.exe (only win)                         |
| firefox               | geckodriver.exe (win)          

## Example Browsers

Tested with the following setup. Make sure you have the correct browser verion installed on your machine

| Browser   | Version                                                         |
|-----------|-----------------------------------------------------------------|
| Chrome    | >= Version 57.0.xx                                              |
| IE        | 11+                                                             |


## Installation

Please make sure you have setup your browser with the following configurations. Otherwise you might run into troubles.

* Chrome/IE: Zoom <code>levels</code> and your text size in your browser is set to <code>default</code>.
* IE: Internetoptions -> Security -> Zones -> Either you uncheck all zones or you check all zones.

<pre><code>yarn install</code></pre>

## Run
<pre><code>yarn run start:selenium:chrome</code></pre>
or
<pre><code>yarn run start:selenium:ie</code></pre>