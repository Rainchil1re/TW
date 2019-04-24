import { connect } from 'dva';
import Agents from '../components/Agents'

const mapStateToProps = state => state.agents;
const mapDispatch = dispatch => ({
  fetchOrderList: payload => (dispatch({ type: 'agents/fetchOrderList', payload })),
  onChange: payload => (dispatch({ type: 'agents/update', payload }))
});

export default connect(mapStateToProps, mapDispatch)(Agents);

