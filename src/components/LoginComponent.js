import React from 'react'
import PropTypes from 'prop-types'


const LoginComponent = ({goHome, app}) => {
  const formLogin = {
    maxWidth: 350,
    padding: 30,
    margin: "0 auto",
  };

  const btnArea = {
    display: "flex",
    justifyContent: "space-between",
  }

  return (
  <div className={"container"}>
    <form style={formLogin}>
      <h4>ログインしてください</h4>

      <p>
          <label htmlFor="username" className={"sr-only"}> ユーザ名</label>
          <input type="text" id="username" name="username" className={"form-control"} placeholder="username" required autoFocus />
      </p>

      <p>
          <label htmlFor="password" className={"sr-only"}>パスワード</label>
          <input type="password" id="password" name="password" className={"form-control"} placeholder="password" />
      </p>

      <p><input type="submit" className={"btn btn-lg btn-primary btn-block"} value="ログイン" /></p>

      <div style={btnArea}>

        <button
          className={"btn btn-lg btn-secondary"}
          onClick={goHome}
        >
          ホーム
        </button>

        <button
          className={"btn btn-lg btn-success"}
          onClick={goHome}
        >
          新規登録する
        </button>
      </div>

    </form>

    </div>
  );
};

LoginComponent.propTypes = {
  goHome: PropTypes.func.isRequired,
}

export default LoginComponent