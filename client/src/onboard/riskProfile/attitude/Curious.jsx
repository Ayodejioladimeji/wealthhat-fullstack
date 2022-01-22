import React from 'react';
import styles from './Attitude.module.css';
import curious from '../../../assets/curious.svg';

const Curious = () => {
  return (
    <div className={styles.attitude_center}>
      <div className={styles.tolerance}>
        <h3>Overall risk tolerance: Curious</h3>
        <div className={styles.tolerance_img}>
          <img src={curious} alt='tolerance' className={styles.curious_img} />
        </div>
      </div>
      <p>
        Based on your answers, you have a need for a predictable flow of income
        or have a relatively short investment horizon. Your tolerance toward
        volatility is low and you seek capital preservation.
      </p>
    </div>
  );
};

export default Curious;
