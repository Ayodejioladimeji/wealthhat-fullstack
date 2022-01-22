import React from 'react';
import Topbar from '../../topbar/Topbar';
import styles from './Review.module.css';
import { toCommas } from './../../../utils/Utils';

const Review = ({ navigation, values }) => {
  return (
    <>
      <Topbar title='New Investment Portfolio' />
      <div className={styles.review}>
        <div className={styles.review_center}>
          <h3>Portfolio review</h3>
          <div className={styles.review_div}>
            <h4>Before we continue</h4>
            <p>
              Will you have sufficient emergency funds available after making
              these contributions?
            </p>
            <div className={styles.review_box}>
              <div className={styles.contribute}>
                <small>Starting contribution</small>
                <small style={{ fontWeight: '600' }}>
                  ${toCommas(values.starting)}
                </small>
              </div>
              <div className={styles.contribute}>
                <small>Monthly contribution</small>
                <small style={{ fontWeight: '600' }}>
                  ${toCommas(values.monthly)}
                </small>
              </div>
            </div>

            <div className={styles.setup_buttons}>
              <button
                onClick={() => navigation.previous()}
                id={styles.buttons}
                className='btn px-4'
              >
                Back
              </button>
              <button
                onClick={() => navigation.next()}
                id={styles.button}
                className='btn px-4'
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
