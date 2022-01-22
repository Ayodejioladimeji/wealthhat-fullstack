import React from 'react';
import styles from './Attitude.module.css';
import catious from '../../../assets/catious.svg';

const Catious = () => {
  return (
    <div className={styles.attitude_center}>
      <div className={styles.tolerance}>
        <h3>Overall risk tolerance: Cautious</h3>
        <div className={styles.tolerance_img}>
          <img src={catious} alt='tolerance' className={styles.cautious_img} />
        </div>
      </div>
      <p>
        Based on your answers, you are comfortable having your assets managed
        conservatively, with an emphasis on a predictable flow of income or the
        stability that comes from fixed-income investments, while generating
        some capital appreciation over time. Your tolerance toward volatility is
        moderate and you seek capital preservation.
      </p>
    </div>
  );
};

export default Catious;
