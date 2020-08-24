export default (state = { teamList: [] }, action) => {
  switch (action.type) {
    case "CREATE_TEAM":
      let check = checkTeamName(state.teamList, action.data);
      if (check) {
        return {
          ...state,
          teamList: [...state.teamList, { name: action.data }]
        };
      } else {
        alert("TEAM ALREADY EXIST");
      }
    default:
      return state;
  }
};
const checkTeamName = (list, name) => {
  let filterData = list.filter(function(e) {
    return (
      e.name.toUpperCase().replace(/ /g, "") ==
      name.toUpperCase().replace(/ /g, "")
    );
  });
  if (filterData.length > 0) {
    return false;
  } else {
    return true;
  }
};
