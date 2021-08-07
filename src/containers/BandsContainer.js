import React, { Component } from 'react'
import { connect } from 'react-redux'

class BandsContainer extends Component {

  renderBands = () => this.props.bands.map((band, i) => { return (<li key={i}>{band}</li>) })
  render() {
    return (
      <div>
        <ul>
          {this.renderBands()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { bands: state.bands }
}

export default connect(mapStateToProps)(BandsContainer)
