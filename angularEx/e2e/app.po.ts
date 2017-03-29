export class AngularExPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular-ex-app h1')).getText();
  }
}
