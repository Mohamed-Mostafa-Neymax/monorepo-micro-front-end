import { initFederation } from '@angular-architects/native-federation';

initFederation({ 'app-two-info': './remoteEntry.json' })
  .catch(err => console.error(err))
  .then(_ => import('./bootstrap'))
  .catch(err => console.error(err));
