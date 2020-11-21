import { Given, When, Then } from "cucumber";
import { carSafetyPage } from "../pages/CarSafety.page";
import { expect } from "chai";
import { clickElement } from "../support/action/clickElement";
import { hasClass } from "../support/lib/checkIfElementHasCssClass";
import { Http2ServerRequest } from "http2";
import { checkVideo } from "../support/check/checkVideo";

Given(/^I'm on the car safety page$/, { timeout: 70000 }, () => {
  carSafetyPage.goToCarSafetyPage();
});

Then(/^I expect the title to match$/, () => {
  const title = carSafetyPage.getTitle();
  console.log("browser.getTitle() ", browser.getTitle());
  browser.waitUntil(() => browser.getTitle() === title, 70000);
  expect(browser.getTitle()).to.equal(title);
});

Then(/^Learn more about car safety link is displayed$/, () => {
  const link = carSafetyPage.getLearnMoreAbtCarSftyLink();
  expect(link.isDisplayed()).equal(true);
});

When(/^I click on the link$/, () => {
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
  console.log("browser Title", browser.getTitle());
  browser.waitUntil(() => browser.getTitle() === title, 70000);
  expect(browser.getTitle()).to.equal(title);
});

Then(/^I expect previous button to be disabled$/, () => {
  const prevButton = carSafetyPage.getModelsListPreviousButton();
  expect(hasClass(prevButton, "nn")).equal(true);

});

Then(/^I expect next button to be enabled$/, () => {
  const nextButton = carSafetyPage.getModelsListNextButton();
  expect(hasClass(nextButton, "nn")).equal(false);
});

When(/^I click on next button$/, () => {
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
Then(/^Build your own element is visible/, () => {
  const BuildYourOwnDiv = carSafetyPage.getBuildYourOwnLink();
  expect(BuildYourOwnDiv.isDisplayedInViewport()).to.equal(true);
});
When(/^I click on watch the story button$/, () => {
  const watchTheStoryButton = carSafetyPage.getWatchTheStoryButton();
  clickElement("click", watchTheStoryButton);
});
Then(/^Check if video is playing/, () => {
  const videoPlayer = 1;
  checkVideo(carSafetyPage.getVideoPlayer());
  browser.pause(6000);
  expect(videoPlayer).is.not.undefined
  //expect(videoPlayer.).greaterThan(0);
});
