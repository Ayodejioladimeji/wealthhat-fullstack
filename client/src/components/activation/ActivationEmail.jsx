import React, { useState, useEffect } from 'react';

// PACKAGES
import { useHistory, useParams } from 'react-router-dom';

// COMPONENTS
import rejected from './not.jpeg';
import download from './download.jpeg';
import styles from './activationEmail.module.css';
import { postDataAPI } from './../../utils/fetchData';

const ActivationEmail = () => {
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const { activation_token } = useParams();
  const history = useHistory();

  // CHECK OF THE ACTIVATION TOKEN
  useEffect(() => {
    if (activation_token) {
      const activationEmail = async () => {
        try {
          const res = await postDataAPI('activation', { activation_token });
          setSuccess(res.data.msg);
        } catch (error) {
          setError(error.response.data.msg);
        }
      };
      activationEmail();
    }
  }, [activation_token]);

  const activate = () => {
    return (
      <>
        <div className={styles.activated_image}>
          <img src={download} alt='active' />
        </div>

        <div className={styles.active_div}>
          <h2>VERIFIED</h2>
          <p>{success && 'Account Verified'}</p>
          <button onClick={() => history.push('/')}>Start Investing</button>
        </div>
      </>
    );
  };

  const nonactivate = () => {
    return (
      <>
        <div className={styles.activated_image}>
          <img src={rejected} alt='active' />
        </div>

        <div className={styles.active_div}>
          <h2>UNVERIFIED</h2>
          <p>{error && 'Session Expired'}</p>
          <button onClick={() => history.push('/sign_up')}>
            Register or Login
          </button>
        </div>
      </>
    );
  };

  return (
    <div className={styles.activated}>
      <div className={styles.activated_centers}>
        <div className={styles.activated_left}>
          <div className={styles.activated_left_div}>
            <h1>An investment advisor that’s focused on you</h1>
            <p>
              Save yourself the stress and uncertainty of facing thousands of
              investment choices.
            </p>
          </div>
        </div>

        <div className={styles.activated_right}>
          <div className={styles.activated_right_div}>
            <div className={styles.activated_center}>
              {success ? activate() : ''}
              {error ? nonactivate() : ''}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivationEmail;
