import React from 'react';
import { Link } from 'react-router-dom';
import HomeServices from '../homeservice/HomeServices';
import Topbar from '../../topbar/Topbar';
import styles from './HomeScreen.module.css';

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <Topbar title='Continue your investment journey with WealthHat' />
      <div className={styles.homescreen}>
        <div className={styles.homescreen_top}>
          <HomeServices />
        </div>

        <div className={styles.homescreen_bottom}>
          <Link to='/dashboard/profile'>
            <button
              style={{ visibility: 'hidden' }}
              id={styles.buttons}
              className='btn px-4'
            >
              EXIT
            </button>
          </Link>

          <button
            id={styles.button}
            className='btn'
            onClick={() => navigation.next()}
          >
            CONTINUE
          </button>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
