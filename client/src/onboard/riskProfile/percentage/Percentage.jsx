import React from 'react';
import styles from './Percentage.module.css';

const Percentage = ({ handleChange, values }) => {
  const { percentage } = values;
  return (
    <>
      <div className={styles.percentage}>
        <div className={styles.percentage_center}>
          <div className={styles.form_div}>
            <p>
              What percentage of your overall investment portfolio do you plan
              to withdraw within the next 5 years?
            </p>
            <form>
              <div className={styles.forming}>
                <span>More than 50%.</span>
                <input
                  type='radio'
                  name='percentage'
                  value='0'
                  onChange={handleChange}
                  checked={percentage === '0'}
                />
              </div>
              <div className={styles.forming}>
                <span>30% to 50%.</span>
                <input
                  type='radio'
                  name='percentage'
                  value='2'
                  onChange={handleChange}
                  checked={percentage === '2'}
                />
              </div>
              <div className={styles.forming}>
                <span>Less than 30%.</span>
                <input
                  type='radio'
                  name='percentage'
                  value='4'
                  onChange={handleChange}
                  checked={percentage === '4'}
                />
              </div>
            </form>
            <div className={styles.progress_strength}>
              <div className={styles.progress_arrow}></div>
              <progress max='100' value='90' className='strength' />
              <small>90% Complete</small>
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

export default Percentage;
