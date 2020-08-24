import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTeam } from "../../ActionReducre/Action";
import "./create.css";

function Create() {
  const dispatch = useDispatch();

  const [teamName, setteam] = useState("");

  const create = () => {
    if (teamName == "") {
      alert("Plese enter team name");
    } else {
      setteam("");
      dispatch(createTeam(teamName));
    }
  };
  return (
    <div className="mainDiv">
      <div className="flexStyleCol">
        <span>Select Team</span>
        <select className="select">
          <option default>Select</option>
          <option>Team 1</option>
        </select>
      </div>
      <div className="flexStyleCol">
        <span>Team Name</span>
        <input
          onChange={e => {
            setteam(e.target.value);
          }}
          className="input"
          value={teamName}
        />
      </div>
      <button onClick={create} className="button">
        Create Team
      </button>
    </div>
  );
}

export default Create;
