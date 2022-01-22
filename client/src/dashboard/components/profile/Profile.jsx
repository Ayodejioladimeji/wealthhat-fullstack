import React from 'react';


// COMPONENTS
import Tab from '../profiletab/Tab';
import styles from './Profile.module.css'

const Profile = () => {
  return (
    <div className={styles.profile}>
      <Tab/>
    </div>
  );
};

export default Profile;
