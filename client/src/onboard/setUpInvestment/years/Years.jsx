import React from 'react';
import Topbar from '../../topbar/Topbar';
import styles from './Years.module.css';

const Years = ({ navigation, handleChange, values }) => {
  const { years, portName } = values;
  return (
    <>
      <Topbar title='New Investment Portfolio' />

      <div className={styles.setup_display}>
        <div className={styles.display_title}>{portName} </div>
        <div className={styles.display}>
          <div
            className={styles.display_one}
            style={{ borderBottom: '1px solid green' }}
          >
            <small style={{ fontWeight: 'bold' }}>{years}Yrs</small>
            <small>Time Frame</small>
          </div>
          <div className={styles.display_two}>
            <small style={{ visibility: 'hidden' }}>Starting</small>
            <small style={{ color: 'var(--deep)' }}>Starting</small>
          </div>
          <div className={styles.display_three}>
            <small style={{ visibility: 'hidden' }}>Monthly</small>
            <small style={{ color: 'var(--deep)' }}>Monthly</small>
          </div>
        </div>
      </div>

      <div className={styles.setups}>
        <div className={styles.setup_center}>
          <div className={styles.setup_center_divs}>
            <h4 className='text-center'>
              How many years do you plan to invest for?
            </h4>

            <p className={styles.longer}>The longer the better</p>
            <div className={styles.setup_year}>
              <input
                type='range'
                name='years'
                min='0'
                max='50'
                value={years}
                onChange={handleChange}
                className={styles.range}
              />
              <div className={styles.output}>{years}</div>
            </div>

            <div className={styles.setup_buttons}>
              <button
                onClick={() => navigation.previous()}
                id={styles.buttons}
                className='btn px-5'
              >
                Back
              </button>
              <button
                disabled={years <= 0 ? true : false}
                onClick={() => navigation.next()}
                id={styles.button}
                className='btn px-4'
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Years;
