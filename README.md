## Introduction

Add Selenium tests to your project using your daily language JAVASCRIPT/ES6 or even Typescript. The Example is primarly based on javascript libraries. 


| node_module           | Description                                           |
|-----------------------|-------------------------------------------------------|
| selenium-driver       | Responsible for communication with the browser.       |
| chai                  | Test expectations (expect)                            |
| mocha                 | Test Runner (describe,it,before,after,...)            



In order to communicate with the browser it is necessary to give selenium-driver the appropriate driver for each browser.

| browser               | selenium-webdriver                                    |
|-----------------------|-------------------------------------------------------|
| chrome                | chromedriver.exe (win) chromdriver (OSX)              |
| IE                    | IEDriverServer.exe (only win)                         |
| firefox               | geckodriver.exe (win)          

Tested with the following setup. Make sure you have the correct browser verion installed on your machine

| Browser   | Version                                                         |
|-----------|-----------------------------------------------------------------|
| Chrome    | >= Version 57.0.xx                                              |
| IE        | 11+                                                             |


## Installion

* Chrome/IE: Zoom <code>levels</code> and your text size in your browser is set to <code>default</code>.
* IE: Internetoptions -> Security -> Zones -> Either you uncheck all zones or you check all zones.

<pre><code>yarn install</code></pre>

## Run
<pre><code>yarn run start:selenium:chrome</code></pre>
or
<pre><code>yarn run start:selenium:ie</code></pre>