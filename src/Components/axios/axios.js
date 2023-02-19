import axios from "axios";

export const getAPICall =  (url) => {
  let response =  axios.get(url);
  //  response = await response.data;
  //  response.map((res)=>{
  //   console.log(res.username)
  //  })
  return response;
};

export const postAPICall = async (url, data = null) => {
  const response = axios.post(url, data);
  return response;
};
