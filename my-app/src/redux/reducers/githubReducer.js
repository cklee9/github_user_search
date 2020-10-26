const initialState = {
  user: {},
  followers: [],
  userName: "",
};

export const githubReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER":
      return { ...state, user: action.payload };
    case "GET_FOLLOWERS":
      return { ...state, followers: action.payload };
    case "UPDATE_USERNAME":
      return { ...state, userName: action.payload };
    default:
      return state;
  }
};
