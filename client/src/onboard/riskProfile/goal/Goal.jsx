import React from 'react';
import styles from './Goal.module.css';

const Goal = ({ handleChange, values }) => {
  const { goal } = values;
  return (
    <>
      <div className={styles.goal}>
        <div className={styles.goal_center}>
          <div className={styles.form_div}>
            <p>
              Which of the following statements best describes your primary goal
              for investing?
            </p>
            <form>
              <div className={styles.forming}>
                <span>I want protection and capital preservation.</span>
                <input
                  type='radio'
                  name='goal'
                  value='2'
                  onChange={handleChange}
                  checked={goal === '2'}
                />
              </div>
              <div className={styles.forming}>
                <span>
                  I want protection and investment growth. I prefer an
                  investment mix that will generate both income and long-term
                  capital growth.
                </span>
                <input
                  type='radio'
                  name='goal'
                  value='6'
                  onChange={handleChange}
                  checked={goal === '6'}
                />
              </div>
              <div className={styles.forming}>
                <span>
                  I want protection and long-term investment growth, but I am
                  willing to invest a small portion in fixed-income securities
                  for stability
                </span>
                <input
                  type='radio'
                  name='goal'
                  value='8'
                  onChange={handleChange}
                  checked={goal === '8'}
                />
              </div>
              <div className={styles.forming}>
                <span>
                  I am primarily interested in maximum investment growth over
                  the long term
                </span>
                <input
                  type='radio'
                  name='goal'
                  value='10'
                  onChange={handleChange}
                  checked={goal === '10'}
                />
              </div>
            </form>
            <div className={styles.progress_strength}>
              <div className={styles.progress_arrow}></div>
              <progress max='100' value='50' className='strength' />
              <small>50% Complete</small>
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

export default Goal;
