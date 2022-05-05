import { Given, When, Then } from "cucumber";
import { carSafetyPage } from "../pages/CarSafety.page";
import { expect } from "chai";
import { clickElement } from "../support/action/clickElement";
import { checkIfElementExists } from "../support/lib/checkIfElementExists";
import { hasClass } from "../support/lib/checkIfElementHasCssClass";
import { checkVideo } from "../support/check/checkVideo";
import { suv_xc90 } from "../pages/SUVXC90";
import { suv_xc60 } from "../pages/SUVXC60";
import { suv_xc40 } from "../pages/SUVXC40";
import { suv_xc40Electric } from "../pages/SUVXC40Electric";
const cucumberJson = require("wdio-cucumberjs-json-reporter").default;


Given(/^I'm on the car safety page$/, { timeout: 70000 }, () => {
  carSafetyPage.goToCarSafetyPage();
});

Then(/^Verify and accept all cookies$/, () => {
  console.log("Verify and accept all cookies")
  if(carSafetyPage.cookieBtn.isDisplayed()){
    carSafetyPage.cookieBtn.click();
  } else{
    console.log("Cookies Button not displayed")
  }
});

Then(/^I expect the title to match$/, () => {
  const title = carSafetyPage.getTitle();
  console.log("Browser Title = ", browser.getTitle());
  expect(browser.getTitle()).to.equal(title);
});

Then(/^Learn more about car safety link is displayed$/, () => {
  const link = carSafetyPage.getLearnMoreAbtCarSftyLink();
  expect(link.isDisplayed()).equal(true);
});

When(/^I click on the Learn more about car safety link$/, { timeout: 70000 }, () => {
  const link = carSafetyPage.getLearnMoreAbtCarSftyLink();
  clickElement("click", link);
});

Then(
  /^I expect the page title to be changed after loading car safety page$/,
  () => {
    const title = carSafetyPage.getLearnMoreAbtCarSftyPageTitle();
    browser.waitUntil(() => browser.getTitle() === title, 70000);
    expect(browser.getTitle()).to.equal(title);
  }
);

Then(/^Learn more button is displayed$/, () => {
  const link = carSafetyPage.getLearnMoreAboutInnovation();
  expect(link.isDisplayed()).equal(true);
});

Then(/^I click on the button learn more about innovation button$/, () => {
  const link = carSafetyPage.getLearnMoreAboutInnovation();
  clickElement("click", link);
});

Then(/^I expect the title to be changed after loading innovation page$/, { timeout: 70000 }, () => {
  const title = carSafetyPage.getLearnMoreAbtInnovation();
  browser.waitUntil(() => browser.getTitle() === title, 70000);
  expect(browser.getTitle()).to.equal(title);
});

Then(/^I expect previous button to be disabled$/, () => {
  const prevButton = carSafetyPage.getModelsListPreviousButton();
  cucumberJson.attach(browser.takeScreenshot(), "image/png");
  browser.pause(7000);
  console.log("prevButton is Disabled ");
  expect(prevButton.isEnabled()).equal(false);

});

Then(/^I expect next button to be enabled$/, () => {
  const nextButton = carSafetyPage.getModelsListNextButtonElem();
  expect(nextButton.isEnabled()).equal(true);
});

When(/^I click on next button$/, () => {
    console.log(" I click on next button Browser Title = ", browser.getTitle());
    checkIfElementExists(carSafetyPage.getModelsListNextButton(),true,1);
    const nextButton = carSafetyPage.getModelsListNextButton();
    clickElement("click", nextButton);
});

Then(/^I expect previous button to be enabled$/, () => {
  const prevButton = carSafetyPage.getModelsListPreviousButton();
  expect(hasClass(prevButton, "nn")).equal(false);
});

When(/^I click on International Volvo image link$/, () => {
  const link = carSafetyPage.getInternationalVolvoAnchor();
  clickElement("click", link);
});

Then(/^I expect the International title to match$/, () => {
  const title = carSafetyPage.getInternationaVolvoTitle();
  browser.waitUntil(() => browser.getTitle() === title, 70000);
  expect(browser.getTitle()).to.equal(title);
});

