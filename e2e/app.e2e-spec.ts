import { MyleaguePage } from './app.po';

describe('myleague App', function() {
  let page: MyleaguePage;

  beforeEach(() => {
    page = new MyleaguePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
