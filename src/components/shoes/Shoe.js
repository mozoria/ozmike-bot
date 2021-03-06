import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

class Shoe extends Component {
  constructor (props) {
    super(props)

    this.state = {
      shoe: null,
      deleted: false
    }
  }

  componentDidMount () {
    axios({
      url: `${apiUrl}/shoes/${this.props.match.params.id}`,
      method: 'GET'
    })
      .then((res) => {
        this.setState({ shoe: res.data.shoe })
      })
      .catch(console.error)
  }

  handleDelete = () => {
    axios({
      url: `${apiUrl}/shoes/${this.props.match.params.id}`,
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      }
    })
      .then(this.props.history.push('/'))
      .then(() => this.props.alert({
        heading: 'woot woot',
        message: 'you deleted a shoe',
        variant: 'success'
      }))
      .catch(console.error)
  }

  render () {
    if (!this.state.shoe) {
      return <p>Loading</p>
    }
    return (
      <div>
        <h2>{this.state.shoe.name}</h2>
        {this.props.user && (this.props.user._id === this.state.shoe.owner) &&
            (
              <div>
                <Link className="btn btn-primary" to={`/shoes/${this.props.match.params.id}/edit`}>Edit</Link>
                <button className="btn btn-danger" onClick={this.handleDelete}>Delete</button>
              </div>
            )}
      </div>
    )
  }
}

export default Shoe
