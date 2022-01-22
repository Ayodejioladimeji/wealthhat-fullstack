import React, {useState, useRef, useEffect} from 'react';

// PACKAGES

// COMPONENTS
import styles from './Home.module.css';
import Port from './Port';
import Graph from './Graph';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Home = () => {
  const [drop, setDrop] = useState(false)
  const clickRef = useRef()

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
  }, []);


   //   The handleClick outside function
   const handleClickOutside = (e) => {
    if (clickRef.current && !clickRef.current.contains(e.target)) {
      setDrop(false);
    }
  };

  return (
    <div className={styles.home}>
      <div className={styles.home_one}>
        <p>Ayodeji's Portfolio</p>
        <small>Last updated: 22 Oct, 2021</small>
      </div>

      <div className={styles.home_two}>
        <div className={styles.home_card}>
          <small>Total Value</small>
          <p>$1,250 </p>
        </div>
        <div className={styles.home_card}>
          <small>Deposits</small>
          <p>$1,225 </p>
        </div>
        <div className={styles.home_card}>
          <small>Returns</small>
          <p>+$25 </p>
        </div>
        <div className={styles.home_card}>
          <small>Portfolio returns</small>
          <p>1.6% </p>
        </div>
      </div>

      <div className={styles.home_three}>
        <div className={styles.port_value} ref={clickRef}>
          <p>Portfolio value</p>
          <BsThreeDotsVertical className={styles.dots} onClick={() => setDrop(!drop)}/>
        </div>
        <Graph/>

        {drop && <div className={styles.drop_downs}>
          <ul>
              <Link to="/">
                  <li>Portfolio value and allocation</li>
              </Link>
          </ul>
      </div>}
      </div>

      <div className={styles.home_four}>
        <Port/>
      </div>
    </div>
  );
};

export default Home;
