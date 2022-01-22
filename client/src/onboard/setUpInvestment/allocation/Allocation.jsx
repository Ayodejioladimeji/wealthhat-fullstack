import React from 'react';
import styles from './Allocation.module.css';
import AllocateChart from './AllocateChart';
import AllocationTable from './AllocationTable';

const Allocation = ({ navigation }) => {
  return (
    <div className={styles.allocation}>
      <div className={styles.project_div_graph}>
        <AllocateChart />
      </div>
      <div className={styles.project_table}>
        <AllocationTable />
      </div>

      <div className={styles.setup_buttons}>
        <button
          onClick={() => navigation.previous()}
          id={styles.buttons}
          className='btn px-5'
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

export default Allocation;