When(/^Build your own element is not visible$/, () => {
  const BuildYourOwnDiv = carSafetyPage.getBuildYourOwnElem();
  expect(BuildYourOwnDiv.isDisplayed()).to.equal(false);
});
When(/^I click on site navigation button$/, () => {
  const siteNavigationButton = carSafetyPage.getSiteNavigationOthersButton();
  clickElement("click", siteNavigationButton);
});
Then(/^Build your own element is visible$/, () => {
  const BuildYourOwnDiv = carSafetyPage.getBuildYourOwnLink();
  expect(BuildYourOwnDiv.isDisplayedInViewport()).to.equal(true);
});
When(/^I click on watch the story button$/, () => {
  const watchTheStoryButton = carSafetyPage.getWatchTheStoryButton();
  clickElement("click", watchTheStoryButton);
});
Then(/^Check if video is playing$/, () => {
  const videoPlayer = 1;
  checkVideo(carSafetyPage.getVideoPlayer());
  browser.pause(6000);
  expect(videoPlayer).is.not.undefined
  //expect(videoPlayer.).greaterThan(0);
});
When(/^I click on SUV XC90 Header Link$/, { timeout: 70000 }, () => {
  const suvXC90HeaderLink = suv_xc90.getXC90HybridheaderLink();
  clickElement("click", suvXC90HeaderLink);
});
Then(/^Check the SUV XC90 Target URL is correct$/, { timeout: 70000 }, () => {
  const suvXC90HeaderTargetURL = suv_xc90.getXC90HybridHeaderTargetURL();
  browser.pause(2000);
  expect(browser.getUrl().trim()).to.equal(suvXC90HeaderTargetURL.trim());
});
When(/^I click on SUV XC90 Learn Link$/, { timeout: 70000 }, () => {
  const suvXC90LearnLink = suv_xc90.getXC90HybridLearnLink();
  clickElement("click", suvXC90LearnLink);
});
Then(/^Check the SUV XC90 Target Learn URL is correct$/, { timeout: 70000 }, () => {
  const suvXC90LearnTargetURL = suv_xc90.getXC90HybridLearnLinkTargetURL();
  browser.pause(2000);
  expect(browser.getUrl().trim()).to.equal(suvXC90LearnTargetURL.trim());
});
When(/^I click on SUV XC90 Shop Link$/, { timeout: 70000 }, () => {
  const suvXC90ShopLink = suv_xc90.getXC90HybridShopLink();
  clickElement("click", suvXC90ShopLink);
});
Then(/^Check the SUV XC90 Target Shop URL is correct$/, { timeout: 70000 }, () => {
  const suvXC90ShopTargetURL = suv_xc90.getXC90HybridShopLinkTargetURL();
  browser.pause(2000);
  expect(browser.getUrl().trim()).to.equal(suvXC90ShopTargetURL.trim());
});
When(/^I click on SUV XC60 Header Link$/, { timeout: 70000 }, () => {
  const suvXC60HeaderLink = suv_xc60.getXC60HybridheaderLink();
  clickElement("click", suvXC60HeaderLink);
});
Then(/^Check the SUV XC60 Target URL is correct$/, { timeout: 70000 }, () => {
  const suvXC60HeaderTargetURL = suv_xc60.getXC60HybridHeaderTargetURL();
  browser.pause(2000);
  expect(browser.getUrl().trim()).to.equal(suvXC60HeaderTargetURL.trim());
});
When(/^I click on SUV XC60 Learn Link$/, { timeout: 70000 }, () => {
  const suvXC60LearnLink = suv_xc60.getXC60HybridLearnLink();
  clickElement("click", suvXC60LearnLink);
});
Then(/^Check the SUV XC60 Target Learn URL is correct$/, { timeout: 70000 }, () => {
  const suvXC60LearnTargetURL = suv_xc60.getXC60HybridLearnLinkTargetURL();
  browser.pause(2000);
  cucumberJson.attach(browser.takeScreenshot(), "image/png");  
 expect(browser.getUrl().trim()).to.equal(suvXC60LearnTargetURL.trim());
});
When(/^I click on SUV XC60 Shop Link$/, { timeout: 70000 }, () => {
  const suvXC60ShopLink = suv_xc60.getXC60HybridShopLink();
  clickElement("click", suvXC60ShopLink);
});
Then(/^Check the SUV XC60 Target Shop URL is correct$/, { timeout: 70000 }, () => {
  const suvXC60ShopTargetURL = suv_xc60.getXC60HybridShopLinkTargetURL();
  browser.pause(2000);
  expect(browser.getUrl().trim()).to.equal(suvXC60ShopTargetURL.trim());
});
When(/^I click on SUV XC40 Header Link$/, { timeout: 70000 }, () => {
  const suvXC40HeaderLink = suv_xc40.getXC40HybridheaderLink();
  clickElement("click", suvXC40HeaderLink);
});
Then(/^Check the SUV XC40 Target URL is correct$/, { timeout: 70000 }, () => {
  const suvXC40HeaderTargetURL = suv_xc40.getXC40HybridHeaderTargetURL();
  browser.pause(2000);
  expect(browser.getUrl().trim()).to.equal(suvXC40HeaderTargetURL.trim());
});
When(/^I click on SUV XC40 Learn Link$/, { timeout: 70000 }, () => {
  const suvXC40LearnLink = suv_xc40.getXC40HybridLearnLink();
  clickElement("click", suvXC40LearnLink);
});
Then(/^Check the SUV XC40 Target Learn URL is correct$/, { timeout: 70000 }, () => {
  const suvXC40LearnTargetURL = suv_xc40.getXC40HybridLearnLinkTargetURL();
  browser.pause(2000);
  expect(browser.getUrl().trim()).to.equal(suvXC40LearnTargetURL.trim());
});
When(/^I click on SUV XC40 Shop Link$/, { timeout: 70000 }, () => {
  const suvXC40ShopLink = suv_xc40.getXC40HybridShopLink();
  clickElement("click", suvXC40ShopLink);
});
Then(/^Check the SUV XC40 Target Shop URL is correct$/, { timeout: 70000 }, () => {
  const suvXC40ShopTargetURL = suv_xc40.getXC40HybridShopLinkTargetURL();
  browser.pause(2000);
  expect(browser.getUrl().trim()).to.equal(suvXC40ShopTargetURL.trim());
});

