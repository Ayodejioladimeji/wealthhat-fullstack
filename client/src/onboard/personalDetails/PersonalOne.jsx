import React from 'react';
import Topbar from '../topbar/Topbar';
import styles from './Personal.module.css';
import PersonalInfo from './personalinfo/PersonalInfo';

const PersonalOne = ({ navigation, handleChange, data }) => {
  const {
    title,
    firstname,
    lastname,
    gender,
    nationality,
    dayofbirth,
    monthofbirth,
    yearofbirth,
    phone,
    address,
  } = data;
  return (
    <>
      <Topbar title='Personal Details' step=' -- Step One' />
      <div className={styles.personal}>
        <div className={styles.personal_top}>
          <PersonalInfo handleChange={handleChange} data={data} />
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
            disabled={
              !title ||
              !firstname ||
              !lastname ||
              !gender ||
              !nationality ||
              !dayofbirth ||
              !monthofbirth ||
              !yearofbirth ||
              !phone ||
              !address
                ? true
                : false
            }
          >
            CONTINUE
          </button>
        </div>
      </div>
    </>
  );
};

export default PersonalOne;
