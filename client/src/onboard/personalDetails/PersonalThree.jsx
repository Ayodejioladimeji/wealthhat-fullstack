import React, { useState } from 'react';

// PACKAGES

// COMPONENTS
import TermsConditions from './Termsconditions/TermsConditions';
import Topbar from '../topbar/Topbar';
import styles from './Personal.module.css';
import LoadButton from './../../shared/LoadButton';

const PersonalThree = ({ navigation, updateInfor, loading }) => {
  const [check, setCheck] = useState(false);

  return (
    <>
      <Topbar title='Terms and Conditions' />
      <div className={styles.personal}>
        <div className={styles.personal_top}>
          <TermsConditions setCheck={setCheck} />
        </div>

        <div className={styles.personal_bottom}>
          <button
            onClick={() => navigation.previous()}
            id={styles.buttons}
            className='btn px-4'
          >
            PREVIOUS
          </button>

          <button
            disabled={!check ? true : false}
            id={styles.button}
            className='btn'
            onClick={updateInfor}
          >
            {loading ? (
              <LoadButton height='20px' width='20px' color='white' />
            ) : (
              'CONTINUE'
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default PersonalThree;
