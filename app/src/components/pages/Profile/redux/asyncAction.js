import RequestApi from "../../../../lib/RequestApi";
import {
  setOldPhotoAction,
  setNewPhotoAction,
  setInputValueAction,
  setAnimationAction,
  setBtnSubmitAction,
} from "./actionsTypes";

export const fetchPhotoAction = (dispatch) => {
  RequestApi.get()
    .then((json) => {
      dispatch(setOldPhotoAction(json.data));
      dispatch(setNewPhotoAction(json.data));
    })
    .catch((e) => console.log(e));
};

export const fetchUpdatePhotoAction = (dispatch, new_data_photo) => {
  dispatch(setAnimationAction(true));
  RequestApi.patch({ new_data_photo })
    .then(() => {
      fetchPhotoAction(dispatch);
      dispatch(setInputValueAction(""));
      dispatch(setBtnSubmitAction(false));
      setTimeout(() => dispatch(setAnimationAction(false)), 1500);
    })
    .catch((e) => console.log(e));
};
