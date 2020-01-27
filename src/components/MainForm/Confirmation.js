import React, { Component } from 'react'
import { Button, List } from 'semantic-ui-react'

class Confirmation extends Component {
    saveAndContinue = (preventDefault) => {
      event.preventDefault()
      this.props.nextStep()
    }

    back = (event) => {
      event.preventDefault()
      this.props.prevStep()
    }

    render () {
      const { values: { firstName, lastName, email, address, city, zipcode, payment } } = this.props

      return (
        <div>
          <h1 className="ui centered">Confirm your Details</h1>
          <h3>Please Confirm The Information Provided Is Accurate</h3>
          <List>
            <List.Item>
              <List.Icon name='users' />
              <List.Content>First Name: {firstName}</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='users' />
              <List.Content>Last Name: {lastName}</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='mail' />
              <List.Content>
                <a href='example@example'>{email}</a>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='calendar' />
              <List.Content>{address} Location</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='marker' />
              <List.Content>{city}, {zipcode}</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='payment' />
              <List.Content>{payment}</List.Content>
            </List.Item>
          </List>

          <Button onClick={this.back}>Back</Button>
          <Button onClick={this.saveAndContinue}>Confirm</Button>
        </div>
      )
    }
}

export default Confirmation
