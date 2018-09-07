import { TestWindow } from '@stencil/core/testing';
import { NotFound } from './not-found';

describe('app', () => {
  it('should build', () => {
    expect(new NotFound()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLNotFoundElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [NotFound],
        html: '<not-found></not-found>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
