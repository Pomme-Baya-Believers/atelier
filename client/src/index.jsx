import React from 'react'
import { createRoot } from 'react-dom/client'
import Overview from './components/overview/overview.jsx'

const App = () => {

  return (
    <div>
      test
      <Overview />
    </div>
  )
}

const container = document.getElementById('root')
const root = createRoot(container);
root.render(<App />);


