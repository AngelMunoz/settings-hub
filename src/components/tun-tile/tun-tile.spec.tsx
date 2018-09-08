import { TestWindow } from '@stencil/core/testing';
import { TunTile } from './tun-tile';

describe('app', () => {
  it('should build', () => {
    expect(new TunTile()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLTunTileElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [TunTile],
        html: '<tun-tile></tun-tile>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
