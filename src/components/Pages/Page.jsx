import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from '../Home/Home'
import {Header} from '../Common/Header'

function Page() {
  return (
    <>
        <Router>
                <Header/>
                <Switch>
                    <Route exact path='/' component={Home} />
                </Switch>
        </Router>
      
    </>
  )
}

export default Page

