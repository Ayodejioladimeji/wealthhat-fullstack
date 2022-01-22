import React from 'react';
import { useHistory } from 'react-router';
import Topbar from '../onboard/topbar/Topbar';
import styles from '../styles/RiskAssessment.module.css';

const RiskAssessment = () => {
  const history = useHistory();

  const save = () => {
    history.push('/onboarding/risk_profile');
  };

  return (
    <>
      <Topbar title='Risk Assessment Profile' />
      <div className={styles.risk}>
        <div className={styles.risk_center}>
          <h3>
            You’re just minutes away from setting up your WealthHat account
          </h3>
          <p>
            We’re going to ask you some questions to find out how you feel about
            risk. The questionnaire is designed to assess your investment
            profile and aid in building a customized and personalized WealthHat
            investment portfolio best suited for you. This short questions help
            measure your sensitivity to risk, your investment time frame, stage
            of life, financial situation, and investment objective. Remember,
            there are no right or wrong answers - just what’s ideal for you!
            <br />
            <br />
            We recommend that you review your investor profile periodically or
            whenever changes take place in your personal or financial situation.{' '}
          </p>

          <div className={styles.risk_button}>
            <button onClick={save} className='btn'>
              Let's Begin
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RiskAssessment;
