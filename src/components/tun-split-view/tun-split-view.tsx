import { Component, Prop, Watch, Method } from '@stencil/core';

@Component({
  tag: 'tun-split-view',
  styleUrl: 'tun-split-view.css'
})
export class TunSplitView {

  menu: HTMLMenuElement;
  @Prop({ reflectToAttr: true }) hasHamburger: boolean = true;
  @Prop({ reflectToAttr: true, mutable: true }) isOpen: boolean = false;


  render() {
    return (
      <menu class="tun-split-view" ref={(el: HTMLMenuElement) => this.menu = el}>
        <section class="tun-split-view__pane">
          {
            this.hasHamburger ? <a class="tun-split-view-menu" onClick={this.togglePane.bind(this)}></a>
              : ''
          }
          <section class="tun-split-view__pane__content">
            <slot></slot>
          </section>
        </section>
        <section class="tun-split-view__content">
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
