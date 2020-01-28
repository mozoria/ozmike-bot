// import React, { useState } from 'react'
// import { Redirect } from 'react-router-dom'
// import ShoeForm from './ShoeForm'
// import axios from 'axios'
// import apiUrl from '../../apiConfig'
//
// const ShoeCreate = props => {
//   const [shoe, setShoe] = useState({ name: '', size: '', quantity: '' })
//   const [createdShoeId, setCreatedShoeId] = useState(null)
//
//   const handleChange = (event) => {
//     event.persist()
//     setShoe(shoe => ({ ...shoe, [event.target.name]: event.target.value }))
//   }
//
//   const handleSubmit = (event) => {
//     event.preventDefault()
//
//     axios({
//       url: `${apiUrl}/shoes`,
//       method: 'POST',
//       headers: {
//         'Authorization': `Token token=${this.props.user.token}`
//       },
//       data: { shoe }
//     })
//       .then(res => setCreatedShoeId(res.data.shoe._id))
//       .then(() => this.props.alert({
//         heading: 'woot woot',
//         message: 'you created a shoe',
//         variant: 'success'
//       }))
//       .catch(() => this.props.alert({
//         heading: 'something went wrong',
//         message: 'try again',
//         variant: 'danger'
//       }))
//   }
//
//   if (createdShoeId) {
//     return <Redirect to={`/shoes/${createdShoeId}`}/>
//   }
//
//   return (
//     <ShoeForm
//       shoe={shoe}
//       handleChange={handleChange}
//       handleSubmit={handleSubmit}
//     />
//   )
// }
//
// export default ShoeCreate

import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import ShoeForm from './ShoeForm'
import axios from 'axios'
import apiUrl from '../../apiConfig'

class ShoeCreate extends Component {
  constructor (props) {
    super(props)

    this.state = {
      shoe: {
        name: '',
        size: '',
        quantity: ''
      },
      createdId: ''
    }
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
    console.log(this.state.shoe)
    event.preventDefault()

    axios({
      url: `${apiUrl}/shoes`,
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      },
      data: {
        shoe: this.state.shoe
      }
    })
      .then(res => this.setState({ createdId: res.data.shoe._id }))
      .then(() => this.props.alert({
        heading: 'woot woot',
        message: 'you created a shoe',
        variant: 'success'
      }))
      .catch(() => this.props.alert({
        heading: 'something went wrong',
        message: 'try again',
        variant: 'danger'
      }))
  }

  render () {
    if (this.state.createdId) {
      return <Redirect to={`/shoes/${this.state.createdId}`}/>
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

export default ShoeCreate
