import React, { useState } from 'react';
import Topbar from '../../topbar/Topbar';
import styles from './SetUp.module.css';

const SetUp = ({ navigation, handleChange, values, setValues }) => {
  const {savingFor} = values
  const [show, setShow] = useState(false);

  return (
    <>
      <Topbar title='New Investment Portfolio' />
      <div className={styles.setup}>
        <div className={styles.setup_center}>
          <h3>What are you saving for?</h3>
          <div className={styles.setup_center_div}>
            <ul className={styles.setupbox}>
              <div onClick={() => setShow(false)}>
                <input
                  type='radio'
                  id='house'
                  name='savingFor'
                  onChange={handleChange}
                  checked={savingFor === 'house'}
                  value='house'
                />
                <label htmlFor='house'>House</label>
              </div>
              <div onClick={() => setShow(false)}>
                <input
                  type='radio'
                  id='child'
                  name='savingFor'
                  onChange={handleChange}
                  checked={savingFor === 'child'}
                  value='child'
                />
                <label htmlFor='child'>Child</label>
              </div>
              <div onClick={() => setShow(false)}>
                <input
                  type='radio'
                  id='retirement'
                  name='savingFor'
                  onChange={handleChange}
                  checked={savingFor === 'retirement'}
                  value='retirement'
                />
                <label htmlFor='retirement'>Retirement</label>
              </div>
              <div onClick={() => setShow(false)}>
                <input
                  type='radio'
                  id='car'
                  name='savingFor'
                  onChange={handleChange}
                  checked={savingFor === 'car'}
                  value='car'
                />
                <label htmlFor='car'>Car</label>
              </div>
              <div onClick={() => setShow(false)}>
                <input
                  type='radio'
                  id='relocation'
                  name='savingFor'
                  onChange={handleChange}
                  checked={savingFor === 'relocation'}
                  value='relocation'
                />
                <label htmlFor='relocation'>Relocation</label>
              </div>
              <div onClick={() => setShow(false)}>
                <input
                  type='radio'
                  id='anniversary'
                  name='savingFor'
                  onChange={handleChange}
                  checked={savingFor === 'anniversary'}
                  value='anniversary'
                />
                <label htmlFor='anniversary'>Anniversary</label>
              </div>
              <div onClick={() => setShow(false)}>
                <input
                  type='radio'
                  id='rainy'
                  name='savingFor'
                  onChange={handleChange}
                  checked={savingFor === 'rainy'}
                  value='rainy'
                />
                <label htmlFor='rainy'>Rainy Day</label>
              </div>
              <div onClick={() => setShow(false)}>
                <input
                  type='radio'
                  id='spend'
                  name='savingFor'
                  onChange={handleChange}
                  checked={savingFor === 'spend'}
                  value='spend'
                />
                <label htmlFor='spend'>Big Spend</label>
              </div>
              <div onClick={() => setShow(true)}>
                <input
                  type='radio'
                  id='other'
                  name='savingFor'
                  checked={show ? true : false}
                  value={savingFor}
                  onChange={handleChange}
                />
                <label htmlFor='other'>Others</label>
              </div>
            </ul>

            {show && (
              <input
                type='text'
                name='savingFor'
                value={savingFor}
                onChange={handleChange}
                placeholder='what are you saving for?'
              />
            )}

            <div className={styles.setup_buttons}>
              <button
                onClick={() => navigation.previous()}
                id={styles.buttons}
                className='btn px-5'
              >
                Back
              </button>
              <button
                disabled={savingFor === '' ? true : false}
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

export default SetUp;
