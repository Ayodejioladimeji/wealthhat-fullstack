import React from 'react';
import styles from '../components/verification/Verification.module.css';
import Verifications from './../components/verification/Verification';

const Verification = () => {
  return (
    <div className={styles.verification}>
      <div className={styles.verification_center}>
        <Verifications />
      </div>
    </div>
  );
};

export default Verification;
