import React from 'react';

// PACKAGES

// COMPONENTS
import HomeServices from '../homeservice/HomeServices';
import Topbar from '../../topbar/Topbar';
import styles from './HomeScreen.module.css';
import { getDataAPI } from './../../../utils/fetchData';
import { useContext } from 'react';
import { Context } from './../../../Context';

const HomeScreen = ({ navigation }) => {
  const state = useContext(Context);
  const [token] = state.token;

  // LOGOUT USER
  const logoutUser = async () => {
    await getDataAPI('logout', token);
    localStorage.removeItem('firstLogin');

    window.location.href = '/';
  };

  return (
    <>
      <Topbar title='Continue your investment journey with WealthHat' />
      <div className={styles.homescreen}>
        <div className={styles.homescreen_top}>
          <HomeServices />
        </div>

        <div className={styles.homescreen_bottom}>
          <button onClick={logoutUser} id={styles.buttons} className='btn px-4'>
            EXIT
          </button>

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
