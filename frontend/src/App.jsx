import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Createbooks from './pages/Createbooks'
import ShowBook from './pages/Showbook'
import EditBook from './pages/EditBook'
import DeleteBook from './pages/DeleteBook'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/books/create" element={<CreateBook/>} />
      <Route path="/books/details/:id" element={<ShowBook/>} />
      <Route path="/books/edit/:id" element={<EditBook/>} />
      <Route path="/books/delete/:id" element={<DeleteBook/>} />
    </Routes>
  )
}

export default App
