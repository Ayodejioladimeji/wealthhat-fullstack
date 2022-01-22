import React from 'react';
import styles from '../components/register/Register.module.css';
import Forgot from '../components/forgot/Forgot';

const ForgotPassword = () => {
  return (
    <div className={styles.register}>
      <div className={styles.register_center}>
        <Forgot />
      </div>
    </div>
  );
};

export default ForgotPassword;
