import React, { useContext } from 'react';
import { Context } from '../../Context';
import Sidebar from '../components/sidebar/Sidebar';
import styles from '../../GlobalStyle.module.css';
import Withdrawals from './../components/withdrawal/withdrawal';

const Withdrawal = () => {
  const state = useContext(Context);
  const [isOpen] = state.isOpen;

  return (
    <div>
      <Sidebar />
      <div className={`${isOpen ? styles.response : styles.responsive}`}>
        <Withdrawals />
      </div>
    </div>
  );
};

export default Withdrawal;
