import { Component, Prop } from '@stencil/core';
import { RouterHistory } from '@stencil/router';


@Component({
  tag: 'system-page',
  styleUrl: 'system.css'
})
export class SystemPage {
  @Prop() history: RouterHistory;
  render() {
    return (
      <tun-split-view isOpen={true} hasHamburger={false}>
        <tun-go-home history={this.history}></tun-go-home>
        <tun-search-bar></tun-search-bar>
        <label class="view-title">System</label>
        <button class="splitview-btn">
          <i class="mdl2 mdl2-caption"></i> Display
        </button>
        <button class="splitview-btn">
          <i class="mdl2 mdl2-volume"></i> Sound
        </button>
        <button class="splitview-btn">
          <i class="mdl2 mdl2-comment"></i> Notifications & Actions
        </button>
        <main slot="content">
          <article>
            <p>
              System
            </p>
          </article>
        </main>
      </tun-split-view>
    );
  }
}
