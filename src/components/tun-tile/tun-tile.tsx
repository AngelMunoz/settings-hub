import { Component } from '@stencil/core';


@Component({
  tag: 'tun-tile',
  styleUrl: 'tun-tile.css'
})
export class TunTile {

  render() {
    return (
      <article class="tun-tile">
        <slot name="header"></slot>
        <slot></slot>
        <slot name="footer"></slot>
      </article>
    );
  }
}
