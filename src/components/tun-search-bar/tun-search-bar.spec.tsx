import { TestWindow } from '@stencil/core/testing';
import { SearchBarComponent } from './tun-tun-search-bar';

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
        html: '<tun-search-bar></tun-search-bar>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
