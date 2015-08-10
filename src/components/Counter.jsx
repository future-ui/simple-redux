import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as CounterActions from '../actions/CounterActions';

export default class Counter extends Component {

  render() {
    const { value, dispatch } = this.props;
    const actions = bindActionCreators(CounterActions, dispatch);
    return (
      <div>
        <h1>{value}</h1>
        <button onClick={actions.incrementCounter}>+1</button>
      </div>
    );
  }

}

