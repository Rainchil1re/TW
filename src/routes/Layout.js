import { connect } from 'dva';
import Nav from '../components/Nav'

const mapStateToProps = state => state.layout;
const mapDispatch = dispatch => ({
  fetchOrderList: payload => (dispatch({ type: 'layout/fetchOrderList', payload })),
  onChange: payload => (dispatch({ type: 'layout/update', payload }))
});

export default connect(mapStateToProps, mapDispatch)(Nav);

