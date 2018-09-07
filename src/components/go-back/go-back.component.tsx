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
      <button onClick={this.goBack.bind(this)}>Go Back</button>
    );
  }

  goBack() {
    this.history.goBack();
  }

}
