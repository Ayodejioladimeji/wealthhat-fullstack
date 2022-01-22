import React from 'react';

// PACKAGES
import { useHistory } from 'react-router-dom';

// COMPONENTS
import styles from './Verification.module.css';
import verify from '../../assets/envelope.jpg';

const Register = () => {
  const history = useHistory();
  return (
    <>
      <div className={styles.verification_left}>
        <div className={styles.verification_left_div}>
          <h1>An investment advisor that’s focused on you</h1>
          <p>
            Save yourself the stress and uncertainty of facing thousands of
            investment choices.
          </p>
        </div>
      </div>

      <div className={styles.verification_right}>
        <div className={styles.verification_right_div}>
          <div className={styles.verified_center}>
            <div className={styles.verify_image}>
              <img src={verify} alt='verify-pic' />
            </div>

            <div className={styles.verify_div}>
              <h2>Confirm Your Email Address</h2>
              <p>We sent a confirmation mail to you</p>
              <p>
                Check your email and click on the confirmation button to
                Activate your Account
              </p>
              <div className={styles.open}>
                <button onClick={() => history.push('/')} className='btn'>
                  Proceed to Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
