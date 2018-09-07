import { Component, State, Prop } from '@stencil/core';
import { mockService } from '../../mocks';
import { RouterHistory } from "@stencil/router";

@Component({
  tag: 'home-page',
  styleUrl: 'home.css'
})
export class HomePage {
  @Prop() history: RouterHistory;

  @State() isLoading: boolean = false;
  @State() tileList: any[] = [];

  render() {
    return (
      <article>
        <header>
          <section>
            <h1>Settings Hub</h1>
            <search-bar-component></search-bar-component>
          </section>
        </header>
        {this.isLoading ? `loading...` : `Loaded`
        }
        {this.tileList.map(tile =>
          <tile-component onClick={this.navigate.bind(this, tile.url)}>
            <header slot="header">
              <img src={tile.image} />
            </header>
            <main>
              <p>
                <h3>{tile.name}</h3>
                <small>{tile.description}</small>
              </p>
            </main>
          </tile-component>)
        }
      </article>
    );
  }
  componentWillLoad() {
    this.isLoading = true;
  }

  async componentDidLoad() {
    this.tileList = await mockService('tiles');
    this.isLoading = false;
  }

  navigate(url) {
    this.history.push(url);
  }
}
