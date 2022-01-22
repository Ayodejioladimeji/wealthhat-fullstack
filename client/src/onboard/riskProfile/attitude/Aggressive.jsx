import React from 'react';
import styles from './Attitude.module.css';
import aggressive from '../../../assets/aggressive.svg';

const Aggressive = () => {
  return (
    <div className={styles.attitude_center}>
      <div className={styles.tolerance}>
        <h3>Overall risk tolerance: Aggressive</h3>
        <div className={styles.tolerance_img}>
          <img
            src={aggressive}
            alt='tolerance'
            className={styles.aggressive_img}
          />
        </div>
      </div>
      <p>
        Based on your answers, you are willing to speculate, at least with some
        of your investments. People like you are generally interested in
        investments which could provide high returns, and accept the risk of
        higher losses that comes as a consequence. You will be fairly tolerant
        of dips in the market and would not expect to take action quickly in
        response.
      </p>
    </div>
  );
};

export default Aggressive;
