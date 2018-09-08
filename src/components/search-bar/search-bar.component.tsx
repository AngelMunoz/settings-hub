import { Component, State } from '@stencil/core';


@Component({
  tag: 'search-bar-component',
  styleUrl: 'search-bar.component.css'
})
export class SearchBarComponent {
  @State() search: string = '';


  render() {
    return (
      <form class="search-bar-component" onSubmit={this.onSubmit.bind(this)}>
        <input class="search-bar-component__input" type="text" value={this.search} onInput={this.onInput.bind(this)} placeholder="Find A Setting"/>
      </form>
    );
  }

  onSubmit(event) {
    event.preventDefault();
  }

  onInput({ target }) {
    this.search = target.value;
  }
}
