import React from 'react';
import styles from '../components/register/Register.module.css';
import Reset from '../components/reset/Reset';

const ResetPassword = () => {
  return (
    <div className={styles.register}>
      <div className={styles.register_center}>
        <Reset />
      </div>
    </div>
  );
};

export default ResetPassword;
