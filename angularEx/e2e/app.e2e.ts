import { AngularExPage } from './app.po';

describe('angular-ex App', function() {
  let page: AngularExPage;

  beforeEach(() => {
    page = new AngularExPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular-ex works!');
  });
});
