import React, { useContext } from 'react';

// PACKAGES
import { FiMenu } from 'react-icons/fi';

// COMPONENTS
import { Context } from '../../Context';
import Sidebar from '../components/sidebar/Sidebar';
import styles from '../../GlobalStyle.module.css';
import Profiles from './../components/profile/Profile';

const Profile = () => {
  const state = useContext(Context);
  const [isOpen] = state.isOpen;
  const openSidebar = state.openSidebar

  return (
    <div>
      <Sidebar />
      <div className={`${isOpen ? styles.response : styles.responsive}`}>
        <div className={styles.menu}><FiMenu onClick={() => openSidebar}/></div>
        <Profiles />
      </div>
    </div>
  );
};

export default Profile;
