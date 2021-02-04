import React,{Component, Fragment} from 'react';
import NavBar from './Components/layout/Navbar'
import Users from './Components/users/Users'
import Search from './Components/users/Search'
import Alert from './Components/layout/Alert'
import About from './Components/pages/About'
import User from './Components/users/User'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import axios from 'axios'
import './App.css'
class App extends Component{
     state = {
       users: [],
       user:{},
       repos:[],
       loading: false,
       alert:null
     }
    
searchUsers = async text => {
   this.setState({
     loading:true
   })
   const res = await axios.get(
    `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
   )


   this.setState({users: res.data.items, loading:false})
   console.log(this.state.user)
}


getUsers = async username => {
  this.setState({
    loading:true
  })
  const resin = await axios.get(
   `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  )


  this.setState({user: resin.data, loading:false})

}


getUsersRepos = async (username) => {
      const res = await axios.get(
        `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      )
      this.setState({repos: res.data, loading:false})

}


  
clearUsers  = () => {
  this.setState({
    users:[],
    loading: false
  })
}

setAlert = (msg,type) => {
   this.setState({
     alert: {
              msg: msg,
              type: type
            }
   })

   setTimeout(() => this.setState({alert: null}),3000)
}

  render(){
      const {users,user,loading,repos} = this.state
        console.log(this.resin)
      console.log(this.state.user, "coming from gethUsers call")
   
    return(
  
       <Router>
         <div>
           <NavBar name="Github Finder"  icon = "fab fa-github"/>
           <div className= "container">
             <Alert alert={this.state.alert}/>
             <Switch>
               <Route exact path='/'render={props => (
                 <Fragment>
                    <Search 
                  searchUsers = {this.searchUsers}  
                  clearUsers={this.clearUsers}
                  showButton={users.length> 0 ? true:false}
                  setAlert={this.setAlert}/>

              <Users loading={loading} users={users}/>
                 </Fragment>
               )} />

               <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' render={props => (
                <User {...props} getUser={this.getUsers} user={user} loading={loading} getUsersRepos={this.getUsersRepos} repos={repos}/>
              )} />
             </Switch>
             
           </div>
         </div>
         </Router>
           
    )
  }
}

export default App;
