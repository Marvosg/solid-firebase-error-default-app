import type { Component } from 'solid-js'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'

const Login: Component = () => {
  const auth = getAuth()
  const signIn = () => signInWithPopup(auth, new GoogleAuthProvider())

  return (
    <div class="w-full h-full flex">
      <button onClick={signIn}>Sign In with Google</button>
    </div>
  )
}

export default Login
