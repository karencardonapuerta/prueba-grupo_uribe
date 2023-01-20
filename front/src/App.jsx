
import './App.css'
import { Header } from './components/helpers/layout/Header'
import 'bootstrap/'
import React from 'react'
import {Formulario} from './components/productos/Formulario'
import Table from './components/productos/Table'

//import Home from './components/helpers/layout/Home'



function App() {
   
   

  return (
    <section className='principal'>
   
     <Header/>
     <Formulario/>
     <Table/>
    </section>
    
  )
}

export default App
