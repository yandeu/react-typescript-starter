import React from 'react'
import { render } from 'react-dom'
import reactIcon from '../public/img/React-icon.svg'
import './styles.css'

const App = () => {
  return (
    <div>
      <h1>react app</h1>
      <img id="logo" src={reactIcon} />
    </div>
  )
}

render(<App />, document.getElementById('root'))
