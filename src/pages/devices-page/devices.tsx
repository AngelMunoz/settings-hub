import { Component, Prop } from '@stencil/core';
import { RouterHistory } from '@stencil/router';


@Component({
  tag: 'devices-page',
  styleUrl: 'devices.css'
})
export class DevicesPage {
  @Prop() history: RouterHistory;
  render() {
    return (
      <splitview-component isOpen={true} hasHamburger={false}>
        <go-back-component history={this.history}></go-back-component>
        <search-bar-component></search-bar-component>
        <label class="view-title">Devices</label>
        <button class="splitview-btn">
          <i class="mdl2 mdl2-cellphone"></i> Bluetooth & Other Devices
        </button>
        <button class="splitview-btn">
          <i class="mdl2 mdl2-scan"></i> Printers & Scanners
        </button>
        <button class="splitview-btn">
          <i class="mdl2 mdl2-keyboard-classic"></i> Typing
        </button>
        <main slot="content">
          <article>
            <p>
              Devices
            </p>
          </article>
        </main>
      </splitview-component>
    );
  }
}
