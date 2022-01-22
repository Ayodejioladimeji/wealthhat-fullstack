import React, {useState} from 'react';
import { Formik } from 'formik';
import * as EmailValidator from 'email-validator';

import styles from './Forgot.module.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { ErrorMsg, SuccessMsg } from './../../utils/Toast';
import { postDataAPI } from './../../utils/fetchData';
import Loading from './../../utils/Loading';

const Forgot = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  return (
    <Formik
      initialValues={{ email: '' }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(async() => {
          try {
            setLoading(true)
            const res = await postDataAPI('forgot', values)
            setLoading(false)
            setSuccess(res.data.msg)
            
          } catch (error) {
            setLoading(false);
            setError(error.response.data.msg);

            // Remove the error after 6secs
            setTimeout(() => {
              setError('');
            }, 6000);
          }
          setSubmitting(false);
        }, 500);
      }}
      //   HANDLING VALIDATION MESSAGES
      validate={(values) => {
        let errors = {};
        if (!values.email) {
          errors.email = 'Email is Required';
        } else if (!EmailValidator.validate(values.email)) {
          errors.email = 'Invalid email address';
        }
        return errors;

      }}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        } = props;

        return (
          <>
            <div className={styles.forgot_left}>
              <div className={styles.forgot_left_div}>
                <h1>An investment advisor that’s focused on you</h1>
                <p>
                  Save yourself the stress and uncertainty of facing thousands
                  of investment choices.
                </p>
              </div>
            </div>

            <div className={styles.forgot_right}>
              <div className={styles.forgot_right_div}>
                <div className={styles.forgot_right_top}>
                  <img src={logo} alt='logo' />
                  <h4>Confirm your email!</h4>
                </div>

                {error && <ErrorMsg msg={error} />}
                {success && <SuccessMsg msg={success} />}

                <div className={styles.forgot_right_bottom}>
                  <form onSubmit={handleSubmit}>
                    <div className={styles.form_group}>
                      <label htmlFor='email'>Email Address</label>
                      <input
                        name='email'
                        type='text'
                        placeholder='Provide your email address'
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.email && touched.email && 'error'}
                      />
                      {errors.email && touched.email && (
                        <div className={styles.input_feedback}>
                          {errors.email}
                        </div>
                      )}
                    </div>

                    <div className={styles.form_group}>
                      <button type='submit' disabled={isSubmitting}>
                        {loading ? (
                          <Loading width='25px' height='25px' color='#fff' />
                        ) : (
                          'Confirm Email'
                        )}
                      </button>
                    </div>
                  </form>

                  <div className={styles.reg}>
                    <small>
                      Remembered your password? <Link to='/'>Sign in</Link>
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      }}
    </Formik>
  );
};

export default Forgot;
