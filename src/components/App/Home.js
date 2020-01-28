import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { Link } from 'react-router-dom'

const Home = () => (
  <div className="container">
    <Jumbotron>
      <h1>Welcome!</h1>
      <p>
  The OZMIKE bot is the the fastest and most reliable bot currently on the market!
      </p>
    </Jumbotron>
    <div className="row mt-5">
      <div className="col-lg-4 mb-4 grid-margin">
        <div className="card h-100">
          <h4 className="card-header">Why?</h4>
          <div className="card-body">
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapien</p>
          </div>
          <div className="card-footer">
          </div>
        </div>
      </div>
      <div className="col-lg-4 mb-4 grid-margin">
        <div className="card h-100">
          <h4 className="card-header">How?</h4>
          <div className="card-body">
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
          </div>
          <div className="card-footer">
          </div>
        </div>
      </div>
      <div className="col-lg-4 mb-4 grid-margin">
        <div className="card h-100">
          <h4 className="card-header">When?</h4>
          <div className="card-body">
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
          </div>
          <div className="card-footer">
          </div>
        </div>
      </div>
    </div>
    <div>
      <Link to='/shoes'><button className='btn btn-dark'>View Shoes</button></Link>
    </div>
  </div>
)

export default Home
