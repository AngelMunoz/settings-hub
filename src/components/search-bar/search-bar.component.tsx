import { Component } from '@stencil/core';


@Component({
  tag: 'search-bar-component',
  styleUrl: 'search-bar.component.css'
})
export class SearchBarComponent {

  render() {
    return (
      <form>
        <input type="text" />
      </form>
    );
  }
}
