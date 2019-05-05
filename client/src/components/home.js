import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class Home extends Component {
  componentDidMount(){
    this.props.tickIndex();
  }
  render() {
    let ticksIndex = this.props.ticks
    console.log(ticksIndex.tick)
    if (ticksIndex.tick){
      let ticksIndexArray = ticksIndex.tick
      return (
        <div>
        {ticksIndexArray.map((item, i) => (
          <div>
          <h1>{i+1}</h1>
            <p>Start Time: {item.startTime}</p>
              <p>Start Time: {item.startTime}</p>
          <p>Category: {item.category}</p>
          <p>Sub-Category: {item.subCategory}</p>
          <p>Title: {item.title}</p>
          <p>Description: {item.description}</p>
          <p>Notes: {item.notes}</p>
          <p>Media: {item.media}</p>
          </div>
        ))}
        </div>
      );
    } else {
      return (
        <p>nothing</p>
      )
    }
  }
}

function mapStateToProps (state) {
  return {
    ticks: state.state
  };
}

export default connect(mapStateToProps, actions)(Home);
