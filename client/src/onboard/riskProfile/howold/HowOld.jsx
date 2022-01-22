import React from 'react';
import styles from './HowOld.module.css';

const HowOld = ({ values, handleChange }) => {
  const { howOld } = values;
  return (
    <>
      <div className={styles.riskprofile}>
        <div className={styles.riskprofile_center}>
          <p>
            Review each questions and choose the ONE statement that mostly apply
            to you.
          </p>
          <div className={styles.form_div}>
            <p>How old are you?</p>
            <form>
              <div className={styles.forming}>
                <span>Under 30</span>
                <input
                  type='radio'
                  name='howOld'
                  value='10'
                  checked={howOld === '10'}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.forming}>
                <span>31 - 40</span>
                <input
                  type='radio'
                  name='howOld'
                  value='8'
                  checked={howOld === '8'}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.forming}>
                <span>41 - 50</span>
                <input
                  type='radio'
                  name='howOld'
                  value='4'
                  checked={howOld === '4'}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.forming}>
                <span>51 and above</span>
                <input
                  type='radio'
                  name='howOld'
                  value='2'
                  checked={howOld === '2'}
                  onChange={handleChange}
                />
              </div>
            </form>
            <div className={styles.progress_strength}>
              <div className={styles.progress_arrow}></div>
              <progress max='100' value='10' className='strength' />
              <small>10% Complete</small>
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

export default HowOld;
