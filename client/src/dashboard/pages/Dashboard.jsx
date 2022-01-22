import React, { useContext } from 'react';

// PACKAGES
import { FiMenu } from 'react-icons/fi';

// COMPONENTS
import { Context } from '../../Context';
import logo from '../../assets/logo.png';
import Sidebar from '../components/sidebar/Sidebar';
import Home from './../components/home/Home';
import styles from '../../GlobalStyle.module.css';

const Dashboard = () => {
  const state = useContext(Context);
  const [user] = state.userApi.user;
  const [isOpen] = state.isOpen;
  const { openSidebar } = state;

  return (
    <div>
      <Sidebar />
      <div className={`${isOpen ? styles.response : styles.responsive}`}>
        <div className={styles.menu}>
          <img src={logo} alt='logo' />
          <FiMenu onClick={openSidebar} />
        </div>
        <Home />
      </div>
    </div>
  );
};

export default Dashboard;
