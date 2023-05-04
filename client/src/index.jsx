import React from 'react'
import { createRoot } from 'react-dom/client'
import Overview from './components/overview/overview.jsx'
import ReviewList from './components/reviews/reviewlist.jsx'


const App = () => {

  return (
    <div>
      test
      {/* <Overview /> */}
      {/* <ReviewList /> */}
    </div>
  )
}

const container = document.getElementById('root')
const root = createRoot(container);
root.render(<App />);


