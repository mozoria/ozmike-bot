import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'
// import { throws } from 'assert'

class PersonalDetails extends Component {
    saveAndContinue = (event) => {
      event.preventDefault()
      this.props.nextStep()
    }

    back = (event) => {
      event.preventDefault()
      this.props.prevStep()
    }

    render () {
      const { values } = this.props
      return (
        <Form color='blue' >
          <h1 className="ui centered">Enter Personal Details</h1>
          <Form.Field>
            <label>Adress</label>
            <input placeholder='Address'
              onChange={this.props.handleChange('address')}
              defaultValue={values.address}
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input placeholder='City'
              onChange={this.props.handleChange('city')}
              defaultValue={values.city}
            />
          </Form.Field>
          <Form.Field>
            <label>Country</label>
            <input placeholder='Zipcode'
              onChange={this.props.handleChange('zipcode')}
              defaultValue={values.zipcode}
            />
          </Form.Field>
          <Form.Field>
            <label>Payment Information</label>
            <input placeholder='Payment Information'
              onChange={this.props.handleChange('payment')}
              defaultValue={values.payment}
            />
          </Form.Field>
          <Button onClick={this.back}>Back</Button>
          <Button onClick={this.saveAndContinue}>Save And Continue </Button>
        </Form>
      )
    }
}

export default PersonalDetails
