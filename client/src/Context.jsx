import React, { createContext, useEffect, useState } from 'react';

// COMPONENTS
import { postDataAPI } from './utils/fetchData';
import UserApi from './api/UserApi';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [token, setToken] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  // The section that open and close the sidebar
  const openSidebar = () => {
    setIsOpen(!isOpen);
  };

  // GETTING THE JWT TOKEN
  useEffect(() => {
    const firstLogin = localStorage.getItem('firstLogin');

    if (firstLogin) {
      const refreshToken = async () => {
        try {
          const res = await postDataAPI('refresh_token');
          setToken(res.data['access_token']);

          setTimeout(() => {
            refreshToken();
          }, 10 * 60 * 1000);
        } catch (error) {
          console.log(error);
        }
      };
      refreshToken();
    }
  }, [token]);

  const state = {
    token: [token, setToken],
    isOpen: [isOpen, setIsOpen],
    openSidebar,
    userApi: UserApi(token),
    modalOpen: [modalOpen, setModalOpen],
  };
  return <Context.Provider value={state}>{children}</Context.Provider>;
};
