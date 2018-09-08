import { Component, } from '@stencil/core';


@Component({
  tag: 'tun-loader',
  styleUrl: 'tun-loader.css'
})
export class TunLoader {

  render() {
    return (
      <menu class="tun-loader">
        <a class="tun-circle"></a>
        <a class="tun-circle"></a>
        <a class="tun-circle"></a>
        <a class="tun-circle"></a>
        <a class="tun-circle"></a>
      </menu>
    );
  }
}
