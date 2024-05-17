import { useState } from 'react'
import { Route, Routes, BrowserRouter } from "react-router-dom"

import './App.css'
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from "./containers/index"
import { CTA, Brand, Navbar } from "./components/index"
import Routing from './Routing'
import Chat from './containers/chat/Chat'
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Routing />} />
        <Route path="chat" element={<Chat />} />

      </Routes>


    </BrowserRouter>

  )

}
export default App
