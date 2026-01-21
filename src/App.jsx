import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'
import Playlist from './pages/Playlist'
import Liked from './pages/Liked'
import Nav from './components/Nav'
const App = () => {
  return (
    <BrowserRouter>
        <Nav/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/playlist' element={<Playlist />} />
        <Route path='/liked' element={<Liked />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App