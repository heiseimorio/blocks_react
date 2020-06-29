
const initialState = {
  page: 'home',
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_HOME':
      return Object.assign({}, state, {page: "home"})
    case 'GO_LOGIN_PAGE':
      return Object.assign({}, state, {page: "login"})
    case 'SHOW_LOBBY':
      return Object.assign({}, state, {page: "lobby"})
    default:
      return state
  }

}

export default app;