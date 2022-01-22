import React, {useState,useEffect, useRef} from "react";

// PACKAGES
import { FaChevronRight} from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiErrorCircle } from "react-icons/bi";

// COMPONENTS
import styles from "./Port.module.css";
import { Link } from 'react-router-dom';

const Port = () => {
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
    <div className={styles.port}>
      <div className={styles.port_top} ref={clickRef}>
        <div className={styles.port_left}>
          <div>
            <span>Relocation Portfolio</span>
            <FaChevronRight className={styles.angle_icon} />
          </div>
          <small>Risk : <strong>Aggressive</strong></small>
        </div>

        <div className={styles.port_right}>
          <BsThreeDotsVertical onClick={() => setDrop(!drop)}/>
        </div>
      </div>

      <div className={styles.port_middle}>
          <div>
              <BiErrorCircle className={styles.port_times}/>
              <small>Pending</small>
          </div>
          <span>When your funds arrive, we would invest it.</span>
      </div>

      <div className={styles.port_bottom}>
          <div className={styles.bottom_left}>
              <div className={styles.bottom_left_div}>
                  <span>Portfolio Value</span>
                  <small>$700</small>
              </div>
              <div className={styles.bottom_left_div}>
                  <span>Returns</span>
                  <small>+$25</small>
              </div>
              <div className={styles.bottom_left_div}>
                  <span>Portfolio return</span>
                  <small>1.65%</small>
              </div>
          </div>

          <div className={styles.bottom_right}>
              <button className="btn">Pay in</button>
          </div>
      </div>

      {drop && <div className={styles.drop_downs}>
          <ul>
              <Link to="/">
                  <li>Portfolio value, projection and allocation</li>
              </Link>
              <Link to="/">
                  <li>Activity</li>
              </Link>
              <Link to="/">
                  <li>Edit Settings</li>
              </Link>
              <Link to="/">
                  <li>Withdraw</li>
              </Link>
              <Link to="/">
                  <li>Close portfolio</li>
              </Link>
          </ul>
      </div>}
    </div>
  );
};

export default Port;
