import { Component, Prop, Watch, Method } from '@stencil/core';

@Component({
  tag: 'splitview-component',
  styleUrl: 'splitview.component.css'
})
export class SplitviewComponent {

  menu: HTMLMenuElement;
  @Prop({ reflectToAttr: true }) hasHamburger: boolean = true;
  @Prop({ reflectToAttr: true, mutable: true }) isOpen: boolean = false;


  render() {
    return (
      <menu class="splitview-component" ref={(el: HTMLMenuElement) => this.menu = el}>
        <section class="splitview-component__pane">
          {
            this.hasHamburger ? <a class="splitview-component-menu" onClick={this.togglePane.bind(this)}></a>
              : ''
          }
          <section class="splitview-component__pane__content">
            <slot></slot>
          </section>
        </section>
        <section class="splitview-component__content">
          <slot name="content"></slot>
        </section>
      </menu>
    );
  }


  @Watch('isOpen')
  onOpenChange(newVal: boolean) {
    if (newVal) {
      this.menu.classList.add('is-open');
    } else {
      this.menu.classList.remove('is-open');
    }
  }

  @Method()
  togglePane() {
    this.isOpen = !this.isOpen;
  }
}
