/** @format */

export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const maxStop = () => {
  return {
    type: "STOP",
  };
};

export const burgerToggle = () => {
  return {
    type: "burgerToggle",
  };
};

export const getProductData = (id) => {
  return {
    type: "fetchData",
    payload: id,
  };
};

export const getCurrentUser = (userID) => {
  return {
    type: "getUSer",
    payload: userID,
  };
};
