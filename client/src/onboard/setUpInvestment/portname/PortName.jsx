import React, { useState } from 'react';
// import { formatMoney, toCommas } from '../../../utils/Utils';
import Topbar from '../../topbar/Topbar';
import styles from './PortName.module.css';



const PortName = ({ navigation, handleChange, values }) => {
  const [input, setInput] = useState(false);

  const { portName, target } = values;



  return ( 
    <>
      <Topbar title='New Investment Portfolio' />
      <div className={styles.setup}>
        <div className={styles.setup_center}>
          <div className={styles.setup_center_divs}>
            <h4>Give your portfolio a name</h4>
            <p>
              To help you stay on track it’s useful to give your portfolio a
              name.
            </p>

            <label htmlFor='name'>Name of Portfolio</label>
            <input
              type='text'
              name='portName'
              onChange={handleChange}
              value={portName}
              placeholder='E.g My Investment'
            />

            <div
              onClick={() => setInput(true)}
              className={`text-center ${styles.optional}`}
            >
              Add an optional target amount
            </div>

            {input && (
              <div className={styles.option_div}>
                <label htmlFor='amount'>Target amount</label>
                <input
                  type='text'
                  name='target'
                  value={target}
                  onChange={handleChange}
                  placeholder='$500,000'
                />
              </div>
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
                disabled={portName === '' ? true : false}
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

export default PortName;
