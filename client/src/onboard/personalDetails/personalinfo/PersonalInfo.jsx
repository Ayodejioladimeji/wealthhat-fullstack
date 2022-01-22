import React from 'react';

// COMPONENTS
import styles from './PersonalInfo.module.css';
import { months, day } from '../../../constants/months';
import { date } from '../../../constants/date';
import { countries } from '../../../constants/countries';

const PersonalInfo = ({ handleChange, data }) => {
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
    <div className={styles.personal_info}>
      <div className={styles.info_center}>
        <p>Let's setup your account</p>
        <div className={styles.form_div}>
          <form>
            <div className={styles.form_group}>
              <label htmlFor='title'>Title</label>
              <select
                id='title'
                name='title'
                value={title}
                onChange={handleChange}
              >
                <option defaultValue>Choose Title</option>
                <option>Mr</option>
                <option>Mrs</option>
                <option>Master</option>
                <option>Miss</option>
              </select>
            </div>

            <div className={styles.form_group}>
              <label htmlFor='firstname' className={styles.form_label}>
                First Name
              </label>
              <input
                type='text'
                id='firstname'
                name='firstname'
                value={firstname}
                onChange={handleChange}
                placeholder='Please enter your firstname'
              />
            </div>

            <div className={styles.form_group}>
              <label htmlFor='lastname' className={styles.form_label}>
                Last Name
              </label>
              <input
                type='text'
                id='lastname'
                name='lastname'
                value={lastname}
                onChange={handleChange}
                placeholder='Please enter your lastname'
              />
            </div>

            <div className={styles.form_group}>
              <label htmlFor='gender'>Gender</label>
              <select
                id='gender'
                name='gender'
                value={gender}
                onChange={handleChange}
              >
                <option defaultValue>Choose Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Others</option>
              </select>
            </div>

            <div className={styles.form_group}>
              <label htmlFor='nationality'>Nationality</label>
              <select
                id='nationality'
                name='nationality'
                value={nationality}
                onChange={handleChange}
              >
                <option defaultValue>Choose Country</option>
                {countries.map((item, index) => (
                  <option key={index}>{item.name}</option>
                ))}
              </select>
            </div>

            <div className='row'>
              <div className='col-md-4'>
                <label htmlFor='day'>Date of Birth</label>
                <select
                  id='day'
                  name='dayofbirth'
                  value={dayofbirth}
                  onChange={handleChange}
                >
                  <option defaultValue>Choose Day</option>
                  {day.map((item, index) => (
                    <option key={index}>{item.title}</option>
                  ))}
                </select>
              </div>

              <div className='col-md-4'>
                <label htmlFor='month' className={styles.birth}>
                  Month
                </label>
                <select
                  id='month'
                  name='monthofbirth'
                  className={styles.sel}
                  value={monthofbirth}
                  onChange={handleChange}
                >
                  <option defaultValue>Choose Month</option>
                  {months.map((item, index) => (
                    <option key={index}>{item.title}</option>
                  ))}
                </select>
              </div>

              <div className='col-md-4'>
                <label htmlFor='year' className={styles.birth}>
                  Year
                </label>
                <select
                  id='year'
                  name='yearofbirth'
                  className={styles.sel}
                  value={yearofbirth}
                  onChange={handleChange}
                >
                  <option defaultValue>Choose Year</option>
                  {date.map((item, index) => (
                    <option key={index}>{item.title}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className={styles.form_group}>
              <label htmlFor='phone'>Phone number</label>
              <input
                type='text'
                id='phone'
                name='phone'
                value={phone}
                onChange={handleChange}
                placeholder='Please enter your phone number'
              />
            </div>

            <div className={styles.form_group}>
              <label htmlFor='address'>Address</label>
              <input
                type='text'
                id='address'
                name='address'
                value={address}
                onChange={handleChange}
                placeholder='Please enter your address'
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
