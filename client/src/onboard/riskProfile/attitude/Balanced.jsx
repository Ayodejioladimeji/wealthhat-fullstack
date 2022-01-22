import React from 'react';
import styles from './Attitude.module.css';
import balanced from '../../../assets/balanced.svg';

const Balanced = () => {
  return (
    <div className={styles.attitude_center}>
      <div className={styles.tolerance}>
        <h3>Overall risk tolerance: Balanced</h3>
        <div className={styles.tolerance_img}>
          <img src={balanced} alt='tolerance' className={styles.balanced_img} />
        </div>
      </div>
      <p>
        Based on your answers, you are seeking long-term capital appreciation,
        and to a lesser extent, a stream of regular income or the stability that
        comes from fixed-income investments. You are most comfortable with
        relatively stable year-to-year returns but will accept some volatility
        because you understand that the capital growth you require cannot be
        achieved without some element of risk.
      </p>
    </div>
  );
};

export default Balanced;
