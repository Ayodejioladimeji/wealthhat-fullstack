import React from 'react';
import styles from './Attitude.module.css';
import growth from '../../../assets/growth.svg';

const Growth = () => {
  return (
    <div className={styles.attitude_center}>
      <div className={styles.tolerance}>
        <h3>Overall risk tolerance: Growth</h3>
        <div className={styles.tolerance_img}>
          <img src={growth} alt='tolerance' className={styles.growth_img} />
        </div>
      </div>
      <p>
        Based on your answers, you are seeking long-term capital appreciation
        with little or no requirement for additional income. You can tolerate
        greater year-to-year volatility, as well as some moderate to strong
        fluctuations in the value of your investment, because you realize that
        over time, equity markets usually outperform other investments. However,
        you are not comfortable having 100% of your investments in equities.
      </p>
    </div>
  );
};

export default Growth;
