import { videoPlayerElem } from "../../constants/page-constants";

/**
 * Perform an click action on the given element
 * @param  {String}   action  The action to perform (click or doubleClick)
 * @param  {String}   type    Type of the element (link or selector)
 * @param  {String}   selector Element selector
 */
export function checkVideo(selector): void {
    browser.switchToFrame(0);
    const videoPlayer = browser.$(selector);
}