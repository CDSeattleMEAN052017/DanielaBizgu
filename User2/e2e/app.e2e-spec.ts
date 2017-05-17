import { User2Page } from './app.po';

describe('user2 App', () => {
  let page: User2Page;

  beforeEach(() => {
    page = new User2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
