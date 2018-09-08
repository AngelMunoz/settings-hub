import { Component, Prop } from '@stencil/core';
import { RouterHistory } from '@stencil/router';


@Component({
  tag: 'tun-go-home',
  styleUrl: 'tun-go-home.css'
})
export class TunGoHome {
  @Prop() history: RouterHistory;
  render() {
    return (
      <button class="tun-go-home" onClick={this.goBack.bind(this)}>
        <i class="mdl2 mdl2-home"></i> Home
      </button>
    );
  }

  goBack() {
    this.history.goBack();
  }

}
