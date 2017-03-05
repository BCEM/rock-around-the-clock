import { browser, element, by } from 'protractor';

export class RockAroundTheClockPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.tagName('h1')).getText();
  }
}
