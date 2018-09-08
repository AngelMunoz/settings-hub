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
      <tun-split-view isOpen={true} hasHamburger={false}>
        <tun-go-home history={this.history}></tun-go-home>
        <tun-search-bar></tun-search-bar>
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
      </tun-split-view>
    );
  }
}
