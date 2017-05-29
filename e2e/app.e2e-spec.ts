import { MarscolonyPage } from './app.po';

describe('marscolony App', () => {
  let page: MarscolonyPage;

  beforeEach(() => {
    page = new MarscolonyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
