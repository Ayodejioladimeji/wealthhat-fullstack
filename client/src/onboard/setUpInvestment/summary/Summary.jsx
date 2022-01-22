import React, {useContext} from "react";

// PACKAGES
import {Context} from '../../../Context'
import styles from './Summary.module.css'
import Topbar from '../../topbar/Topbar';
import {toCommas} from '../../../utils/Utils'

const Summary = ({ navigation, values }) => {
    const {savingFor,portName,years,target,starting,monthly} = values
    const state = useContext(Context)

    const [user] = state.userApi.user


  return (
    <>
      <Topbar title="Portfolio Summary" />

      <div className={styles.summary}>
        <div className={styles.summary_center}>
          <div className={styles.summary_box}>
            <p>Portfolio Name</p>
            <h3>{portName}</h3>
          </div>

          <div className={styles.summary_box}>
            <p>Investment Goal</p>
            <h3>{savingFor}</h3>
          </div>

          <div className={styles.summary_box}>
            <p>Starting Contribution</p>
            <h3>
              <span>$</span>{toCommas(starting)}
            </h3>
          </div>

          <div className={styles.summary_box}>
            <p>Monthly Contribution</p>
            <h3>
              <span>$</span>{toCommas(monthly)}
            </h3>
          </div>

          <div className={styles.summary_box}>
            <p>Time Frame</p>
            <h3>{`${years} years`}</h3>
          </div>

          <div className={styles.summary_box}>
            <p>Risk Profile</p>
            <h3>{user.riskProfile}</h3>
          </div>

          <div className={styles.summary_box}>
            <p>Target Amount</p>
            <h3>
            <span>$</span>{toCommas(target)}
            </h3>
          </div>

          <div className={styles.setup_buttons}>
            <button
              onClick={() => navigation.previous()}
              id={styles.buttons}
              className="btn px-4"
            >
              Back
            </button>
            <button
              onClick={() => navigation.next()}
              id={styles.button}
              className="btn px-4"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
