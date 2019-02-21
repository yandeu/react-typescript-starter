import React from 'react'
import { render } from 'react-dom'
import './styles.css'

const App = () => {
  return (
    <div>
      <h1>react app</h1>
      <img id="logo" src="public/img/React-icon.svg" />
    </div>
  )
}

render(<App />, document.getElementById('root'))
