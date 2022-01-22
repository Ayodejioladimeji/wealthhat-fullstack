import React from 'react';
import Topbar from '../topbar/Topbar';
import styles from './Risk.module.css';
import LoadButton from './../../shared/LoadButton';
import Approach from './approach/Approach';

const RiskTen = ({
  navigation,
  values,
  handleChange,
  handleAttitude,
  loading,
}) => {
  return (
    <>
      <Topbar title='Risk Assessment Profile' />
      <div className={styles.risk}>
        <div className={styles.risk_top}>
          <Approach handleChange={handleChange} values={values} />
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
            onClick={handleAttitude}
            disabled={values.approach === '' ? true : false}
          >
            {loading ? (
              <LoadButton height='20px' width='20px' color='white' />
            ) : (
              'CONTINUE'
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default RiskTen;
