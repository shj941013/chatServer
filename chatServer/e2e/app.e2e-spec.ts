import { ChatServerPage } from './app.po';

describe('chat-server App', () => {
  let page: ChatServerPage;

  beforeEach(() => {
    page = new ChatServerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
