import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import NotFound  from  './pages/NotFound'
import Signin from './pages/Signin'


export default () => {
  return (
    <Switch>
     <Route exact path="/">
       <Home />
     </Route>
     <Route exact path="/sobre">
       <Sobre />
     </Route>
     <Route exact path="/signin">
       <Signin />
     </Route>
     <Route> 
       <NotFound />
     </Route>
    </Switch>
  )
}