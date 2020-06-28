import { connect } from 'react-redux';
import { goLoginPage } from '../actions/index';
import HomeComponent from '../components/HomeComponent';


const mapStateToProps = (state) => ({
  app: state,
})

const mapDispatchToProps = (dispatch) => ({
  goLogin: () => dispatch(goLoginPage()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent)