import React, { useState } from 'react'
import './App.css'
import NewsBody from './Components/NewsBody'
import Navbar from './Components/Navbar'
import Pagination from './Components/Pagination'
import NewsItem from './Components/NewsItem'
function App() {
  const [category, setCategory] = useState('general')
  return (
    <>
    <Navbar setCategory={setCategory}/>
    <NewsBody category={category}/>
    
    </>
  )
}

export default App
