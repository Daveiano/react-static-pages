const appReducerDefaultState = {},
  appReducer = (state = appReducerDefaultState, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };

export { appReducerDefaultState, appReducer };