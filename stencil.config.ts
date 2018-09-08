import { Config } from '@stencil/core';

// https://stenciljs.com/docs/config

export const config: Config = {
  namespace: 'tun-settings-hub',
  globalStyle: 'src/app.css',
  outputTargets: [
    {
      type: "dist",
    },
    {
      type: 'www'
    }
  ]
};
