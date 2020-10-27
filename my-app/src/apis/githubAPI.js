import axios from "axios";

axios("https://api.github.com", {
  auth: {
  },
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
