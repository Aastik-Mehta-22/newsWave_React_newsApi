import React, { useState } from 'react'
import Navbar from './components/Navbar'
import NewsBoard from './components/NewsBoard'
function App() {


  const [category,setCategory] = useState("entertainment")
  return (
    <div>

      <Navbar setCategory={setCategory}/>
      <NewsBoard category={category}/>

    </div>
  )
}

export default App


