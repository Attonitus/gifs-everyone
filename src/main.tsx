import React from 'react'
import ReactDOM from 'react-dom/client'
import { GifExpertApp } from './GifExpertApp'
import { CategoryProvider } from './context/categories-context';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CategoryProvider>
      <GifExpertApp  />
    </CategoryProvider>
  </React.StrictMode>,
)
