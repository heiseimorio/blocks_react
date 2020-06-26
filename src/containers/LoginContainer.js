import { connect } from 'react-redux';
import { goHomePage } from '../actions/index';
import LoginComponent from '../components/LoginComponent';


const mapStateToProps = (state) => ({
  app: state,
})

const mapDispatchToProps = (dispatch) => ({
  goHome: () => dispatch(goHomePage()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent)