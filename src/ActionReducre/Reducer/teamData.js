export default (
  state = { teamName: "", userList: [], show: false, id: 0 },
  action
) => {
  switch (action.type) {
    case "GET_MY_TEAM":
      return { ...state, teamName: action.data, show: true };
    case "CREATE_USER":
      let newData = [...state.userList, { ...action.data, id: state.id + 1 }];
      return {
        ...state,
        show: true,
        userList: newData,
        id: state.id + 1
      };
    case "DELETE_USER":
      console.log(action.data);
      let delteUser = deleteMyUser(state.userList, action.data);
      return {
        ...state,
        show: true,
        userList: delteUser
      };
    default:
      return state;
  }
};

const deleteMyUser = (list, data) => {
  let dataFilter = list.filter(function(el) {
    return Number(el.id) != Number(data);
  });
  console.log(dataFilter);
  return dataFilter;
};
