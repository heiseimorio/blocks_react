import React from 'react'
import PropTypes from 'prop-types'
import HomeContainer from '../containers/HomeContainer';
import LoginContainer from '../containers/LoginContainer';

const AppComponent = ({ app }) => {

  return (
    <div>
      {app.page === "home" && <HomeContainer></HomeContainer>}
      {app.page === "login" && <LoginContainer></LoginContainer>}
    </div>
  );
};

AppComponent.propTypes = {
  app: PropTypes.shape({}).isRequired,
}

export default AppComponent