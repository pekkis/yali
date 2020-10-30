import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Wrapped from "../IndexPage";
import { consume } from "../../ducks/yali";
import { sendMessage } from "../../ducks/chat";

export default connect(
  (state) => ({
    yali: state.yali,
    messages: state.chat.get("messages"),
  }),
  (dispatch) =>
    bindActionCreators(
      {
        consume,
        sendMessage,
      },
      dispatch
    )
)(Wrapped);
