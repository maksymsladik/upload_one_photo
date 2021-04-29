export const SET_OLD_DATA_PHOTO = "SET_OLD_DATA_PHOTO";
export const SET_NEW_DATA_PHOTO = "SET_NEW_DATA_PHOTO";
export const SET_INPUT_VALUE = "SET_INPUT_VALUE";
export const SET_ANIMATION = "SET_ANIMATION";
export const SET_BTN_SUBMIT = "SET_BTN_SUBMIT";

export const setOldPhotoAction = (photo) => ({
  type: SET_OLD_DATA_PHOTO,
  photo,
});

export const setNewPhotoAction = (photo) => ({
  type: SET_NEW_DATA_PHOTO,
  photo,
});

export const setInputValueAction = (value) => ({
  type: SET_INPUT_VALUE,
  value,
});

export const setAnimationAction = (status) => ({
  type: SET_ANIMATION,
  status,
});

export const setBtnSubmitAction = (status) => ({
  type: SET_BTN_SUBMIT,
  status,
});
