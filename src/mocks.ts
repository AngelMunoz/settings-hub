
export const tileList = [
  {
    name: 'System',
    icon: 'mdl2 mdl2-2x mdl2-go-to-start',
    description: 'Display, sound, notifications, power',
    url: '/system'
  },
  {
    name: 'Devices',
    icon: 'mdl2 mdl2-2x mdl2-keyboard-classic',
    description: 'Bluetooth, printers, mouse',
    url: '/devices'
  },
  {
    name: 'Phone',
    icon: 'mdl2 mdl2-2x mdl2-cellphone',
    description: 'Link your Android, iPhone',
    url: '/phone'
  },
  {
    name: 'Networks & Internet',
    icon: 'mdl2 mdl2-2x mdl2-globe',
    description: 'Wi-Fi, airplane mode, VPN',
    url: '/networks'
  },
  {
    name: 'Personalization',
    icon: 'mdl2 mdl2-2x mdl2-preview-link',
    description: 'Background, lock screen, colors',
    url: '/personalization'
  },
  {
    name: 'Apps',
    icon: 'mdl2 mdl2-2x mdl2-all-apps',
    description: 'Uninstall, defaults, optional features',
    url: '/apps'
  },
  {
    name: 'Accounts',
    icon: 'mdl2 mdl2-2x mdl2-contact',
    description: 'Your accounts, email, sync, work, family',
    url: '/accounts'
  },
  {
    name: 'Time & Language',
    icon: 'mdl2 mdl2-2x mdl2-characters',
    description: 'Speech, region, date',
    url: '/time-and-language'
  },
  {
    name: 'Gaming',
    icon: 'mdl2 mdl2-2x mdl2-switch-apps',
    description: 'Game bar, DVR, broadcasting, game mode',
    url: '/gaming'
  },
  {
    name: 'Ease of Access',
    icon: 'mdl2 mdl2-2x mdl2-view-all',
    description: 'Narrator, Magnifier, high contrast',
    url: '/ease-of-access'
  },
  {
    name: 'Privacy',
    icon: 'mdl2 mdl2-2x mdl2-admin',
    description: 'Location, camera',
    url: '/privacy'
  },
  {
    name: 'Update & Security',
    icon: 'mdl2 mdl2-2x mdl2-sync',
    description: 'Windows Updates, recovery, backup',
    url: '/update-and-security'
  },
  {
    name: 'Search',
    icon: 'mdl2 mdl2-2x mdl2-zoom',
    description: 'Language, permissions, history',
    url: '/search'
  },
];


export async function mockService(resource: string, ms: number = 200) {
  await new Promise(resolve => setTimeout(() => resolve(), ms));
  switch (resource) {
    case 'tiles':
      return tileList;
  }
}