import React from 'react';
import { FaRegFilePdf } from 'react-icons/fa';
import styles from './TermsConditions.module.css';

const TermsConditions = ({ setCheck }) => {
  return (
    <div className={styles.terms_info}>
      <div className={styles.info_center}>
        <div className={styles.form_div}>
          <div className={styles.form_div_box}>
            <small>
              WealthHat agreement, Terms and Conditions
              <FaRegFilePdf className={styles.pdf} />
            </small>
            <hr />

            <div className={styles.terms_one}>
              <h3>Why do the investing for you</h3>
              <p>
                WealthHat is a discretionary investment service which means we
                make decicion on how to invest money on your behalf
              </p>
            </div>

            <div className={styles.terms_two}>
              <h3>We only advice investment within WealthHat</h3>
              <p>
                We help you choose the WealthHat portfolio that is right for you
                and then adjust it on an ongoing basis to keep in line with your
                goals. We do not give advice about investment you have outside
                WealthHat.
              </p>
            </div>

            <div className={styles.terms_three}>
              <h3>We charge a fee</h3>
              <p>
                Like other investment managers, WealthHat charge a fee for
                managing your investments. In addition, the investments we buy
                for you have a cost, charged by the fund providers and when we
                trade we are subject to the effect of market spread.
              </p>
            </div>
          </div>

          <div className={styles.agree}>
            <input
              type='checkbox'
              onChange={(e) => setCheck(e.target.checked)}
            />
            <span>
              I confirm that I have accurately represented my information and
              that I have agree to the WealthHat client Agreement and Terms and
              Conditons
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
