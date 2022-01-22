import React, { useContext } from 'react';
import { Context } from '../../Context';
import Sidebar from '../components/sidebar/Sidebar';
import styles from '../../GlobalStyle.module.css';
import Payin from './../components/payin/PayIn';

const PayIn = () => {
  const state = useContext(Context);
  const [isOpen] = state.isOpen;

  return (
    <div>
      <Sidebar />
      <div className={`${isOpen ? styles.response : styles.responsive}`}>
        <Payin />
      </div>
    </div>
  );
};

export default PayIn;
