import React from 'react';
import styles from './BankDetails.module.css';



const BankDetails = () => {
  return (
    <div className={styles.bank_info}>
      <div className={styles.info_center}>
        <div className={styles.form_div}>
          <small>
            To update your bank details please contact us
          </small>
          <form>
            <div className={styles.form_group}>
              <label htmlFor='bvn' className={styles.form_label}>
                Bvn
              </label>
              <input
                type='number'
                placeholder='32443423414'
                disabled
              />
            </div>

            <div className={styles.form_group}>
              <label htmlFor='account' className={styles.form_label}>
                Account Number
              </label>
              <input
                type='number'
                placeholder='354354354354'
                disabled
              />
            </div>

            <div className={styles.form_group}>
              <label htmlFor='bank' className={styles.form_label}>Bank Details</label>
              <input
                type='text'
                placeholder='Guaranty Trust Bank'
                disabled
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BankDetails;
