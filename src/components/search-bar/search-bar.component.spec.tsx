import { TestWindow } from '@stencil/core/testing';
import { SearchBarComponent } from './search-bar.component';

describe('app', () => {
  it('should build', () => {
    expect(new SearchBarComponent()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLSearchBarComponentElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [SearchBarComponent],
        html: '<search-bar-component></search-bar-component>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
