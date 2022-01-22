import React from 'react';
import styles from './Withdraw.module.css';

const Withdraw = ({ handleChange, values }) => {
  const { withdraw } = values;
  return (
    <>
      <div className={styles.withdraw}>
        <div className={styles.withdraw_center}>
          <div className={styles.form_div}>
            <p>Do you plan to withdraw money from your investment portfolio?</p>
            <form>
              <div className={styles.forming}>
                <span>Yes</span>
                <input
                  type='radio'
                  name='withdraw'
                  value='8'
                  onChange={handleChange}
                  checked={withdraw === '8'}
                />
              </div>
              <div className={styles.forming}>
                <span>No</span>
                <input
                  type='radio'
                  name='withdraw'
                  value='16'
                  onChange={handleChange}
                  checked={withdraw === '16'}
                />
              </div>
            </form>
            <div className={styles.progress_strength}>
              <div className={styles.progress_arrow}></div>
              <progress max='100' value='60' className='strength' />
              <small>60% Complete</small>
            </div>
            <span>
              Rememeber, there are no right or wrong answers - just what’s ideal
              for you!.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Withdraw;
