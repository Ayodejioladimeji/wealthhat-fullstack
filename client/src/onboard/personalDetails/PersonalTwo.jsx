import React from 'react';
import Topbar from '../topbar/Topbar';
import styles from './Personal.module.css';
import BankDetails from './bankdetails/BankDetails';

const PersonalTwo = ({ navigation, handleChange, data }) => {
  return (
    <>
      <Topbar title='Bank Details' />
      <div className={styles.personal}>
        <div className={styles.personal_top}>
          <BankDetails data={data} handleChange={handleChange} />
        </div>

        <div className={styles.personal_bottom}>
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
          >
            CONTINUE
          </button>
        </div>
      </div>
    </>
  );
};

export default PersonalTwo;
