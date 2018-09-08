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
      <article class="home-page">
        <header class="home-page__header">
          <section>
            <label class="home-page__header__title">Settings Hub</label>
            <search-bar-component></search-bar-component>
          </section>
        </header>
        {
          this.isLoading ? <loader-component></loader-component> : ''
        }
        <main class="home-page__tiles">
          {this.tileList.map(tile =>
            <tile-component onClick={this.navigate.bind(this, tile.url)}>
              <header class="header" slot="header">
                <i class={tile.icon}></i>
              </header>
              <main class="main">
                <label>{tile.name}</label>
                <footer class="footer">
                  <small>{tile.description}</small>
                </footer>
              </main>
            </tile-component>)
          }
        </main>
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
