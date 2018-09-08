import { TestWindow } from '@stencil/core/testing';
import { TunSplitView } from './tun-split-view';

describe('tun-split-view', () => {
  it('should build', () => {
    expect(new TunSplitView()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLTunSplitViewElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [TunSplitView],
        html: '<tun-split-view></tun-split-view>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
