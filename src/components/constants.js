export const API = "http://localhost:5000";
export const API = "https://todo-backend-api1.herokuapp.com";

export const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const authConfig = {
  headers: {
    "Content-Type": "application/json",
    "x-api-key": localStorage.getItem("authToken"),
  },
};
