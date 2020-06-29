import React from 'react'
import PropTypes from 'prop-types'
import imgUrl from '../blocks_image.jpg'

const HomeComponent = ({ goLogin, app, goLobby }) => {

  const formSignIn = {
    maxWidth: 330,
    padding: 15,
    margin: "0 auto",
  };

  const formSignInHeading = {
    marginBottom: 10,
    textAlign: "center",
  };

  const signUp = {
    color: "#007bff",
    textDecoration: "none",
    backgroundColor: "transparent",
  };

  const pStyle = {
    textAlign: "center",
  }

  return (

  <div className={"container"}>

      <form style={formSignIn}>
        <h2 style={formSignInHeading}>Blocks <small>by react+redux</small></h2>

        <img src={imgUrl} className="App-logo" alt="logo" width="100%"/>

        <hr />


        <p style={pStyle}>
            <button
              className={"btn btn-lg btn-primary btn-block"}
              onClick={() => goLogin(app)}
            >
              ログイン
            </button>
        </p>

        <p style={signUp}>
              <button
                className={"btn btn-lg btn-success btn-block"}
                onClick={() => goLobby(app)}
              >
              新規アカウント登録する
            </button>

        </p>
      </form>

    </div>
  );
};

HomeComponent.propTypes = {
  goLogin: PropTypes.func.isRequired,
  goLobby: PropTypes.func.isRequired,
  app: PropTypes.shape({}).isRequired,
}

export default HomeComponent