/* eslint-disable no-unused-vars */
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import CreateLibro from './pages/CreateLibros'
import EditLibro from './pages/EditLibro'
import DeleteLibro from './pages/DeleteLibro'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/libros/create' element={<CreateLibro/>} />
      <Route path='/libros/edit/:id' element={<EditLibro/>} />
      <Route path='/libros/delete/:id' element={<DeleteLibro/>} />
    </Routes>
  )
}

export default App