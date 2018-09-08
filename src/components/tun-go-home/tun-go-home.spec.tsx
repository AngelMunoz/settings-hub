import { TestWindow } from '@stencil/core/testing';
import { TunGoHome } from './tun-go-home';

describe('app', () => {
  it('should build', () => {
    expect(new TunGoHome()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLTunGoHomeElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [TunGoHome],
        html: '<tun-go-home></tun-go-home>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
