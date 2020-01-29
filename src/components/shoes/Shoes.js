
import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'

class Shoes extends Component {
  constructor (props) {
    super(props)

    this.state = {
      shoes: []
    }
  }

  componentDidMount () {
    axios({
      url: 'http://localhost:4741/shoes',
      method: 'GET'
    })
      .then((res) => {
        this.setState({ shoes: res.data.shoes })
      })
      .catch(console.error)
  }

  render () {
    let shoesJsx

    if (!this.state.shoes.length) {
      shoesJsx = <p>Loading...</p>
    } else {
      shoesJsx = this.state.shoes.map(shoe => (
        <ListGroup key={shoe._id}>
          <Link
            to={'/shoes/' + shoe._id}>{shoe.name}
          </Link>
        </ListGroup>
      ))
    }

    return (
      <ul>{shoesJsx}</ul>
    )
  }
}

export default Shoes
