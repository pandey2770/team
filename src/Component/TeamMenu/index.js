import React, { useEffect, useState } from "react";
import "./team.css";
import { useDispatch, useSelector } from "react-redux";
import { myTeam } from "../../ActionReducre/Action";
function Team() {
  const dispatch = useDispatch();
  const { teamName } = useSelector(state => state.userData);
  const { teamList } = useSelector(state => state.teamList);
  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    setMenuList(teamList);
  }, [teamList]);

  return (
    <div className="navDiv">
      <div>
        {menuList.map((data, id) => (
          <button
            onClick={() => {
              dispatch(myTeam(data.name));
            }}
            className={teamName == data.name ? "buttonFocus" : "navButton"}
            key={id}
          >
            {data.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Team;
