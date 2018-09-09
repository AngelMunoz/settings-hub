# Stencil App Starter

Stencil is a compiler for building fast web apps using Web Components.

Stencil combines the best concepts of the most popular frontend frameworks into a compile-time rather than run-time tool.  Stencil takes TypeScript, JSX, a tiny virtual DOM layer, efficient one-way data binding, an asynchronous rendering pipeline (similar to React Fiber), and lazy-loading out of the box, and generates 100% standards-based Web Components that run in any browser supporting the Custom Elements v1 spec.

Stencil components are just Web Components, so they work in any major framework or with no framework at all. In many cases, Stencil can be used as a drop in replacement for traditional frontend frameworks given the capabilities now available in the browser, though using it as such is certainly not required.

Stencil also enables a number of key capabilities on top of Web Components, in particular Server Side Rendering (SSR) without the need to run a headless browser, pre-rendering, and objects-as-properties (instead of just strings).

## Getting Started

```bash
npm install
npm start
```

To build the app for production, run:

```bash
npm run build
```

To run the unit tests once, run:

```
npm test
```

To run the unit tests and watch for file changes during development, run:

```
npm run test.watch
```
# Aurelia Meets Stencil and Angularjs
[Stencil]: https://stenciljs.com/
[Aurelia]: https://aurelia.io/
[tun-stencil-hub]: https://www.npmjs.com/package/tun-settings-hub
[Aurelia Repo]: https://github.com/AngelMunoz/settings-hub-au
[Angular Repo]: https://stackblitz.com/edit/tun-settings-hub

This is an [Stencil] Application that is used by an [Aurelia] Application as well as an AngularJs components from a npm published library [tun-settings-hub]. you can check the Other Repositories [Aurelia Repo] and [Angular Repo] which share the same components, in an agnostic way.


# Caveats
1. Stencil Plugin for webpack is necesary on `aurelia-cli` (webpack) based setups
2. Stencil Events should have the following form `my-event` instead of `myEvent`, Given the fact that Aurelia doesn't distinguish between cammel case events, Aurelia won't pick up the custom Event, unless the event is all on lowercase, angularjs doesn't care at all because you have to subscribe via `addEventListener` and there is no problem picking up the names there

Example: `<tun-search-bar on-search.delegate="onSearch($event)">` is okay, the following won't be picked up by aurelia `<tun-search-bar onSearch.delegate="onSearch($event)">`

On the Stencil Side: `@Event({ eventName: 'on-search' }) onSearch: EventEmitter;` is ok, and the following while it is not wrong, it won't work for aurelia `@Event({ eventName: 'onSearch' }) onSearch: EventEmitter;`


beyond that, everything related to bindings should work as normal, `bind, one-way, two-way`