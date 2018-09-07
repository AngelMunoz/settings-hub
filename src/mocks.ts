
export const tileList = [
  {
    name: 'System',
    image: '',
    description: '',
    url: '/system'
  },
  {
    name: 'Devices',
    image: '',
    description: '',
    url: '/devices'
  },
  {
    name: 'Phone',
    image: '',
    description: '',
    url: '/phone'
  },
  {
    name: 'Networks & Internet',
    image: '',
    description: '',
    url: '/networks'
  },
  {
    name: 'Personalization',
    image: '',
    description: '',
    url: '/personalization'
  },
  {
    name: 'Apps',
    image: '',
    description: '',
    url: '/apps'
  },
  {
    name: 'Accounts',
    image: '',
    description: '',
    url: '/accounts'
  },
  {
    name: 'Time & Language',
    image: '',
    description: '',
    url: '/time-and-language'
  },
  {
    name: 'Gaming',
    image: '',
    description: '',
    url: '/gaming'
  },
  {
    name: 'Ease of Access',
    image: '',
    description: '',
    url: '/ease-of-access'
  },
  {
    name: 'Cortana',
    image: '',
    description: '',
    url: '/cortana'
  },
  {
    name: 'Privacy',
    image: '',
    description: '',
    url: '/privacy'
  },
  {
    name: 'Update & Security',
    image: '',
    description: '',
    url: '/update-and-security'
  },
];


export async function mockService(resource: string) {
  await new Promise(resolve => setTimeout(() => resolve(), 200));
  switch (resource) {
    case 'tiles':
      return tileList;
  }
}