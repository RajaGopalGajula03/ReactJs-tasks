import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Currency from './Currency';
import "./cryptocurrency.css";

export default function Crypto() {
  return (
    <BrowserRouter className="bg-black">
        <Routes>
            <Route path='/' element={<Currency />}/>
        </Routes>
    </BrowserRouter>
  )
}
