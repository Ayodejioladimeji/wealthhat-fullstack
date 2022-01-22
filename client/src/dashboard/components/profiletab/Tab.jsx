import React, { useState, useEffect } from 'react';
import styles from './Tab.module.css';
import PersonalInfo from './PersonalInfo';
import BankDetails from './BankDetails';
import Aggressive from './Aggressive';


const Tab = () => {
  const [toggleState, setToggleState] = useState(1);
  const [menu, setMenu] = useState(true);

  useEffect(() => {
    setMenu(!menu);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className={styles.tabcontainer}>
      <div className={styles.tabcenter}>
        {/* THE SECTION OF THE TABS */}
        <div className={styles.bloctabs} onClick={() => setMenu(!menu)}>
          <button
            className={toggleState === 1 ? styles.activetabs : styles.tabs}
            onClick={() => toggleTab(1)}
          >
            Personal Details
          </button>

          <button
            className={toggleState === 2 ? styles.activetabs : styles.tabs}
            onClick={() => toggleTab(2)}
          >
            Bank Details
          </button>

          <button
            className={toggleState === 3 ? styles.activetabs : styles.tabs}
            onClick={() => toggleTab(3)}
          >
            Attitude to Risk
          </button>
        </div>

        {/* THE SECTION OF THE CONTENT */}
        <div className={styles.contenttabs}>
          <div
            className={
              toggleState === 1 ? styles.activecontent : styles.content
            }
          >
            <PersonalInfo/>
          </div>

          <div
            className={
              toggleState === 2 ? styles.activecontent : styles.content
            }
          >
            <BankDetails/>
          </div>

          <div
            className={
              toggleState === 3 ? styles.activecontent : styles.content
            }
          >
            <Aggressive/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab;
