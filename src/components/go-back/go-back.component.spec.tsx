import { TestWindow } from '@stencil/core/testing';
import { GoBackComponent } from './go-back.component';

describe('app', () => {
  it('should build', () => {
    expect(new GoBackComponent()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLGoBackComponentElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [GoBackComponent],
        html: '<go-back-component></go-back-component>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
