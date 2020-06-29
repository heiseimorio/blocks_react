import { connect } from 'react-redux';
import { goLoginPage, showLobby } from '../actions/index';
import HomeComponent from '../components/HomeComponent';


const mapStateToProps = (state) => ({
  app: state,
})

const mapDispatchToProps = (dispatch) => ({
  goLogin: () => dispatch(goLoginPage()),
  goLobby: () => dispatch(showLobby()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent)