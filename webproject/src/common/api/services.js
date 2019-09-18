import axios from "axios";

export const getComments = () => {
  return axios.get("https://jsonplaceholder.typicode.com/comments");
};
