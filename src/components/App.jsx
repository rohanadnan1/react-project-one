import React from 'react'
import Header from './Header'
import Home from './Home'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import "../styles/App.scss"
import "../styles/Header.scss"
import "../styles/Home.scss"
import Footer from './Footer'
import "../styles/footer.scss"
import "../styles/contact.scss"
import Contact from './Contact'
import Services from './Services'
import "../styles/mediaquery.scss"



const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/services' element={<Services/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App