import React from 'react'
import { createRoot } from 'react-dom/client'
import ReviewList from './components/reviews/reviewlist.jsx'


const App = () => {

  return (
    <div>
      test
      <ReviewList />
    </div>
  )
}

const container = document.getElementById('root')
const root = createRoot(container);
root.render(<App />);


