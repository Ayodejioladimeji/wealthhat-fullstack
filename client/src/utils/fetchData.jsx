// PACKAGES
import axios from 'axios';

// const uri = 'https://wealth-hat.herokuapp.com';

// THE POST DATA API
export const postDataAPI = async (url, data) => {
  const res = await axios.post(`/api/${url}`, data);
  return res;
};

export const postDataAPIS = async (url, data, token) => {
  const res = await axios.post(`/api/${url}`, data, {
    headers: {
      Authorization: token,
    },
  });
  return res;
};

// THE GET DATA API
export const getDataAPI = async (url, token) => {
  const res = await axios.get(`/api/${url}`, {
    headers: { Authorization: token },
  });
  return res;
};

// UPDATE
export const patchDataAPI = async (url, data, token) => {
  const res = await axios.patch(`/api/${url}`, data, {
    headers: { Authorization: token },
  });
  return res;
};

export const putDataAPI = async (url, data, token) => {
  const res = await axios.put(`/api/${url}`, data, {
    headers: { Authorization: token },
  });
  return res;
};
