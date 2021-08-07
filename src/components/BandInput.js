// Add BandInput component
import { connect } from 'react-redux'
import React, { Component } from 'react'

class BandInput extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state)
    this.setState({ name: '' })
  }

  handleChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' placeholder='Bandname' value={this.state.name} onChange={(e) => { this.handleChange(e) }} />
          <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addBand: formData => dispatch({ type: 'ADD_BAND', payload: formData })
})

export default connect(null, mapDispatchToProps)(BandInput)
