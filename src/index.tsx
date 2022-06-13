import { render } from 'solid-js/web'
import { FirebaseProvider } from 'solid-firebase'
import type { FirebaseOptions } from 'firebase/app'

import App from './App'

const firebaseConfig : FirebaseOptions = {
  apiKey: '<insert>',
  authDomain: '<insert>',
  projectId: '<insert>',
  storageBucket: '<insert>',
  messagingSenderId: '<insert>',
  appId: '<insert>',
}

render(
  () => (
    <FirebaseProvider config={firebaseConfig}>
      <App />
    </FirebaseProvider>
  ),
  document.getElementById('root') as HTMLElement,
)
