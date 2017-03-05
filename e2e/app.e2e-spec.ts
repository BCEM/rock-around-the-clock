import { RockAroundTheClockPage } from './app.po';

describe('rock-around-the-clock App', () => {
  let page: RockAroundTheClockPage;

  beforeEach(() => {
    page = new RockAroundTheClockPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
