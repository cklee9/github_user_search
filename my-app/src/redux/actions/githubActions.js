import { getUsers, getAllFollowers } from "../../apis/githubAPI";

export const getUsersAction = (userName) => {
  return (dispatch) => {
    getUsers(userName)
      .then((res) => {
        console.log("getUsers", res);
        dispatch({ type: "GET_USER", payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: "GET_USER", payload: err.message });
        console.log('err', err.message, err.status);
      });
  };
};

export const getFollowersAction = (userName, pageIndex, pageSize) => {
  return (dispatch) => {
    getAllFollowers(userName, pageIndex, pageSize).then((res) => {
      console.log("getAllFollowers", res);
      dispatch({ type: "GET_FOLLOWERS", payload: res.data });
    });
  };
};

export const updateUserNameAction = (userName) => {
  return (dispatch) => {
    dispatch({ type: "UPDATE_USERNAME", payload: userName });
  };
};
