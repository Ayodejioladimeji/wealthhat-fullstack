import React from 'react';

// PACKAGES
import Loader from 'react-loader-spinner';

// COMPONENTS
import styles from './LoadButton.module.css';

const LoadButton = ({ height, width, color }) => {
  return (
    <div className={styles.loading}>
      <Loader type='Oval' color={color} height={height} width={width} />
      <div style={{ marginLeft: '10px' }}>Loading</div>
    </div>
  );
};

export default LoadButton;
