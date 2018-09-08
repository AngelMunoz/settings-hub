import { Component, State, Event, EventEmitter, Prop } from '@stencil/core';


@Component({
  tag: 'tun-search-bar',
  styleUrl: 'tun-search-bar.css'
})
export class SearchBarComponent {
  @Prop({ reflectToAttr: true }) placeholder: string = 'Find A Setting';
  
  @State() search: string = '';

  @Event({ eventName: 'on-search' }) onSearch: EventEmitter;
  render() {
    return (
      <form class="tun-search-bar" onSubmit={this.onSubmit.bind(this)}>
        <input class="tun-search-bar__input" type="text" value={this.search} onInput={this.onInput.bind(this)} placeholder={this.placeholder} />
      </form>
    );
  }

  onSubmit(event) {
    event.preventDefault();
    this.onSearch.emit({ value: this.search });
  }

  onInput({ target }) {
    this.search = target.value;
  }
}
