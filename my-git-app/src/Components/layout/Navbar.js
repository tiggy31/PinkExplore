import React, { Component } from 'react'
import PropTypes from 'prop-types'


export  const Navbar = ({icon,name}) => {
        return (
            <nav className = "navbar bg-primary">
            <h1>
               <i className = {icon} />  {name}
            </h1>
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

