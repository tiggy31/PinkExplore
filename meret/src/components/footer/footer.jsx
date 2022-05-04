import React from 'react'
import './footer.style.scss'

const Footer = () => {
    const year = new Date().getFullYear()
   return(
       <div className="footer">
           {year}Meret
       </div>
   )
}

export default Footer