import React, {useContext, useState } from 'react';

// PACKAGES
import {
  FaChevronDown,
  FaChevronUp,
  FaMoneyBill,
  FaRegMoneyBillAlt,
  FaSignOutAlt,
  FaToolbox,
} from 'react-icons/fa';
import {
  BsGraphUp,
  BsCreditCardFill,
  BsArrowLeftRight,
  BsGiftFill,
  BsCreditCard2Back,
  BsCashStack,
} from 'react-icons/bs';
import { FiActivity, FiHelpCircle, FiSettings } from 'react-icons/fi';
import { GrUserSettings } from 'react-icons/gr';
import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';



// COMPONENTS
import wealth from '../../../assets/wealth2.png';
import { Context } from '../../../Context';
import { getDataAPI } from '../../../utils/fetchData';




const Sidebar = () => {
  const state = useContext(Context)
  const [token] = state.token
  // The section that handles the dropdown
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);

  // LOGOUT USER
  const logoutUser = async() => {
    await getDataAPI('logout', token)
    localStorage.removeItem('firstLogin')

    window.location.href="/"
  }

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar_header}>
        <img src={wealth} alt='wealth' />
      </div>

      <div className={styles.sidebar_middle}>
        <ul className={styles.sidebarList}>
          <li>
            <div
              className={styles.sidebarListItems}
              onClick={() => setOne(!one)}
            >
              <div className='d-flex'>
                <div className={styles.name_box}>AO</div>
                <div className={styles.name_div}>
                  <small>Ayodeji Oladimeji</small>
                  <span>224354869098</span>
                </div>
              </div>
              {one ? (
                <FaChevronUp className={styles.chevron} />
              ) : (
                <FaChevronDown className={styles.chevron} />
              )}
            </div>

            {one && (
              <ul className={styles.innerList}>
                <li>
                  <NavLink
                    to='/dashboard/profile'
                    activeClassName={styles.active}
                    className={styles.innerListItem}
                  >
                    <GrUserSettings className={styles.sidebarIcon} />
                    Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/dashboard/settings'
                    className={styles.innerListItem}
                  >
                    <FiSettings className={styles.sidebarIcon} />
                    Settings
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          <li>
            <NavLink
              to='/dashboard_home'
              className={styles.sidebarListItem}
              activeClassName={styles.active}
            >
              <BsGraphUp className={styles.sidebarIcon} />
              Dashboard
            </NavLink>
          </li>

          <li>
            <div
              className={styles.sidebarListItemm}
              activeClassName={styles.active}
              onClick={() => setTwo(!two)}
            >
              <div>
                <BsCreditCardFill className={styles.sidebarIcon} />
                Payment
              </div>
              {two ? (
                <FaChevronUp className={styles.chevron} />
              ) : (
                <FaChevronDown className={styles.chevron} />
              )}
            </div>

            {two && (
              <ul>
                <li>
                  <NavLink
                    to='/dashboard/pay_in'
                    className={styles.innerListItem}
                    activeClassName={styles.active}
                  >
                    <FaRegMoneyBillAlt className={styles.sidebarIcon} />
                    Pay in now
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/dashboard/withdrawal'
                    className={styles.innerListItem}
                    activeClassName={styles.active}
                  >
                    <BsCreditCard2Back className={styles.sidebarIcon} />
                    Withdrawals
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          <li>
            <div
              className={styles.sidebarListItemm}
              activeClassName={styles.active}
              onClick={() => setThree(!three)}
            >
              <div>
                <FaToolbox className={styles.sidebarIcon} />
                Create new portfolio
              </div>
              {three ? (
                <FaChevronUp className={styles.chevron} />
              ) : (
                <FaChevronDown className={styles.chevron} />
              )}
            </div>

            {three && (
              <ul>
                <li>
                  <NavLink
                    to='/dashboard/cash_portfolio'
                    className={styles.innerListItem}
                    activeClassName={styles.active}
                  >
                    <BsCashStack className={styles.sidebarIcon} />
                    Cash portfolio
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/dashboard/investment_portfolio'
                    className={styles.innerListItem}
                    activeClassName={styles.active}
                  >
                    <FaMoneyBill className={styles.sidebarIcon} />
                    Investment portfolio
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          <li>
            <NavLink
              to='/dashboard/transfer'
              className={styles.sidebarListItem}
              activeClassName={styles.active}
            >
              <BsArrowLeftRight className={styles.sidebarIcon} />
              Transfer between portfolio
            </NavLink>
          </li>

          <li>
            <NavLink
              to='/dashboard/activity'
              className={styles.sidebarListItem}
              activeClassName={styles.active}
            >
              <FiActivity className={styles.sidebarIcon} />
              Activity
            </NavLink>
          </li>

          <li>
            <NavLink
              to='/dashboard/help'
              className={styles.sidebarListItem}
              activeClassName={styles.active}
            >
              <FiHelpCircle className={styles.sidebarIcon} />
              Help
            </NavLink>
          </li>

          <li>
            <NavLink
              to='/dashboard/refer'
              className={styles.sidebarListItem}
              activeClassName={styles.active}
            >
              <BsGiftFill className={styles.sidebarIcon} />
              Refer a friend
            </NavLink>
          </li>

          <li className={styles.sidebarListItem} onClick={logoutUser}>
           
              <FaSignOutAlt className={styles.sidebarIcon} />
              Signout
          

          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
