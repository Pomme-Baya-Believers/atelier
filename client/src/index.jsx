import React from 'react'
import { createRoot } from 'react-dom/client'
import RelatedProductsCard from './components/Related/RelatedProductCard.jsx'


const App = () => {

  return (
    <div>
      RelatedProductCard
    </div>
  )
}

const container = document.getElementById('root')
const root = createRoot(container);
root.render(<App />);


