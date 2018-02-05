const initState = {};

const app = (state = initState, action) => {
  switch (action.type) {
    case 'add':
      state = {
        ...state,
        ...action.params,
      };
  }
  return state;
};

export default app;

{
    task: 'task2',
}

// {
//     state: state,
//     action.params: action.params,
// }
// state = { a: 1 }
// { state }
// { state: state }
// {
//     state: {
//         a: 1
//     }
// }

// { ...state }
// {
//     a: 1
// }

// { ...action.params }
// {
//     task:'task1'
// }

// {
//     ...state,
//     ...action.params
// }
// {
//     a: 1,
//     task: 'task1',
// }

// {
//     task: 'task1',
// }
