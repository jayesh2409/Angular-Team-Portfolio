
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/team"
  },
  {
    "renderMode": 2,
    "route": "/about"
  },
  {
    "renderMode": 2,
    "route": "/recruitment"
  },
  {
    "renderMode": 2,
    "route": "/sponsors"
  },
  {
    "renderMode": 2,
    "redirectTo": "/vehicles/infiniti1o",
    "route": "/vehicles"
  },
  {
    "renderMode": 2,
    "route": "/vehicles/infiniti1o"
  },
  {
    "renderMode": 2,
    "route": "/vehicles/infiniti2o"
  },
  {
    "renderMode": 2,
    "route": "/vehicles/infiniti3o"
  },
  {
    "renderMode": 2,
    "route": "/vehicles/infiniti5o"
  },
  {
    "renderMode": 2,
    "route": "/vehicles/infiniti6o"
  },
  {
    "renderMode": 2,
    "route": "/vehicles/infiniti7o"
  },
  {
    "renderMode": 2,
    "route": "/vehicles/infiniti8o"
  },
  {
    "renderMode": 2,
    "route": "/vehicles/anantam"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 12720, hash: '5409353941d709fbdb284ca227ebeb50ad1647db0f0801970010665253ce020c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 13087, hash: '1f34207dfc237c1423a62ae148e85ca0748a09d59fa5187978b2934dd6d916c1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 37483, hash: 'e11a3e6d2573aedc14288581a0814f3521a66f7f96337fbb0b11258793cceb5a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'team/index.html': {size: 32862, hash: 'c692fdf1f36a26137f1346673728ce537e7c7933dc2562401978326d149fd41a', text: () => import('./assets-chunks/team_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 26305, hash: 'c0a507d35f5787248d1909bbd198834db7aa882fb17fefa4b71c36b33a9cdab2', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'recruitment/index.html': {size: 32023, hash: 'c73fc11d300dc40f0e949cbc4f683378bad2223674e868ed3a7948087ffdde27', text: () => import('./assets-chunks/recruitment_index_html.mjs').then(m => m.default)},
    'sponsors/index.html': {size: 31645, hash: '1fd92e938e3dc18d4e9cba64e62bec0ea701b4303af38860917aca48ad08e100', text: () => import('./assets-chunks/sponsors_index_html.mjs').then(m => m.default)},
    'vehicles/infiniti1o/index.html': {size: 27476, hash: 'cd4d61e5cf6b69579ed564668b9ffe338155e46bc68946b25317f48fec9061fe', text: () => import('./assets-chunks/vehicles_infiniti1o_index_html.mjs').then(m => m.default)},
    'vehicles/infiniti3o/index.html': {size: 27442, hash: '5258f9973ad6ab8dca6b14c00fa880abaff8303435fdd79ee1c56df2af33322d', text: () => import('./assets-chunks/vehicles_infiniti3o_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 37483, hash: 'e11a3e6d2573aedc14288581a0814f3521a66f7f96337fbb0b11258793cceb5a', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'vehicles/infiniti5o/index.html': {size: 27393, hash: 'feca957b303a5d453f768f6d428f2b71e9e4fe7b59bc498b14d1a885c36c9916', text: () => import('./assets-chunks/vehicles_infiniti5o_index_html.mjs').then(m => m.default)},
    'vehicles/infiniti8o/index.html': {size: 27171, hash: 'eb275e5074da92b8900c1f9c1bce4f9d4db82835a597ca0ced1fc67cc5ebba73', text: () => import('./assets-chunks/vehicles_infiniti8o_index_html.mjs').then(m => m.default)},
    'vehicles/infiniti7o/index.html': {size: 27369, hash: '1bb6456cf3696c41320e737bf72be798f2c71f25e3c9813a485f33bdb2a64fdb', text: () => import('./assets-chunks/vehicles_infiniti7o_index_html.mjs').then(m => m.default)},
    'vehicles/anantam/index.html': {size: 27021, hash: '77024ccdbd9b8b1b894da8ae7beb45d94f6103a5c9faedfb3d59e9ca4edc9c98', text: () => import('./assets-chunks/vehicles_anantam_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 24319, hash: 'ec26835a9e64c855623e631b65190a93228c103b0fe4425be50fe582500599b5', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'vehicles/infiniti2o/index.html': {size: 27054, hash: '95f976a55f1614f8d8f6a609ab0fae6271837b5d4e9e0406cd570cea0971fa80', text: () => import('./assets-chunks/vehicles_infiniti2o_index_html.mjs').then(m => m.default)},
    'vehicles/infiniti6o/index.html': {size: 27388, hash: '7be42186f9aae6f543f4327d69fb4e8a2839f3460024d6b2c54e6dfcedc09bf6', text: () => import('./assets-chunks/vehicles_infiniti6o_index_html.mjs').then(m => m.default)},
    'styles-JS6DPDQE.css': {size: 22, hash: 'Xk4Jh7E9UeA', text: () => import('./assets-chunks/styles-JS6DPDQE_css.mjs').then(m => m.default)}
  },
};