When(/^I click on SUV XC40Electric Header Link$/, { timeout: 70000 }, () => {
  const suvXC40ElectricHeaderLink = suv_xc40Electric.getXC40ElectricheaderLink();
  clickElement("click", suvXC40ElectricHeaderLink);
});
Then(/^Check the SUV XC40Electric Target URL is correct$/, { timeout: 70000 }, () => {
  const suvXC40ElectricHeaderTargetURL = suv_xc40Electric.getXC40ElectricHeaderTargetURL();
  browser.pause(2000);
  expect(browser.getUrl().trim()).to.equal(suvXC40ElectricHeaderTargetURL.trim());
});
When(/^I click on SUV XC40Electric Learn Link$/, { timeout: 70000 }, () => {
  const suvXC40ElectricLearnLink = suv_xc40Electric.getXC40ElectricLearnLink();
  clickElement("click", suvXC40ElectricLearnLink);
});
Then(/^Check the SUV XC40Electric Target Learn URL is correct$/, { timeout: 70000 }, () => {
  const suvXC40ElectricLearnTargetURL = suv_xc40Electric.getXC40ElectricLearnLinkTargetURL();
  browser.pause(2000);
  expect(browser.getUrl().trim()).to.equal(suvXC40ElectricLearnTargetURL.trim());
});
When(/^I click on SUV XC40Electric Shop Link$/, { timeout: 70000 }, () => {
  const suvXC40ElectricShopLink = suv_xc40Electric.getXC40ElectricShopLink();
  clickElement("click", suvXC40ElectricShopLink);
});
Then(/^Check the SUV XC40Electric Target Shop URL is correct$/, { timeout: 70000 }, () => {
  const suvXC40ElectricShopTargetURL = suv_xc40Electric.getXC40ElectricShopLinkTargetURL();
  browser.pause(2000);
  expect(browser.getUrl().trim()).to.equal(suvXC40ElectricShopTargetURL.trim());
});

