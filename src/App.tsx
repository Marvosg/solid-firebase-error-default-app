import type { Component } from 'solid-js'
import { Match, Switch } from 'solid-js'

import { useAuth } from 'solid-firebase'
import { getAuth } from 'firebase/auth'

import Login from './Login'

const App: Component = () => {

  const auth = getAuth()
  const state = useAuth(auth)

  return (
    <Switch>
      <Match when={state.loading}>
        <p>Loading...</p>
      </Match>
      <Match when={state.error}>
        <Login />
      </Match>
      <Match when={state.data}>
        {/* <User data={state.data} /> */}
        Loaded
      </Match>
    </Switch>
  )
}

export default App
