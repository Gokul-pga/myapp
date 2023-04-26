import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Website from './layout/Website';
import Loginpage from './pages/Loginpage';
import TestAPI from './TestAPI';
import ToDolist from './todolist/ToDolist';
import DefaultPage from './DefaultPage';



function App({pageProps}) {

  return (
    <>
    
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<DefaultPage/>} />
    <Route path='/Loginpage' element={<Loginpage/>} />
      <Route path='/Website' element={<Website/>} />
      <Route path='/testapi' element={<TestAPI/>} />
      <Route path='/ToDolist' element={<ToDolist/>} />

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;