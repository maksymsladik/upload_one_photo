import { combineReducers } from "redux";
import photo from "../components/pages/Profile/redux/reducer";

const mainReducer = combineReducers({
  photo,
});

export default mainReducer;
