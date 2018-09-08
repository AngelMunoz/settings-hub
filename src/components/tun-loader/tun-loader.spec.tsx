import { TestWindow } from '@stencil/core/testing';
import { TunLoader } from './tun-loader';

describe('app', () => {
  it('should build', () => {
    expect(new TunLoader()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLTunLoaderElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [TunLoader],
        html: '<tun-loader></tun-loader>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
