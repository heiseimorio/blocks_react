import React from 'react';
import blocksImg from '../blocks_image.jpg';
import Button from 'react-bootstrap/Button';

function Home() {

  const formSignIn = {
    maxWidth: 330,
    padding: 15,
    margin: "0 auto",
  };

  const formSignInHeading = {
    marginBottom: 10,
  };

  const signUp = {
    color: "#007bff",
    textDecoration: "none",
    backgroundColor: "transparent",
  };

  const pStyle = {
    textAlign: "center",
  }

  return(
    <div>
      <form style={formSignIn}>
        <h2 style={formSignInHeading}>Blocks <small>by spring boot</small></h2>

        <img src={blocksImg} className="App-logo" alt="logo" width="100%"/>

        <hr />


        <p style={pStyle}>
          <Button>
            <a href={() => false} className="">ログイン</a>
          </Button>
        </p>

        <p style={pStyle}>
          <a style={signUp} href={() => false}>新規アカウント登録する</a>
        </p>
      </form>
    </div>
  );
}

export default Home;