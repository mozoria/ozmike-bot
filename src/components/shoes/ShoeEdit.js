import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import ShoeForm from './ShoeForm'
import axios from 'axios'
import apiUrl from '../../apiConfig'

class ShoeEdit extends Component {
  constructor (props) {
    super(props)

    this.state = {
      shoe: {
        title: '',
        author: ''
      },
      updated: false
    }
  }

  componentDidMount () {
    axios(`${apiUrl}/shoes/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ shoe: res.data.shoe })
      })
      .catch(console.error)
  }

  handleChange = (event) => {
    this.setState({
      shoe: {
        ...this.state.shoe,
        [event.target.name]: event.target.value
      }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/shoes/${this.props.match.params.id}`,
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      },
      data: {
        shoe: this.state.shoe
      }
    })
      .then(res => this.setState({ updated: true }))
      .then(() => this.props.alert({
        heading: 'woot woot',
        message: 'you updated a shoe',
        variant: 'success'
      }))
      .catch(() => this.props.alert({
        heading: 'something went wrong',
        message: 'try again',
        variant: 'danger'
      }))
  }

  render () {
    if (this.state.updated) {
      return <Redirect to={`/shoes/${this.props.match.params.id}`}/>
    }

    return (
      <ShoeForm
        shoe={this.state.shoe}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default ShoeEdit
