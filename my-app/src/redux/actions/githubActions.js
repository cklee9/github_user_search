import { getUsers, getAllFollowers } from "../../apis/githubAPI";

export const getUsersAction = (userName) => {
  return (dispatch) => {
    getUsers(userName)
      .then((res) => {
        dispatch({ type: "GET_USER", payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: "GET_USER", payload: null });
        console.log("err", err.message);
      });
  };
};

export const getFollowersAction = (userName, pageIndex, pageSize) => {
  return (dispatch) => {
    getAllFollowers(userName, pageIndex, pageSize).then((res) => {
      dispatch({ type: "GET_FOLLOWERS", payload: res.data });
    });
  };
};

export const updateUserNameAction = (userName) => {
  return (dispatch) => {
    dispatch({ type: "UPDATE_USERNAME", payload: userName });
  };
};

export const setClickCountAction = (number) => {
  return (dispatch) => {
    dispatch({ type: "SET_CLICK", payload: number});
  };
};

export const updateClickCountAction = () => {
  return (dispatch) => {
    dispatch({ type: "UPDATE_CLICK" });
  };
};

