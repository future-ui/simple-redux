import Counter from '../components/Counter';
import { incrementCounter } from '../actions/CounterActions';
import { connect } from 'react-redux';

// Map Redux state to component props
function select(state)  {
  return {
    value: state.count
  };
}

// Connected Component:
export default connect(select)(Counter);
