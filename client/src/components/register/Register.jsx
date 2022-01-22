import React, { useState } from 'react';

// PACKAGES
import { Formik } from 'formik';
import * as EmailValidator from 'email-validator';
import { Link, useHistory } from 'react-router-dom';
import { FaCheck, FaEye, FaEyeSlash, FaTimes } from 'react-icons/fa';

// COMPONENTS
import styles from './Register.module.css';
import logo from '../../assets/logo.png';
import { ErrorMsg, SuccessMsg } from '../../utils/Toast';
import { postDataAPI } from './../../utils/fetchData';
import Loading from '../../utils/Loading';

const passwordUpper = /(?=.*[A-Z])/;
const passwordSpecial = /(?=.*[!@#$%^&*])/;
const passwordLower = /(?=.*[a-z])/;
const passwordRegex = /(?=.*[0-9])/;

const Register = () => {
  const [typePass, setTypePass] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(async () => {
          try {
            setLoading(true);
            const res = await postDataAPI('register', values);
            setLoading(false);
            setSuccess(res.data.msg);

            // remove the toast after 6secs
            setTimeout(() => {
              setSuccess('');
              history.push('/verification');
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
        if (!values.email) {
          errors.email = 'Email is Required';
        } else if (!EmailValidator.validate(values.email)) {
          errors.email = 'Invalid email address';
        }

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
            <div className={styles.register_left}>
              <div className={styles.register_left_div}>
                <h1>An investment advisor that’s focused on you</h1>
                <p>
                  Save yourself the stress and uncertainty of facing thousands
                  of investment choices.
                </p>
              </div>
            </div>

            <div className={styles.register_right}>
              <div className={styles.register_right_div}>
                <div className={styles.register_right_top}>
                  <img src={logo} alt='logo' />
                  <h4>Let's get started</h4>
                </div>

                {error && <ErrorMsg msg={error} />}
                {success && <SuccessMsg msg={success} />}

                <div className={styles.register_right_bottom}>
                  <form onSubmit={handleSubmit}>
                    <div className={styles.form_group}>
                      <label htmlFor='email'>Email Address</label>
                      <input
                        name='email'
                        type='text'
                        placeholder='claire@example.com'
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
                      <label htmlFor='password'>Password</label>
                      <input
                        name='password'
                        type={typePass ? 'text' : 'password'}
                        placeholder='Enter your password'
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
                          'Sign up'
                        )}
                      </button>
                    </div>
                  </form>

                  <div className={styles.reg}>
                    <small>
                      Already a member? <Link to='/'>Login</Link>
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

export default Register;
