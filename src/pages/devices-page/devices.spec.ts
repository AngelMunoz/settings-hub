import { TestWindow } from '@stencil/core/testing';
import { DevicesPage } from './devices';

describe('app', () => {
  it('should build', () => {
    expect(new DevicesPage()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLDevicesPageElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [DevicesPage],
        html: '<devices-page></devices-page>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
