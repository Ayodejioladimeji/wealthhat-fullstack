import React, { useContext } from 'react';
import { Context } from '../../Context';
import Sidebar from '../components/sidebar/Sidebar';
import styles from '../../GlobalStyle.module.css';
import Activities from './../components/activity/Activity';

const InvestmentPortfolio = () => {
  const state = useContext(Context);
  const [isOpen] = state.isOpen;

  return (
    <div>
      <Sidebar />
      <div className={`${isOpen ? styles.response : styles.responsive}`}>
        <Activities />
      </div>
    </div>
  );
};

export default InvestmentPortfolio;
