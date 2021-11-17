import axios from "axios";
// eslint-disable-next-line
import React from "react";

const BASE_URL = "http://localhost:3000";

export const getAllTodos = () => {
  return axios.get(`${BASE_URL}/todo`);
};

export const addTodo = (todo) => {
  return axios.post(`${BASE_URL}/todo`, todo);
};

export const deleteTodo = (id) => {
  return axios.delete(`${BASE_URL}/todo/${id}`);
};
