const appReducerDefaultState = { a: true },
  appReducer = (state = appReducerDefaultState, action) => {
    switch (action.type) {
      case 'ACTION': {
        return Object.assign({}, state, { a: action.a });
      }

      default:
        return state;
    }
  };

export { appReducerDefaultState, appReducer };