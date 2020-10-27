const initialState = {
  user: null,
  followers: [],
  userName: "",
  clickCount: 1,
};

export const githubReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER":
      return { ...state, user: action.payload };
    case "GET_FOLLOWERS":
      return { ...state, followers: action.payload };
    case "UPDATE_USERNAME":
      return { ...state, userName: action.payload };
    case "UPDATE_CLICK":
      return { ...state, clickCount: state.clickCount + 1 };
    case "SET_CLICK":
      return { ...state, clickCount: action.payload };
    default:
      return state;
  }
};
