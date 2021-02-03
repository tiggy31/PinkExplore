import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export  const Navbar = ({icon,name}) => {

        return (
            <nav className = "navbar bg-primary">
            <h1>
               <i className = {icon} />  {name}
            </h1>
            <ul>
              <li>
                 <Link to='/'>Home</Link>
              </li>
              <li>
              <Link to='/about'> About</Link>
              </li>
            </ul>
        </nav>
        ) 
}

      

Navbar.defaultProps = {
    name: "red",
    icon: "blue"
}

Navbar.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

export default Navbar

