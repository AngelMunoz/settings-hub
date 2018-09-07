import { TestWindow } from '@stencil/core/testing';
import { SystemPage } from './system';

describe('app', () => {
  it('should build', () => {
    expect(new SystemPage()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLSystemPageElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [SystemPage],
        html: '<system-page></system-page>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
