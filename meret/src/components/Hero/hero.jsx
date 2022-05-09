import React from 'react'
import './hero.style.scss'
import { withRouter } from 'react-router-dom'

const Hero = ({history}) => {
    return (
        <section className="hero is-info is-large hero-image">
        <div className="hero-body">
          <div className="container">
            <h1 className="hero-title">
              MUST HAVE ITEMS
            </h1>
            <div className='shop-now-btn'>
              <button className='button is-black' id='shop-now'
               onClick= {() => history.push('/shop')}
              >
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </section>
    )
}

export default withRouter(Hero)