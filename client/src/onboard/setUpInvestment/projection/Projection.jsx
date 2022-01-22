import React from 'react';
import Topbar from '../../topbar/Topbar';
import styles from './Projection.module.css';
import { toCommas } from '../../../utils/Utils';
import Tab from '../tab/Tab';

const Projection = ({ navigation, handleChange, date, ...values }) => {
  const { years, portName, starting, monthly } = values;

  return (
    <>
      <Topbar title='New Investment Portfolio' />
      <div className={styles.setup_display}>
        <div className={styles.display_title}>{portName}</div>
        <div className={styles.display}>
          <div className={styles.display_one}>
            <small style={{ fontWeight: 'bold' }}>{years}Yrs</small>
            <span>Time Frame</span>
          </div>
          <div className={styles.display_two}>
            <small style={{ fontWeight: 'bold' }}>${toCommas(starting)}</small>
            <span>Starting</span>
          </div>
          <div className={styles.display_three}>
            <small style={{ fontWeight: 'bold' }}>${toCommas(monthly)}</small>
            <span>Monthly</span>
          </div>
        </div>
      </div>

      <div className={styles.setups}>
        <div className={styles.setup_center}>
          <Tab navigation={navigation} values={values} date={date} />
        </div>
      </div>
    </>
  );
};

export default Projection;
