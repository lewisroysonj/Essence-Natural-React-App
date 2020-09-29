/** @format */

import api from "../lib/api";

async function getCurrentUser(userID) {
  const currentUser = await api.get(`/users/${userID}`);
  console.log(currentUser);
  return currentUser;
}
const currentUserReducer = async (currentUser = {}, action) => {
  switch (action.type) {
    case "getUser":
      const user = await getCurrentUser(action.payload);
      console.log(user);
      return (currentUser = user);

    default:
      return (currentUser = null);
  }
};

export default currentUserReducer;
