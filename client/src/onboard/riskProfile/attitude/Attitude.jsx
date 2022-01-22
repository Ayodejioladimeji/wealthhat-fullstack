import React, { useEffect, useContext, useState } from 'react';

// COMPONENTS
import styles from './Attitude.module.css';
import Aggressive from './Aggressive';
import Growth from './Growth';
import Balanced from './Balanced';
import Cautious from './Cautious';
import Curious from './Curious';
import LoadButton from './../../../shared/LoadButton';
import { riskProfile } from '../../../utils/Utils';
import { Context } from './../../../Context';
import { patchDataAPI } from '../../../utils/fetchData';

const initialState = {
  riskProfile:''
}

const Attitude = ({ navigation }) => {
  const state = useContext(Context)
  const [token] = state.token
  const [res, setRes] = useState(0);
  const [data, setData] = useState(initialState)
  const [loading, setLoading] = useState(false)

  // CHECKING FOR THE ATTITUDE OUTPUT
  useEffect(() => {
      const result = sessionStorage.getItem('profile');
      setRes(result)
      const response = riskProfile(result)
      setData({riskProfile:response})
  }, []);




  // THE HANDLERISK FUNCTION
  const handleRisk = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      await patchDataAPI('update', data, token)
      setData({...data})
      setLoading(false)
      window.location.href='/onboarding/setup_investment'
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={styles.attitude}>
      {res >= 76 ? (
        <Aggressive />
      ) : res >= 62 ? (
        <Growth />
      ) : res >= 48 ? (
        <Balanced />
      ) : res >= 34 ? (
        <Cautious />
      ) : (
        <Curious />
      )}

      <div className={styles.attitude_center}>
        <h4>Are you comfortable with this asssessment?</h4>
        <div className={styles.tolerance_button}>
          <button
            onClick={() => navigation.next()}
            className='btn'
            id={styles.buttons}
          >
            Retake assessment
          </button>

          <button onClick={handleRisk} className='btn' id={styles.button}>
            {loading ? (
              <LoadButton height='20px' width='20px' color='white' />
            ) : (
              'Save & Continue'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Attitude;
