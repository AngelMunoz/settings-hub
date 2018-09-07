import { Component, State } from '@stencil/core';
import '@stencil/router';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {
  @State() hideSearch: boolean = false;

  render() {
    return (
      <article>
        <stencil-router>
          <stencil-route-switch scrollTopOffset={0}>
            <stencil-route url="/" component="home-page" exact={true} />
            <stencil-route url="/system" component="system-page" exact={true} />
            <stencil-route component="not-found" />
          </stencil-route-switch>
        </stencil-router>
      </article>
    );
  }

}
