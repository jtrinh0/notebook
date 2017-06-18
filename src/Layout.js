import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Antdplayground, Crumbs } from './Antdplayground'
import { Navbar } from './Navbar'
import { Header } from './Header'
import { LineDivider1, LineDivider2 } from './LineDivider'
import { Body } from './Body'
import circleprofile from './circle profile.png'

export const Layout = ({children, store, title}) => <div className="App" style={{background:"#F8ECC1"}}>
        <Navbar store={store}/>
        <Header store={store} title={title}/>

        <p className="App-intro">

            {children}

          <LineDivider1/>
          <LineDivider2/>

          <Antdplayground store={store}/><br/><br/>
          <Crumbs/>
        </p>
      </div>