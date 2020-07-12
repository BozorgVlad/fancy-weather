import store from '../store';
export const setLoadedActionCreator = (actionType, data) => {
  const action = {
    type: actionType,
    payload: data,
  };
  return action;
};

export const setRequstedActionCreator = (actionType) => {
  const action = {
    type: actionType,
  };
  return action;
};

export const setValueActionCreator = (actionType, data) => {
  const action = {
    type: actionType,
    payload: data,
  };
  store.dispatch(action);
};
