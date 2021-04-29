import {
  SET_OLD_DATA_PHOTO,
  SET_NEW_DATA_PHOTO,
  SET_INPUT_VALUE,
  SET_ANIMATION,
  SET_BTN_SUBMIT,
} from "./actionsTypes";

export const initialState = {
  old_data_photo: null,
  new_data_photo: null,
  inputValue: "",
  animation: false,
  btnSubmit: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_OLD_DATA_PHOTO: {
      return {
        ...state,
        old_data_photo: action.photo,
      };
    }

    case SET_NEW_DATA_PHOTO: {
      return {
        ...state,
        new_data_photo: action.photo,
      };
    }

    case SET_INPUT_VALUE: {
      return {
        ...state,
        inputValue: action.value,
      };
    }

    case SET_ANIMATION: {
      return {
        ...state,
        animation: action.status,
      };
    }

    case SET_BTN_SUBMIT: {
      return {
        ...state,
        btnSubmit: action.status,
      };
    }

    default:
      return state;
  }
}
