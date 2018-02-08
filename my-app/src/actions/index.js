export const add = (dispatch, task) => {
  dispatch({ type: 'add', params: { task } });
};
