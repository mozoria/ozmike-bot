import React from 'react'
import { Link } from 'react-router-dom'
import aj1 from '../HomeImage/AJ1-Chi.jpg'

const Home = () => (
  <div className='home'>
    <img src={aj1}/>
    <Link to='/shoes'><button className='btn btn-dark'>View Shoes</button>
    </Link>
  </div>
)

export default Home
