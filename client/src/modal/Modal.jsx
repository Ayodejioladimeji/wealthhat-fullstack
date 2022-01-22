import React from 'react'

// PACKAGES
import { FaCheck } from 'react-icons/fa';


// COMPONENTS
import styles from './Modal.module.css'

const Modal = () => {

    return (
        <div className={styles.modalBackground}>
            <div className={styles.modalContainer}>
               <div className={styles.check}>
                   <FaCheck/>
               </div>

               <h3>Your payment was successful</h3>
               <p>Your money will be with us within 3 business days. We will invest it on our next twice-weekly investing cycle </p>

                <button onClick={()=> window.location.href="/dashboard_home"} className="btn">Go to dashboard</button>
            </div>
        </div>
    )
}

export default Modal
