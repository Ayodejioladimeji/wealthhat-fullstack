import React from 'react';
import styles from './PersonalInfo.module.css';




const PersonalInfo = () => {
  return (
    <div className={styles.personal_info}>
      <div className={styles.info_center}>
        <p>Contact and Identity Information</p>
        <div className={styles.form_div}>
          <form>
          <div className={styles.form_group}>
              <label htmlFor='fullname' className={styles.form_label}>
                Title
              </label>
              <input
                type='text'
                placeholder='Mr'
                disabled
              />
            </div>


            <div className={styles.form_group}>
              <label htmlFor='firstname' className={styles.form_label}>
                First Name
              </label>
              <input
                type='text'
                placeholder='Ayodeji'
                disabled
              />
            </div>

            <div className={styles.form_group}>
              <label htmlFor='lastname' className={styles.form_label}>
                Last Name
              </label>
              <input
                type='text'
                placeholder='Oladimeji'
                disabled
              />
            </div>

            <div className={styles.form_group}>
              <label htmlFor='gender' className={styles.form_label}>Gender</label>
              <input
                type='text'
                placeholder='Gender'
                disabled
              />
            </div>

            <div className={styles.form_group}>
              <label htmlFor='nationality' className={styles.form_label}>Nationality</label>
              <input
                type='text'
                placeholder='Nigeria'
                disabled
              />
            </div>

            <div className='row'>
              <div className='col-md-4'>
                <label htmlFor='day' className={styles.form_label}>Date of Birth</label>
                <input
                type='text'
                placeholder='12'
                disabled
              />
              </div>
              <div className='col-md-4'>
                <label htmlFor='month' className={styles.birth}>
                  Month
                </label>
                <input
                type='text'
                placeholder='January'
                disabled
              />
              </div>
              <div className='col-md-4'>
                <label htmlFor='year' className={styles.birth}>
                  Year
                </label>
                <input
                type='text'
                placeholder='1982'
                disabled
              />
              </div>
            </div>

            <div className={styles.form_group}>
              <label htmlFor='phone' className={styles.form_label}>Phone number</label>
              <input
                type='text'
                id='phone'
                name='phone'
                placeholder='09087676543'
                disabled
              />
            </div>

            <div className={styles.form_group}>
              <label htmlFor='address' className={styles.form_label}>Address</label>
              <input
                type='text'
                id='address'
                name='address'
                placeholder='Please enter your address'
                disabled
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
