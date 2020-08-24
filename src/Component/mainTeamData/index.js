import React, { useEffect, useState } from "react";
import "./main.css";
import { useDispatch, useSelector } from "react-redux";
import { createMyUser, deleteMyUser } from "../../ActionReducre/Action";
function Mainteam() {
  const dispatch = useDispatch();

  const userData = useSelector(state => state.userData);
  const [teamName, setTeamName] = useState("");
  const [userList, setUserList] = useState([]);
  const [dataShow, setDataShow] = useState(false);
  const [name, setname] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    setTeamName(userData.teamName);
    setDataShow(userData.show);
    let filterData = userData.userList?.filter(function(e) {
      return (
        e.team.toUpperCase().replace(/ /g, "") ==
        userData.teamName?.toUpperCase().replace(/ /g, "")
      );
    });
    setUserList(filterData);
  }, [userData]);

  const createUser = () => {
    if (name != "") {
      setname("");
      setDescription("");
      dispatch(createMyUser({ team: teamName, name: name, desc: description }));
    } else {
      alert("please enter name");
    }
  };
  const deleteUser = id => {
    dispatch(deleteMyUser(id));
  };

  return (
    <div style={{ margin: 15 }}>
      {dataShow && (
        <div>
          <h1>{teamName}</h1>
          <div />
          <div className="flexClass">
            <div className="card">
              <div className="flexStyleCol">
                <span>Name</span>
                <input
                  className="inputMain"
                  value={name}
                  onChange={e => {
                    setname(e.target.value);
                  }}
                />
              </div>
              <div className="flexStyleCol">
                <span>Description</span>
                <textarea
                  className="textarea"
                  value={description}
                  onChange={e => {
                    setDescription(e.target.value);
                  }}
                />
                <button onClick={createUser} className="createUserButton">
                  Create User
                </button>
              </div>
            </div>

            {userList &&
              userList.map((data, id) => (
                <div className="card" key={data.id}>
                  <div>
                    <span>Name</span>
                    <p
                      style={{ lineHeight: 2, marginBottom: 5 }}
                      className="inputMain"
                    >
                      {data.name}
                    </p>
                    <span>Description</span>
                    <p
                      style={{ paddingTop: 2, overflow: "auto" }}
                      className="textarea"
                    >
                      {data.desc}
                    </p>
                    <button
                      style={{ width: "93%", background: "red" }}
                      onClick={() => {
                        deleteUser(data.id);
                      }}
                      className="createUserButton"
                    >
                      Delete User
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Mainteam;
