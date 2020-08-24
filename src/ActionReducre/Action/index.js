export const createTeam = data => {
  return {
    type: "CREATE_TEAM",
    data
  };
};

export const myTeam = data => {
  return {
    type: "GET_MY_TEAM",
    data
  };
};
export const createMyUser = data => {
  return {
    type: "CREATE_USER",
    data
  };
};
export const deleteMyUser = data => {
  return {
    type: "DELETE_USER",
    data
  };
};
