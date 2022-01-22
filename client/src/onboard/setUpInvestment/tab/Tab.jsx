import React, { useState, useEffect } from 'react';
import styles from './Tab.module.css';
import Allocation from '../allocation/Allocation';
import Project from './../project/Project';

const Tab = ({ navigation, values, date }) => {
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
        {/* THE SECTIO OF THE TABS */}
        <div className={styles.bloctabs} onClick={() => setMenu(!menu)}>
          <button
            className={toggleState === 1 ? styles.activetabs : styles.tabs}
            onClick={() => toggleTab(1)}
          >
            Projection
          </button>

          <button
            className={toggleState === 2 ? styles.activetabs : styles.tabs}
            onClick={() => toggleTab(2)}
          >
            Allocation
          </button>
        </div>

        {/* THE SECTION OF THE CONTENT */}
        <div className={styles.contenttabs}>
          <div
            className={
              toggleState === 1 ? styles.activecontents : styles.content
            }
          >
            <Project navigation={navigation} values={values} date={date} />
          </div>

          <div
            className={
              toggleState === 2 ? styles.activecontent : styles.content
            }
          >
            <Allocation navigation={navigation} values={values} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab;
