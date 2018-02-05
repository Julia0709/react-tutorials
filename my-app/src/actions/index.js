export const add = (dispatch, task) => {
  dispatch({ type: 'add', params: { task } });
};

// {
//     type: 'add',
//     params: {
//         task: 'task2'
//     }
// }
