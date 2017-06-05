import { FirstAngularAppPage } from './app.po';

describe('first-angular-app App', () => {
  let page: FirstAngularAppPage;

  beforeEach(() => {
    page = new FirstAngularAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
