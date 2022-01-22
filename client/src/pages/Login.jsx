import React from 'react';
import styles from '../components/login/Login.module.css';
import Logins from './../components/login/Login';

const Login = () => {
  return (
    <div className={styles.login}>
      <div className={styles.login_center}>
        <Logins />
      </div>
    </div>
  );
};

export default Login;
