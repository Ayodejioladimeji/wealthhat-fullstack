import React from 'react';
import styles from './Retire.module.css';

const Retire = ({ handleChange, values }) => {
  const { retire } = values;
  return (
    <>
      <div className={styles.retire}>
        <div className={styles.retire_center}>
          <div className={styles.form_div}>
            <p>When are you planning to retire?</p>
            <form>
              <div className={styles.forming}>
                <span>In more than 20 years</span>
                <input
                  type='radio'
                  name='retire'
                  value='10'
                  onChange={handleChange}
                  checked={retire === '10'}
                />
              </div>
              <div className={styles.forming}>
                <span>In 11 to 20 years</span>
                <input
                  type='radio'
                  name='retire'
                  value='8'
                  onChange={handleChange}
                  checked={retire === '8'}
                />
              </div>
              <div className={styles.forming}>
                <span>In 5 to 10 years</span>
                <input
                  type='radio'
                  name='retire'
                  value='6'
                  onChange={handleChange}
                  checked={retire === '6'}
                />
              </div>
              <div className={styles.forming}>
                <span>In less than 5 years</span>
                <input
                  type='radio'
                  name='retire'
                  value='4'
                  onChange={handleChange}
                  checked={retire === '4'}
                />
              </div>
              <div className={styles.forming}>
                <span>I am currently retired</span>
                <input
                  type='radio'
                  name='retire'
                  value='2'
                  onChange={handleChange}
                  checked={retire === '2'}
                />
              </div>
            </form>
            <div className={styles.progress_strength}>
              <div className={styles.progress_arrow}></div>
              <progress max='100' value='30' className='strength' />
              <small>30% Complete</small>
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

export default Retire;
