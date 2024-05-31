import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar.jsx'
import Header from './Components/Header/Header.jsx'
import Main from './Components/Main/Main.jsx'
import Footer from './Components/Footer/Footer.jsx'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.jsx'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
      <Router>
            <div className='gridStructure'>
                  <Header>
                        <Navbar /> 
                  </Header>
                  <Main>
                        
                  </Main>
                  <Footer>

                  </Footer>
                  
                  <Routes>
                        <Route exact path='/' element={<ItemListContainer />} />
                        <Route path={'/category/:id'} element={<ItemListContainer />} />
                        <Route path='/item/:id' element={<ItemDetailContainer/>} /> 
                        {/*  <ItemListContainer test='Probando envio de props al componente Item ListContainer' /> */}
                  </Routes>
            </div>
      </Router>
  )
}

export default App
