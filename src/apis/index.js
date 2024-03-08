import axios from "axios";

axios.defaults.baseURL = "https://sensei-app-c8da1e59e645.herokuapp.com/sensei/api/v1/details"

export const getParentsDataAPI = async (phoneNum) => axios.get(`/parent/${phoneNum}`);
export const getChildrenDataAPI = async (id) => axios.get(`/children/${id}`)