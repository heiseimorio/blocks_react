import React from 'react'
import PropTypes from 'prop-types'

const LobbyComponent = ({ app }) => {

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
      <h1>Lobbyを表示する場所</h1>
    </div>
  );
};

LobbyComponent.propTypes = {
  app: PropTypes.shape({}).isRequired,
}

export default LobbyComponent