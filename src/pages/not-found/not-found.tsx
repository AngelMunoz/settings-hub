import { Component } from '@stencil/core';


@Component({
  tag: 'not-found',
  styleUrl: 'not-found.css'
})
export class NotFound {

  render() {
    return (
      <h1>404</h1>
    );
  }
}
