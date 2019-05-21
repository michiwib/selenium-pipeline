const {Builder, By, Key, until} = require('selenium-webdriver');
var assert = require('chai').assert;

const capabilities = {
    platform: 'LINUX',
    browserName: 'chrome',
    version: '74.0',
    // resolution: '1280x800',
    // network: true,
    // visual: true,
    // console: true,
    // video: true
}

describe("test", async () => {
    it("should perform a test", async () => {
        //let driver = await new Builder().forBrowser('chrome').build();
        let driver = await new Builder().usingServer("http://10.129.54.76:5555/wd/hub").withCapabilities(capabilities).build();
        try {
            await driver.get('http://www.google.com/ncr');
            await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
            await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
            var loggedTitle = await driver.getTitle();
            console.log(loggedTitle);
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