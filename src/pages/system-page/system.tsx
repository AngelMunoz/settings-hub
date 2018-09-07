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
      <article>
        <go-back-component history={this.history}></go-back-component>
        <p>
          System
        </p>
      </article>
    );
  }
}
