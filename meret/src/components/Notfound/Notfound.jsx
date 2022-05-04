import React from 'react'
import Layout from '../Layout/Layout'

const Notfound = () => {
   const style ={
       fontWeight: 'bold',
       textAlign: 'center'
   }

   return(
       <Layout>
           <p style={style}>Not found</p>
       </Layout>
   )
}

export default Notfound