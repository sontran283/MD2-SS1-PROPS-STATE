import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parent_Comp from './components/Parent_Comp'
import Childrent_Comp from './components/Children_Comp'
import Class_Comp from './components/Class_Comp'
import LishUser from './components/LishUser'


import Header from './components/Header'
import Toolbar from './components/Toolbar'
import Table from './components/Table'
import FormDelete from './components/FormDelete'
import FormAddStudent from './components/FormAddStudent'
import FormEditStudent from './components/FormEditStudent'


function App() {

  return (
    <>
      {/* <Childrent_Comp></Childrent_Comp>
      <Parent_Comp></Parent_Comp> */}
      {/* <Class_Comp /> */}
      {/* <LishUser></LishUser> */}
      <Header></Header>
      <Toolbar></Toolbar>
      <Table></Table>
      {/* <FormDelete></FormDelete>
      <FormAddStudent></FormAddStudent>
      <FormEditStudent></FormEditStudent> */}

    </>
  )
}

export default App
