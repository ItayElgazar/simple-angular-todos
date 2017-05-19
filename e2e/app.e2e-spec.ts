import { AngularTodosPage } from './app.po';

describe('angular-todos App', () => {
  let page: AngularTodosPage;

  beforeEach(() => {
    page = new AngularTodosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
