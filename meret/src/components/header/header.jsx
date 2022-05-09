import React,{useContext} from 'react'
import './header.scss'
import {Link} from 'react-router-dom'
import CartIcon from '../cart-icon/cart-icon'
import {auth} from '../../firebase'
import { UserContext } from '../../context/user-context'
import Hero from '../Hero/hero'


const Header = () => {
const {user} = useContext(UserContext)
console.log(user,'user')
   return(
      <nav className="nav-menu container">
        <div className="logo">
            <Link to="/">MERET</Link>
        </div>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
            <Link to='/shop'>Shop</Link>
            </li>

            {

           !user && <li>
             <Link to='/sign-in'>Sign in</Link>
           </li>

            }

            {

           user && <li onClick = {() => auth.signOut()}>
           <Link to='/sign-in'>Sign out</Link>
         </li>
            }


            {
                !user && <li>
                    <Link to="/sign-up">
                    Sign up
                    </Link>
                </li>

            }
        </ul>
        <CartIcon />
       
      </nav>
   )
}

export default Header