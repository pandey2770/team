import React from "react";
import "./App.css";
import Create from "../CreateTeam";
import TeamMenu from "../TeamMenu";
import MainTeamData from "../mainTeamData";
function App() {
  return (
    <div>
      <Create />
      <div style={{ display: "flex" }}>
        <TeamMenu />
        <MainTeamData />
      </div>
    </div>
  );
}

export default App;
