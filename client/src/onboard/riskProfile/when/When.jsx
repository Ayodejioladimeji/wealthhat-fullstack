import React from 'react';
import styles from './When.module.css';

const When = ({ handleChange, values }) => {
  const { when } = values;
  return (
    <>
      <div className={styles.when}>
        <div className={styles.when_center}>
          <div className={styles.form_div}>
            <p>
              When do you plan to withdraw money from your investment portfolio?
            </p>
            <form>
              <div className={styles.forming}>
                <span>In less than 10 years</span>
                <input
                  type='radio'
                  name='when'
                  value='0'
                  onChange={handleChange}
                  checked={when === '0'}
                />
              </div>
              <div className={styles.forming}>
                <span>Between 10 and 15 years</span>
                <input
                  type='radio'
                  name='when'
                  value='5'
                  onChange={handleChange}
                  checked={when === '5'}
                />
              </div>
              <div className={styles.forming}>
                <span>Between 16 and 20 years</span>
                <input
                  type='radio'
                  name='when'
                  value='8'
                  onChange={handleChange}
                  checked={when === '8'}
                />
              </div>
              <div className={styles.forming}>
                <span>In more than 20 years</span>
                <input
                  type='radio'
                  name='when'
                  value='10'
                  onChange={handleChange}
                  checked={when === '10'}
                />
              </div>
            </form>
            <div className={styles.progress_strength}>
              <div className={styles.progress_arrow}></div>
              <progress max='100' value='70' className='strength' />
              <small>70% Complete</small>
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

export default When;
