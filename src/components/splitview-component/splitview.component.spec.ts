import { TestWindow } from '@stencil/core/testing';
import { SplitviewComponent } from './splitview.component';

describe('splitview-component', () => {
  it('should build', () => {
    expect(new SplitviewComponent()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLSplitviewComponentElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [SplitviewComponent],
        html: '<splitview-component></splitview-component>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
