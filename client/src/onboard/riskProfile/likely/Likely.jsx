import React from 'react';
import styles from './Likely.module.css';

const Likely = ({ handleChange, values }) => {
  const { likely } = values;
  return (
    <>
      <div className={styles.likely}>
        <div className={styles.likely_center}>
          <div className={styles.form_div}>
            <p>
              Which of the following investment portfolios would you be likely
              to invest in?
            </p>
            <form>
              <div className={styles.forming}>
                <span>
                  Portfolio A: Earns an investment return of 5% or a loss of 0%
                </span>
                <input
                  type='radio'
                  name='likely'
                  value='0'
                  onChange={handleChange}
                  checked={likely === '0'}
                />
              </div>
              <div className={styles.forming}>
                <span>
                  Portfolio B: Earns an investment return of 15% or a loss of 5%
                </span>
                <input
                  type='radio'
                  name='likely'
                  value='2'
                  onChange={handleChange}
                  checked={likely === '2'}
                />
              </div>
              <div className={styles.forming}>
                <span>
                  Portfolio C: Earns an investment return of 25% or a loss of
                  10%
                </span>
                <input
                  type='radio'
                  name='likely'
                  value='5'
                  onChange={handleChange}
                  checked={likely === '5'}
                />
              </div>
              <div className={styles.forming}>
                <span>
                  Portfolio D: Earns an investment return of 40% or a loss of
                  15%
                </span>
                <input
                  type='radio'
                  name='likely'
                  value='8'
                  onChange={handleChange}
                  checked={likely === '8'}
                />
              </div>
              <div className={styles.forming}>
                <span>
                  Portfolio E: Earns an investment return of 50% or a loss of
                  20%
                </span>
                <input
                  type='radio'
                  name='likely'
                  value='10'
                  onChange={handleChange}
                  checked={likely === '10'}
                />
              </div>
            </form>
            <div className={styles.progress_strength}>
              <div className={styles.progress_arrow}></div>
              <progress max='100' value='80' className='strength' />
              <small>80% Complete</small>
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

export default Likely;
