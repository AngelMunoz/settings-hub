import { Component, Prop } from '@stencil/core';
import { RouterHistory } from '@stencil/router';


@Component({
  tag: 'go-back-component',
  styleUrl: 'go-back.component.css'
})
export class GoBackComponent {
  @Prop() history: RouterHistory;
  render() {
    return (
      <button class="go-back-component" onClick={this.goBack.bind(this)}>
        <i class="mdl2 mdl2-home"></i> Home
      </button>
    );
  }

  goBack() {
    this.history.goBack();
  }

}
