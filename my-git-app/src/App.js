import React,{useState} from 'react';
import NavBar from './Components/layout/Navbar'
import Alert from './Components/layout/Alert'
import About from './Components/pages/About'
import User from './Components/users/User'
import Home from './Components/pages/Home'
import NotFound from './Components/pages/NotFound'
import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import axios from 'axios'
import './App.css'

const App = () =>{
  
    return(
      <GithubState>
        <AlertState>
       <Router>
         <div>
           <NavBar name="Github Finder"  icon = "fab fa-github"/>
           <div className= "container">
             <Alert />
             <Switch>
               <Route exact path='/'  component={Home}/>
               <Route exact path='/about' component={About} />
               <Route exact path='' component={NotFound} />
              <Route exact path='/user/:login' component={User}/>
             </Switch>
             
           </div>
         </div>
         </Router>
         </AlertState>
         </GithubState>
           
    )
  }

  


export default App;
