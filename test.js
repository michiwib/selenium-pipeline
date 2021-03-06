const {Builder, By, Key, until} = require('selenium-webdriver');
var assert = require('chai').assert;
const chrome = require('selenium-webdriver/chrome');

const capabilities = {
    platform: 'LINUX',
    browserName: 'chrome',
    version: '74.0',
    resolution: '1280x800',
    network: true,
    visual: true,
    console: true,
    video: true
}

const screen = {
    width: 640,
    height: 480
  };

describe("test", async () => {
    it("should perform a test", async () => {
        //let driver = await new Builder().forBrowser('chrome').build();
        let driver = await new Builder()
            .usingServer("http://10.130.58.191:5555/wd/hub")
            .withCapabilities(capabilities)
            //.setChromeOptions(new chrome.Options().addArguments('--headless'))
            .build();
        try {
            await driver.get('http://thedemosite.co.uk/savedata.php');
            await driver.findElement(By.name('username')).sendKeys('webdriver');
            await driver.findElement(By.name('password')).sendKeys('webdriver123');
            await driver.findElement(By.name('FormsButton2')).click();
            var loggedTitle = await driver.getTitle();
            await console.log(loggedTitle);
            html = await driver.getPageSource();
            await console.log(html);
        } finally {
            await driver.quit();
        }
    })
})

// (async function example() {
//   let driver = await new Builder().forBrowser('chrome').build();
//   try {
//     await driver.get('http://www.google.com/ncr');
//     await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
//     await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
//   } finally {
//     await driver.quit();
//   }
// })();