import React from 'react';
import styles from './Financial.module.css';

const Financial = ({ handleChange, values }) => {
  const { financial } = values;
  return (
    <>
      <div className={styles.financial}>
        <div className={styles.financial_center}>
          <div className={styles.form_div}>
            <p>
              Which of the following statements best describes your current
              financial situation? Please consider your income, regular
              expenses, outstanding loans or debts, as well as investments.
            </p>
            <form>
              <div className={styles.forming}>
                <span>My financial situation is a bit unstable.</span>
                <input
                  type='radio'
                  name='financial'
                  value='0'
                  onChange={handleChange}
                  checked={financial === '0'}
                />
              </div>
              <div className={styles.forming}>
                <span>
                  My financial situation is stable, but I need my investments to
                  supplement my income.
                </span>
                <input
                  type='radio'
                  name='financial'
                  value='2'
                  onChange={handleChange}
                  checked={financial === '2'}
                />
              </div>
              <div className={styles.forming}>
                <span>
                  My financial situation is stable, and I do not currently need
                  my investments to supplement my income. However, this may
                  change.
                </span>
                <input
                  type='radio'
                  name='financial'
                  value='4'
                  onChange={handleChange}
                  checked={financial === '4'}
                />
              </div>
              <div className={styles.forming}>
                <span>
                  My financial situation is stable, and I do not use my
                  investments to supplement my income. However, I may need to
                  access these funds if an unexpected emergency arises.
                </span>
                <input
                  type='radio'
                  name='financial'
                  value='6'
                  onChange={handleChange}
                  checked={financial === '6'}
                />
              </div>
              <div className={styles.forming}>
                <span>
                  My financial situation is stable, and I have sufficient cash
                  flow from my income to meet my expenses, including unexpected
                  emergencies.
                </span>
                <input
                  type='radio'
                  name='financial'
                  value='8'
                  onChange={handleChange}
                  checked={financial === '8'}
                />
              </div>
              <div className={styles.forming}>
                <span>
                  My financial situation is completely secure and I can meet
                  emergency requirements without withdrawing money from
                  long-term investments.
                </span>
                <input
                  type='radio'
                  name='financial'
                  value='10'
                  onChange={handleChange}
                  checked={financial === '10'}
                />
              </div>
            </form>
            <div className={styles.progress_strength}>
              <div className={styles.progress_arrow}></div>
              <progress max='100' value='40' className='strength' />
              <small>40% Complete</small>
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

export default Financial;
