import React from 'react';
import styles from './Approach.module.css';

const Approach = ({ values, handleChange }) => {
  const { approach } = values;
  return (
    <>
      <div className={styles.approach}>
        <div className={styles.approach_center}>
          <div className={styles.form_div}>
            <p>
              Which of the following statements best describes your actual
              approach to investing?
            </p>
            <form>
              <div className={styles.forming}>
                <span>
                  I am not comfortable taking risks with my capital, but I am
                  prepared to do so with a small portion of my assets because I
                  need some capital appreciation to offset inflation
                </span>
                <input
                  type='radio'
                  name='approach'
                  value='2'
                  onChange={handleChange}
                  checked={approach === '2'}
                />
              </div>
              <div className={styles.forming}>
                <span>
                  I am comfortable taking risks with my capital for potentially
                  greater returns, but I am prepared to do so with only less
                  than 50% of my assets
                </span>
                <input
                  type='radio'
                  name='approach'
                  value='4'
                  onChange={handleChange}
                  checked={approach === '4'}
                />
              </div>
              <div className={styles.forming}>
                <span>
                  I am comfortable taking risks with my capital for potentially
                  greater returns, and I am prepared to do so with more than 50%
                  of my assets
                </span>
                <input
                  type='radio'
                  name='approach'
                  value='6'
                  onChange={handleChange}
                  checked={approach === '6'}
                />
              </div>
              <div className={styles.forming}>
                <span>
                  I am comfortable taking risks with my capital for potentially
                  greater returns. I have an aggressive investment approach and
                  I am investing for the long term.
                </span>
                <input
                  type='radio'
                  name='approach'
                  value='10'
                  onChange={handleChange}
                  checked={approach === '10'}
                />
              </div>
            </form>
            <div className={styles.progress_strength}>
              <div className={styles.progress_arrow}></div>
              <progress max='100' value='100' className='strength' />
              <small>100% Complete</small>
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

export default Approach;
