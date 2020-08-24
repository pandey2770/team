import { combineReducers } from "redux";
import TeamReducer from "./TeamReducer";
import teamData from "./teamData";
export default combineReducers({
  userData: teamData,
  teamList: TeamReducer
});
