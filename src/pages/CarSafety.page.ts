import {
  aMillionMorePageTitle,
  carSafety,
  safetyinnovation,
  internationalVolvo,
  url,
  learnMoreAboutCarSafetyLink,
  learnMoreAboutInnovationButton,
  siteNavigationOthersButton,
  modelsListPrevButton,
  modelsListNextButton,
  internatinalVolvoTitle,
  buildYourOwnLink,
  buildYourOwnElem,
  watchTheStoryButton,
  videoPlayerElem,
  cookiesButton
} from "../constants/page-constants";

class CarSafetyPage {
  goToCarSafetyPage(): void {
    browser.url(url);
  }
  get cookieBtn(){
    return $(cookiesButton);
  }
  getTitle(): string {
    return aMillionMorePageTitle;
  }
  getInternationaVolvoTitle(): string {
    return internatinalVolvoTitle;
  }

  getLearnMoreAbtCarSftyLink(): WebdriverIO.Element {
    return $(learnMoreAboutCarSafetyLink);
  }

  getLearnMoreAbtCarSftyPageTitle(): string {
    return carSafety;
  }

  getLearnMoreAboutInnovation(): WebdriverIO.Element {
    return $(learnMoreAboutInnovationButton);
  }

  getLearnMoreAbtInnovation(): string {
    return safetyinnovation;
  }

  getModelsListPreviousButton(): WebdriverIO.Element {
    return $(modelsListPrevButton);
  }

  getModelsListNextButtonElem(): WebdriverIO.Element {
    return $(modelsListNextButton);
  }
  getModelsListNextButton(): string {
    return modelsListNextButton;
  }
  getInternationalVolvoAnchor(): WebdriverIO.Element {
    return $(internationalVolvo);
  }
  getSiteNavigationOthersButton(): WebdriverIO.Element {
    return $(siteNavigationOthersButton);
  }
  getBuildYourOwnLink(): WebdriverIO.Element {
    return $(buildYourOwnLink);
  }
  getBuildYourOwnElem(): WebdriverIO.Element {
    return $(buildYourOwnElem);
  }
  getWatchTheStoryButton(): WebdriverIO.Element {
    return $(watchTheStoryButton);
  }
  getVideoPlayer(): any {
    return videoPlayerElem;
  }
}

export const carSafetyPage = new CarSafetyPage();
