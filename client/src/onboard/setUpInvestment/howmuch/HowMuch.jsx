import React from 'react';

// PACKAGES

// COMPONENTS
import Topbar from '../../topbar/Topbar';
import styles from './HowMuch.module.css';
import { toCommas } from './../../../utils/Utils';
import LoadButton from './../../../shared/LoadButton';

const HowMuch = ({ navigation, handleChange, handleSubmit, loading,values }) => {
  const { years, portName, starting, monthly } = values;

  return (
    <>
      <Topbar title='New Investment Portfolio' />
      <div className={styles.setup_display}>
        <div className={styles.display_title}>{portName}</div>
        <div className={styles.display}>
          <div className={styles.display_one}>
            <small style={{ fontWeight: 'bold' }}>{years}Yrs</small>
            <span>Time Frame</span>
          </div>
          <div
            className={styles.display_two}
            style={{ borderBottom: '1px solid green' }}
          >
            <small style={{ fontWeight: 'bold' }}>${toCommas(starting)}</small>
            <span>Starting</span>
          </div>
          <div
            className={styles.display_three}
            style={{ borderBottom: '1px solid green' }}
          >
            <small style={{ fontWeight: 'bold' }}>${toCommas(monthly)}</small>
            <span>Monthly</span>
          </div>
        </div>
      </div>

      <div className={styles.setups}>
        <div className={styles.setup_center}>
          <div className={styles.setup_center_divs}>
            <h4 className='text-center'>How much can you invest?</h4>
            <small style={{ marginBottom: '10px' }}>Starting amount</small>
            <div className={styles.setup_year}>
              <input
                type='range'
                min='0'
                max='1000000'
                name='starting'
                value={starting}
                onChange={handleChange}
                className={styles.range}
              />

              <input
                type='number'
                value={starting}
                name='starting'
                onChange={handleChange}
                className={styles.output}
              />
              
              {/* <div className={styles.output}>${toCommas(starting)}</div> */}
            </div>

            <br />
            <br />

            <small style={{ marginBottom: '10px' }}>Monthly</small>
            <div className={styles.setup_year}>
              <input
                type='range'
                min='0'
                max='100000'
                name='monthly'
                value={monthly}
                onChange={handleChange}
                className={styles.range}
              />
              <input
                type='number'
                value={monthly}
                name='monthly'
                onChange={handleChange}
                className={styles.output}
              />
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
                disabled={starting <= 0 || monthly <= 0 ? true : false}
                onClick={handleSubmit}
                // onClick={() => navigation.next()}
                id={styles.button}
                className='btn px-4'
              >
                {loading ? (
              <LoadButton height='20px' width='20px' color='white' />
            ) : (
              'Submit'
            )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowMuch;
