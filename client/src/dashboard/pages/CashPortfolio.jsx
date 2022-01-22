import React, { useContext } from 'react';
import { Context } from '../../Context';
import Sidebar from '../components/sidebar/Sidebar';
import styles from '../../GlobalStyle.module.css';
import CashPortfolios from './../components/cash/CashPortfolio';

const CashPortfolio = () => {
  const state = useContext(Context);
  const [isOpen] = state.isOpen;

  return (
    <div>
      <Sidebar />
      <div className={`${isOpen ? styles.response : styles.responsive}`}>
        <CashPortfolios />
      </div>
    </div>
  );
};

export default CashPortfolio;
