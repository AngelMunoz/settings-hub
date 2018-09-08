import { TestWindow } from '@stencil/core/testing';
import { LoaderComponent } from './loader.component';

describe('app', () => {
  it('should build', () => {
    expect(new LoaderComponent()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLLoaderComponentElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [LoaderComponent],
        html: '<search-bar-component></search-bar-component>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
