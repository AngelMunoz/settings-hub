import { TestWindow } from '@stencil/core/testing';
import { TileComponent } from './tile.component';

describe('app', () => {
  it('should build', () => {
    expect(new TileComponent()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLTileComponentElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [TileComponent],
        html: '<tile-component></tile-component>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
