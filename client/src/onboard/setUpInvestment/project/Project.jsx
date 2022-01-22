import React from 'react';
import styles from './Project.module.css';
import ProjectionChart from './ProjectionChart';

const Project = ({ navigation, values, date }) => {
  return (
    <div className={styles.project}>
      <p>Hover or tap on chart for details</p>

      <div className={styles.project_div}>
        <div className={styles.project_result}>
          <div className={styles.result_div}>
            <small>Projected value</small>
            <span>$4000</span>
          </div>
          <div className={styles.result_div}>
            <small>High Projection</small>
            <span>$15000</span>
          </div>
          <div className={styles.result_div}>
            <small>Low Projection</small>
            <span>$1000</span>
          </div>
          <div className={styles.result_div}>
            <small>Date</small>
            <span>{date[date.length - 1]}</span>
          </div>
        </div>

        <div className={styles.project_graph}>
          <ProjectionChart date={date} width='100%' height='100%' />
        </div>
      </div>

      <div className={styles.setup_buttons}>
        <button
          onClick={() => navigation.previous()}
          id={styles.buttons}
          className='btn px-4'
        >
          Back
        </button>
        <button
          onClick={() => navigation.next()}
          id={styles.button}
          className='btn px-4'
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Project;
