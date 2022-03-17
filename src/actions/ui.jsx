import { types } from "../types/types";
//ACTIONS QUE TENDRA EL PROYECTO

export const setErrorAction = (err) => ({
  type: types.uiSetError,
  payload: err,
});
export const removeErrorAction = () => ({
  type: types.uiRemoveError,
});

export const startLoadingAction = () => ({
  type: types.uiStartLoading,
});
export const finishLoadingAction = () => ({
  type: types.uiFinishLoading,
});
