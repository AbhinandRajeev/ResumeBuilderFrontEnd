import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Routes,Route, } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import History from './Pages/History'
import Form from './Components/Form'
import ResumeGeneratorPage from './Pages/ResumeGeneratorPage'
import Preview from './Components/Preview'
import Steps from './Components/Steps'
import PageNotFound from './Pages/PageNotFound'
import Edit from './Components/Edit'

function App() {
  

  return (
    <>
     <Header/>
     <Routes>
      <Route path='' element = {<LandingPage/>}/>
      <Route path='form' element = {<Form/>}/>
      <Route path='history' element = {<History/>}/>
      <Route path='resume' element = {<ResumeGeneratorPage/>}/>
      <Route path='*' element = {<PageNotFound/>}/>
     </Routes>
     <Footer/> 
    </>
  )
}

export default App
