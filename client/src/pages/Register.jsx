import React from 'react';
import styles from '../components/register/Register.module.css';
import Registers from './../components/register/Register';

const Register = () => {
  return (
    <div className={styles.register}>
      <div className={styles.register_center}>
        <Registers />
      </div>
    </div>
  );
};

export default Register;
