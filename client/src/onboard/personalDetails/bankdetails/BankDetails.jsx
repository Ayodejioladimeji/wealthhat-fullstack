import React from 'react';

// COMPONENTS
import styles from './BankDetails.module.css';
import { banks } from '../../../constants/banks';

const BankDetails = ({ handleChange, data }) => {
  const { bvn, accountNumber, bank } = data;

  return (
    <div className={styles.bank_info}>
      <div className={styles.info_center}>
        <div className={styles.form_div}>
          <small>
            Entering your details will NOT create a payment to WealthHat. We
            will use them to verify your identity and your processing for
            withdrawals. This must be a verified account and you must be a named
            holder.
          </small>
          <form>
            <div className={styles.form_group}>
              <label htmlFor='bvn' className={styles.form_label}>
                Bvn
              </label>
              <input
                type='number'
                id='bvn'
                name='bvn'
                value={bvn}
                onChange={handleChange}
                placeholder='Please enter your Bvn'
              />
            </div>

            <div className={styles.form_group}>
              <label htmlFor='account' className={styles.form_label}>
                Account Number
              </label>
              <input
                type='number'
                id='account'
                name='accountNumber'
                value={accountNumber}
                onChange={handleChange}
                placeholder='Please enter your account number'
              />
            </div>

            <div className={styles.form_group}>
              <label htmlFor='bank'>Bank Details</label>
              <select
                id='bank'
                name='bank'
                onChange={handleChange}
                value={bank}
              >
                <option defaultValue>Choose Bank</option>
                {banks.map((item) => (
                  <option key={item.id}>{item.name}</option>
                ))}
              </select>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BankDetails;
