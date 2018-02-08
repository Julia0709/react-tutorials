const initState = {};

const app = (state = initState, action) => {
  switch (action.type) {
    case 'add':
      state = {
        ...state,
        ...action.params,
      };
  }
  console.log(state);
  return state;
};

export default app;
