import React from 'react';
import Topbar from '../topbar/Topbar';
import styles from './Risk.module.css';
import Percentage from './percentage/Percentage';

const RiskNine = ({ navigation, handleChange, values }) => {
  return (
    <>
      <Topbar title='Risk Assessment Profile' />
      <div className={styles.risk}>
        <div className={styles.risk_top}>
          <Percentage handleChange={handleChange} values={values} />
        </div>

        <div className={styles.risk_bottom}>
          <button
            onClick={() => navigation.previous()}
            id={styles.buttons}
            className='btn px-4'
          >
            PREVIOUS
          </button>

          <button
            id={styles.button}
            className='btn px-4'
            onClick={() => navigation.next()}
            disabled={values.percentage === '' ? true : false}
          >
            CONTINUE
          </button>
        </div>
      </div>
    </>
  );
};

export default RiskNine;
