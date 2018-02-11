const initState = {};

const app = (state = initState, action) => {
  switch (action.type) {
    case 'add':
      state = {
        ...state,
        ...action.params,
      };
      break;
    default:
      break;
  }
  console.log(state);
  return state;
};

export default app;
