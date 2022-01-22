import React from 'react';
import styles from './Topbar.module.css';

const Topbar = ({ title, step }) => {
  return (
    <div className={styles.topbar}>
      <p>
        {title} <span>{step}</span>
      </p>
    </div>
  );
};

export default Topbar;
