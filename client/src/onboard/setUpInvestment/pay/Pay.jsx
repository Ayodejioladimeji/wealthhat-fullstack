import React, { useState, useContext } from "react";

// PACKAGES
import { FaDollarSign } from "react-icons/fa";

// COMPONENTS
// import Paystack from '../../../paystack/PayStack'
import styles from "./Pay.module.css";
import Topbar from "../../topbar/Topbar";
import { toCommas } from "../../../utils/Utils";
import { Context } from "../../../Context";
import { putDataAPI } from "../../../utils/fetchData";
import Paystack from "./../../../paystack/PayStack";
import Modal from "../../../modal/Modal";

const initialState = {
  amount:"",
}

const Pay = ({ navigation, values }) => {
  const state = useContext(Context);
  const [token] = state.token;
  const [user] = state.userApi.user;
  const [modalOpen, setModalOpen] = state.modalOpen
  const [data, setData] = useState(initialState);
  const { portName } = values;

  const datas = user;
  const { amount } = data;

  // HANDLECHANGE
  const handleChange = (e) => {
    const {name,value} = e.target
    setData({...data, [name]:value});
  };

 

  // THE HANDLE SUBMIT FUNCTION
  const tranSuccess = async (e) => {
    await putDataAPI("payment", data, token);
    setData({...data});
    // console.log(res.data.msg);
    // console.log(res.data.user.portfolio);
  };


 

  return (
    <div className={styles.pay}>
      <Topbar title="Pay In" />

      <div className={styles.summary}>
        <div className={styles.summary_top}>
          <h2>{portName}</h2>
          <span>
            Portfolio value <b>$0.00</b>
          </span>
        </div>

        <div className={styles.summary_center}>
          <div className={styles.summary_box}>
            <h2>Pay in now</h2>
            <span>Make a one off payment</span>
          </div>

          <div className={styles.form_group}> 
            <label htmlFor="amount">Amount</label>
            <div className={styles.input_box}>
              <FaDollarSign className={styles.dollar} />
              <input
                type="number"
                name="amount"
                value={amount}
                onChange={handleChange}
                id="amount"
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.form_groups}>
            <label htmlFor="value">value</label>
            <div className={styles.input_box}>
              <FaDollarSign className={styles.dollar} />
              <span><b>{toCommas(amount)}</b></span>
            </div>
          </div>

          <div className={styles.setup_buttons}>
            <button
              onClick={() => navigation.previous()}
              id={styles.buttons}
              className="btn px-4"
            >
              Back
            </button>

            <Paystack
              data={data}
              datas={datas}
              tranSuccess={tranSuccess}
              id={styles.button} 
              setModalOpen={setModalOpen}
            />
          </div>
        </div>

       
      </div>
      {modalOpen && <Modal/>}
    </div>
  );
};

export default Pay;
