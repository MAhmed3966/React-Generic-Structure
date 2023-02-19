import { USERS_API, LOGIN } from "../constant.js";
import { getAPICall, postAPICall } from "../Components/axios/axios";

export const getUsers = async () => {
  try {
    const users = await postAPICall(USERS_API);
    const response = await users.json();
    return response;
  } catch (err) {
    console.log("Error is:", err.message);
  }
};
