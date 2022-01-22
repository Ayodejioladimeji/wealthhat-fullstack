import React from 'react';
import styles from './Situation.module.css';

const Situation = ({ handleChange, values }) => {
  const { situation } = values;
  return (
    <>
      <div className={styles.situation}>
        <div className={styles.situation_center}>
          <div className={styles.form_div}>
            <p>
              Which of the following statements best describes your current
              income situation?
            </p>
            <form>
              <div className={styles.forming}>
                <span>Completely stable</span>
                <input
                  type='radio'
                  name='situation'
                  value='10'
                  onChange={handleChange}
                  checked={situation === '10'}
                />
              </div>
              <div className={styles.forming}>
                <span>
                  Stable and not expected to change in the near future
                </span>
                <input
                  type='radio'
                  name='situation'
                  value='8'
                  onChange={handleChange}
                  checked={situation === '8'}
                />
              </div>
              <div className={styles.forming}>
                <span>Stable but may change in the future</span>
                <input
                  type='radio'
                  name='situation'
                  value='4'
                  onChange={handleChange}
                  checked={situation === '4'}
                />
              </div>
              <div className={styles.forming}>
                <span>A bit unstable</span>
                <input
                  type='radio'
                  name='situation'
                  value='2'
                  onChange={handleChange}
                  checked={situation === '2'}
                />
              </div>
            </form>
            <div className={styles.progress_strength}>
              <div className={styles.progress_arrow}></div>
              <progress max='100' value='20' className='strength' />
              <small>20% Complete</small>
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

export default Situation;
