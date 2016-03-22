import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Wrapped from '../App';
import { tick } from 'actions/yali-actions';

export default connect(
  () => ({}),
  dispatch => bindActionCreators({
    tick
  }, dispatch)
  )(Wrapped);
