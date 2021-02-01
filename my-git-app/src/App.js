import React,{Component} from 'react';
import NavBar from './Components/layout/Navbar'
import Users from './Components/users/Users'
import './App.css'
class App extends Component{

    componentDidMount() {
      console.log("hello")
    }

  render(){
      
    return(
 
         <div>
           <NavBar name="Github Finder"  icon = "fab fa-github"/>
           <div className= "container">
              <Users />
           </div>
         </div>
           
    )
  }
}

export default App;
