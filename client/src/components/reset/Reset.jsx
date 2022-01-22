import React, { useState } from 'react';
import { Formik } from 'formik';
import { useHistory, useParams } from 'react-router-dom';

import styles from './Reset.module.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { FaCheck, FaEye, FaEyeSlash, FaTimes } from 'react-icons/fa';
import { postDataAPIS } from './../../utils/fetchData';
import Loading from './../../utils/Loading';
import { SuccessMsg } from '../../utils/Toast';
import { ErrorMsg } from './../../utils/Toast';

const passwordUpper = /(?=.*[A-Z])/;
const passwordSpecial = /(?=.*[!@#$%^&*])/;
const passwordLower = /(?=.*[a-z])/;
const passwordRegex = /(?=.*[0-9])/;

const Reset = () => {
  const [typePass, setTypePass] = useState(false);
  const [typePas, setTypePas] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const history = useHistory();
  const { token } = useParams();

  return (
    <Formik
      initialValues={{ password: '', password2: '' }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(async () => {
          try {
            setLoading(true);
            const res = await postDataAPIS('reset', values, token);
            setLoading(false);
            setSuccess(res.data.msg);

            // remove the toast after 6secs
            setTimeout(() => {
              setSuccess('');
              history.push('/');
            }, 6000);
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

        //   THE PASSWORD SECTION
        if (!values.password) {
          errors.password = 'Password is Required';
        } else if (values.password.length < 8) {
          errors.password = 'Password must be 8 characters long.';
        } else if (!passwordUpper.test(values.password)) {
          errors.password = 'Password must contain one UpperCase letter';
        } else if (!passwordLower.test(values.password)) {
          errors.password = 'Password must contain one LowerCase letter';
        } else if (!passwordRegex.test(values.password)) {
          errors.password = 'password Must contain one number';
        } else if (!passwordSpecial.test(values.password)) {
          errors.password = 'password Must contain one special character';
        } else if (values.password !== values.password2) {
          errors.password2 = 'password does not match';
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
            <div className={styles.reset_left}>
              <div className={styles.reset_left_div}>
                <h1>An investment advisor that’s focused on you</h1>
                <p>
                  Save yourself the stress and uncertainty of facing thousands
                  of investment choices.
                </p>
              </div>
            </div>

            <div className={styles.reset_right}>
              <div className={styles.reset_right_div}>
                <div className={styles.reset_right_top}>
                  <img src={logo} alt='logo' />
                  <h4>Reset your password</h4>
                </div>

                {error && <ErrorMsg msg={error} />}
                {success && <SuccessMsg msg={success} />}

                <div className={styles.reset_right_bottom}>
                  <form onSubmit={handleSubmit}>
                    <div className={styles.form_group}>
                      <label htmlFor='password'>Password</label>
                      <input
                        name='password'
                        type={typePass ? 'text' : 'password'}
                        placeholder='Enter your new password'
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.password && touched.password && 'error'
                        }
                      />
                      {errors.password && touched.password && (
                        <div className={styles.input_feedback}>
                          {errors.password}
                        </div>
                      )}
                      <div
                        className={errors.password ? styles.eye : styles.eyes}
                        onClick={() => setTypePass(!typePass)}
                      >
                        {typePass ? <FaEyeSlash /> : <FaEye />}
                      </div>
                    </div>

                    <div className={styles.form_group}>
                      <label htmlFor='password'>Confirm password</label>
                      <input
                        name='password2'
                        type={typePas ? 'text' : 'password'}
                        placeholder='Confirm your new password'
                        value={values.password2}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.password2 && touched.password2 && 'error'
                        }
                      />
                      {errors.password2 && touched.password2 && (
                        <div className={styles.input_feedback}>
                          {errors.password2}
                        </div>
                      )}
                      <div
                        className={errors.password2 ? styles.eye : styles.eyes}
                        onClick={() => setTypePas(!typePas)}
                      >
                        {typePas ? <FaEyeSlash /> : <FaEye />}
                      </div>
                    </div>

                    <div className={styles.validate}>
                      <p>Your password must have :</p>
                      <div className={styles.check}>
                        {values.password.length >= 8 ? (
                          <FaCheck className={styles.checker} />
                        ) : (
                          <FaTimes className={styles.checking} />
                        )}
                        At least 8 characters in length
                      </div>

                      <div className={styles.check}>
                        {passwordSpecial.test(values.password) ? (
                          <FaCheck className={styles.checker} />
                        ) : (
                          <FaTimes className={styles.checking} />
                        )}
                        At least 1 special character
                      </div>

                      <div className={styles.check}>
                        {passwordLower.test(values.password) ? (
                          <FaCheck className={styles.checker} />
                        ) : (
                          <FaTimes className={styles.checking} />
                        )}
                        At least 1 lower case
                      </div>

                      <div className={styles.check}>
                        {passwordUpper.test(values.password) ? (
                          <FaCheck className={styles.checker} />
                        ) : (
                          <FaTimes className={styles.checking} />
                        )}
                        At least 1 upper case
                      </div>

                      <div className={styles.check}>
                        {passwordRegex.test(values.password) ? (
                          <FaCheck className={styles.checker} />
                        ) : (
                          <FaTimes className={styles.checking} />
                        )}
                        At least 1 one number
                      </div>
                    </div>

                    <div className={styles.form_group}>
                      <button type='submit' disabled={isSubmitting}>
                        {loading ? (
                          <Loading width='25px' height='25px' color='#fff' />
                        ) : (
                          'Reset Password'
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

export default Reset;
