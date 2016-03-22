import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Wrapped from '../IndexPage';
import { consume } from 'actions/yali-actions';

export default connect(
  state => ({
    yali: state.yali,
  }),
  dispatch => bindActionCreators({
    consume
  }, dispatch)
)(Wrapped);
