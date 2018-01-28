import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SampleActions from 'state/sample';
import 'styles/Counter.scss';

// A basic counter component connected to the redux store.
class Counter extends Component {
  render() {
    return (
      <div className="counter">
        <h1 className="value">{this.props.value}</h1>
        <button className="inc-button" onClick={this.props.incValue}>Increment</button>
        <button className="dec-button" onClick={this.props.decValue}>Decrement</button>
      </div>
    );
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  incValue: PropTypes.func.isRequired,
  decValue: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    value: state.sample.sampleValue,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incValue: () => dispatch(SampleActions.sampleIncrementAction()),
    decValue: () => dispatch(SampleActions.sampleDecrementAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
