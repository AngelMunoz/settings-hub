import { Component } from '@stencil/core';


@Component({
  tag: 'tile-component',
  styleUrl: 'tile.component.css'
})
export class TileComponent {

  render() {
    return (
      <article class="tile-component">
        <slot name="header"></slot>
        <slot></slot>
        <slot name="footer"></slot>
      </article>
    );
  }
}
