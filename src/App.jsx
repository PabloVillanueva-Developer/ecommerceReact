import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './assets/Components/Navbar/Navbar.jsx'
import Header from './assets/Components/Header/Header.jsx'
import Main from './assets/Components/Main/Main.jsx'
import Footer from './assets/Components/Footer/Footer.jsx'
import ItemListContainer from './assets/Components/ItemListContainer/ItemListContainer.jsx'


function App() {
  return (
    <div className='gridStructure'>
          <Header>
                <Navbar />
          </Header>
          <Main>
                <ItemListContainer test='Probando envio de props al componente Item ListContainer' />
          </Main>
          <Footer>

          </Footer>
    </div>
  )
}

export default App
