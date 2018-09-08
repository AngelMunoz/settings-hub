/**
* This is an autogenerated file created by the Stencil compiler.
* It contains typing information for all components that exist in this project.
*/
/* tslint:disable */

import '@stencil/core';

import '@stencil/router';
import '@stencil/state-tunnel';
import {
  RouterHistory,
} from '@stencil/router';


export namespace Components {

  interface AppRoot {}
  interface AppRootAttributes extends StencilHTMLAttributes {}

  interface GoBackComponent {
    'history': RouterHistory;
  }
  interface GoBackComponentAttributes extends StencilHTMLAttributes {
    'history'?: RouterHistory;
  }

  interface LoaderComponent {}
  interface LoaderComponentAttributes extends StencilHTMLAttributes {}

  interface SearchBarComponent {}
  interface SearchBarComponentAttributes extends StencilHTMLAttributes {}

  interface TileComponent {}
  interface TileComponentAttributes extends StencilHTMLAttributes {}

  interface HomePage {
    'history': RouterHistory;
  }
  interface HomePageAttributes extends StencilHTMLAttributes {
    'history'?: RouterHistory;
  }

  interface NotFound {}
  interface NotFoundAttributes extends StencilHTMLAttributes {}

  interface SystemPage {
    'history': RouterHistory;
  }
  interface SystemPageAttributes extends StencilHTMLAttributes {
    'history'?: RouterHistory;
  }
}

declare global {
  interface StencilElementInterfaces {
    'AppRoot': Components.AppRoot;
    'GoBackComponent': Components.GoBackComponent;
    'LoaderComponent': Components.LoaderComponent;
    'SearchBarComponent': Components.SearchBarComponent;
    'TileComponent': Components.TileComponent;
    'HomePage': Components.HomePage;
    'NotFound': Components.NotFound;
    'SystemPage': Components.SystemPage;
  }

  interface StencilIntrinsicElements {
    'app-root': Components.AppRootAttributes;
    'go-back-component': Components.GoBackComponentAttributes;
    'loader-component': Components.LoaderComponentAttributes;
    'search-bar-component': Components.SearchBarComponentAttributes;
    'tile-component': Components.TileComponentAttributes;
    'home-page': Components.HomePageAttributes;
    'not-found': Components.NotFoundAttributes;
    'system-page': Components.SystemPageAttributes;
  }


  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLGoBackComponentElement extends Components.GoBackComponent, HTMLStencilElement {}
  var HTMLGoBackComponentElement: {
    prototype: HTMLGoBackComponentElement;
    new (): HTMLGoBackComponentElement;
  };

  interface HTMLLoaderComponentElement extends Components.LoaderComponent, HTMLStencilElement {}
  var HTMLLoaderComponentElement: {
    prototype: HTMLLoaderComponentElement;
    new (): HTMLLoaderComponentElement;
  };

  interface HTMLSearchBarComponentElement extends Components.SearchBarComponent, HTMLStencilElement {}
  var HTMLSearchBarComponentElement: {
    prototype: HTMLSearchBarComponentElement;
    new (): HTMLSearchBarComponentElement;
  };

  interface HTMLTileComponentElement extends Components.TileComponent, HTMLStencilElement {}
  var HTMLTileComponentElement: {
    prototype: HTMLTileComponentElement;
    new (): HTMLTileComponentElement;
  };

  interface HTMLHomePageElement extends Components.HomePage, HTMLStencilElement {}
  var HTMLHomePageElement: {
    prototype: HTMLHomePageElement;
    new (): HTMLHomePageElement;
  };

  interface HTMLNotFoundElement extends Components.NotFound, HTMLStencilElement {}
  var HTMLNotFoundElement: {
    prototype: HTMLNotFoundElement;
    new (): HTMLNotFoundElement;
  };

  interface HTMLSystemPageElement extends Components.SystemPage, HTMLStencilElement {}
  var HTMLSystemPageElement: {
    prototype: HTMLSystemPageElement;
    new (): HTMLSystemPageElement;
  };

  interface HTMLElementTagNameMap {
    'app-root': HTMLAppRootElement
    'go-back-component': HTMLGoBackComponentElement
    'loader-component': HTMLLoaderComponentElement
    'search-bar-component': HTMLSearchBarComponentElement
    'tile-component': HTMLTileComponentElement
    'home-page': HTMLHomePageElement
    'not-found': HTMLNotFoundElement
    'system-page': HTMLSystemPageElement
  }

  interface ElementTagNameMap {
    'app-root': HTMLAppRootElement;
    'go-back-component': HTMLGoBackComponentElement;
    'loader-component': HTMLLoaderComponentElement;
    'search-bar-component': HTMLSearchBarComponentElement;
    'tile-component': HTMLTileComponentElement;
    'home-page': HTMLHomePageElement;
    'not-found': HTMLNotFoundElement;
    'system-page': HTMLSystemPageElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
