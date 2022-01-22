import { useState, useEffect } from 'react';
import { getDataAPI } from './../utils/fetchData';

const UserApi = (token) => {
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [callback, setCallback] = useState(false);

  // GETTING LOGGED IN USER
  useEffect(() => {
    if (token) {
      const getUser = async () => {
        try {
          const res = await getDataAPI('user', token);
          setData(res.data);
          res.data.role === '1' ? setIsAdmin(true) : setIsAdmin(false);
          setIsLogged(true);
          setLoading(false);
        } catch (error) {
          console.log(error);
        }
      };
      getUser();
    }
  }, [token, callback]);

  return {
    user: [data, setData],
    isLogged: [isLogged, setIsLogged],
    admin: [isAdmin, setIsAdmin],
    callback: [callback, setCallback],
    loading: [loading, setLoading],
  };
};

export default UserApi;
