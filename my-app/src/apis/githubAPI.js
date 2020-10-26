import axios from "axios";

axios("https://api.github.com", {
//   auth: {
//     username: "cklee9",
//     password: "66cf3dc76e18dde06bc77a1e1a6d37ab0b886e9b",
//   },
});

export const getUsers = (userName) => {
  return axios
    .create({ baseURL: "https://api.github.com" })
    .get(`/users/${userName}`);
};

export const getAllFollowers = (userName, pageIndex, pageSize) => {
  return axios
    .create({ baseURL: "https://api.github.com" })
    .get(`/users/${userName}/following?page=${pageIndex}&per_page=${pageSize}`);
};
