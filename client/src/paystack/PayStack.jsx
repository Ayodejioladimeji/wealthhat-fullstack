import React from 'react'

// PACKAGES
import {PaystackButton} from 'react-paystack'

// COMPONENTS
import styles from '../onboard/setUpInvestment/pay/Pay.module.css'


const Paystack  = ({tranSuccess, data, datas, setModalOpen}) => {
    const {firstname,email} = datas

    var result = Object.values(data).map((key) => {
        return Number(key);
        });


    const handleSuccess = (payment) => {
        console.log("Payment successful", payment)
        tranSuccess(payment)
        setModalOpen(true)
    }


    const handleClose = (data) => {
        console.log('Payment Cancelled', data)
    }

    // CONFIG
    const config = {
        reference: (new Date()).getTime(),
        firstname: firstname,
        email:email,
        amount: result[0] + '00',
        publicKey:'pk_test_cd9ff8d43f8fbbf6eada2d569a6fcdfe8f203f67',

    }

    const componentProps = {
        ...config,
        text: 'Pay Now',
        onSuccess: (payment) => handleSuccess(payment),
        onClose: handleClose,
    }

    return (
        <PaystackButton {...componentProps}  className={styles.button} />
    )
}

export default Paystack