import { Component, } from '@stencil/core';


@Component({
  tag: 'loader-component',
  styleUrl: 'loader.component.css'
})
export class LoaderComponent {

  render() {
    return (
      <menu class="loader">
        <a class="circle"></a>
        <a class="circle"></a>
        <a class="circle"></a>
        <a class="circle"></a>
        <a class="circle"></a>
      </menu>
    );
  }
}
