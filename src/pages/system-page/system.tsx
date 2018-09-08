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
      <splitview-component isOpen={true} hasHamburger={false}>
        <go-back-component history={this.history}></go-back-component>
        <search-bar-component></search-bar-component>
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
      </splitview-component>
    );
  }
}
