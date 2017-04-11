import { CompEthicsSitePage } from './app.po';

describe('comp-ethics-site App', () => {
  let page: CompEthicsSitePage;

  beforeEach(() => {
    page = new CompEthicsSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
