import React from 'react'
import './footer.style.scss'

const Footer = () => {
    const year = new Date().getFullYear()
   return(
       <div className="footer">
           Meret {year} 
       </div>
   )
}

export default Footer