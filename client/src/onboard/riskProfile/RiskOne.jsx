import React from 'react';
import { useHistory } from 'react-router';
import Topbar from '../topbar/Topbar';
import styles from './Risk.module.css';
import HowOld from './howold/HowOld';

const RiskOne = ({ navigation, values, handleChange }) => {
  const history = useHistory();
  return (
    <>
      <Topbar title='Risk Assessment Profile' step=' -- Step Two' />
      <div className={styles.risk}>
        <div className={styles.risk_top}>
          <HowOld handleChange={handleChange} values={values} />
        </div>

        <div className={styles.risk_bottom}>
          <button
            // style={{ visibility: 'hidden' }}
            onClick={() => history.push('/onboarding')}
            id={styles.buttons}
            className='btn px-4'
          >
            GO HOME
          </button>

          <button
            id={styles.button}
            className='btn px-4'
            onClick={() => navigation.next()}
            disabled={values.howOld === '' ? true : false}
          >
            CONTINUE
          </button>
        </div>
      </div>
    </>
  );
};

export default RiskOne;
