import React, { useContext } from 'react';
import { Context } from '../../Context';
import Sidebar from '../components/sidebar/Sidebar';
import styles from '../../GlobalStyle.module.css';
import Setting from './../components/settings/Settings';

const Settings = () => {
  const state = useContext(Context);
  const [isOpen] = state.isOpen;

  return (
    <div>
      <Sidebar />
      <div className={`${isOpen ? styles.response : styles.responsive}`}>
        <Setting />
      </div>
    </div>
  );
};

export default Settings;
