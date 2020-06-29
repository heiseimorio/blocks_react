import { connect } from 'react-redux';
import {  } from '../actions/index';
import LobbyComponent from '../components/LobbyComponent';


const mapStateToProps = (state) => ({
  app: state,
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LobbyComponent)