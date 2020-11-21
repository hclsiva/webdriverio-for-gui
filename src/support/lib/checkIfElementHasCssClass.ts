import { expect } from "chai";

/**
 * Check if the given element exists in the DOM one or more times
 * @param  {WebdriverIO.Element}  element  Element selector
 * @param  {string} htmlClass Check if the class name exists
 */
export function hasClass(
  element: WebdriverIO.Element,
  htmlClass: string
): boolean {
  console.log(" element.getAttribute of class " + element.getAttribute("class") + " htmlClass " + htmlClass + " search = " + element.getAttribute("class").search(htmlClass));
  return element.getAttribute("class").search(htmlClass) >= 0;
}
