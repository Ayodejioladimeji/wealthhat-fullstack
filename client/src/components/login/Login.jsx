import React, { useState } from 'react';

// PACKAGES
import { Formik } from 'formik';
import * as EmailValidator from 'email-validator';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// COMPONENTS
import styles from './Login.module.css';
import logo from '../../assets/logo.png';
import { postDataAPI } from './../../utils/fetchData';
import Loading from '../../utils/Loading';
import { ErrorMsg, SuccessMsg } from '../../utils/Toast';

const Login = () => {
  const [typePass, setTypePass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(async () => {
          try {
            setLoading(true);
            const res = await postDataAPI('login', values);

            const data = res.data.user.portfolio.map((item) => {
              return item.transactions[0];
            });

            // Save data to localstorage
            localStorage.setItem('firstLogin', true);
            setSuccess(res.data.msg);
            // window.location.href='/onboarding';

            setTimeout(() => {
              if (data.length === 0) {
                window.location.href = '/onboarding';
              } else {
                window.location.href = '/dashboard_home';
              }
              setLoading(false);
            }, 3000);
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
            <div className={styles.login_left}>
              <div className={styles.login_left_div}>
                <h1>An investment advisor that’s focused on you</h1>
                <p>
                  Save yourself the stress and uncertainty of facing thousands
                  of investment choices.
                </p>
              </div>
            </div>

            <div className={styles.login_right}>
              <div className={styles.login_right_div}>
                <div className={styles.login_right_top}>
                  <img src={logo} alt='logo' />
                  <h4>Welcome Back!</h4>
                </div>

                {error && <ErrorMsg msg={error} />}
                {success && <SuccessMsg msg={success} />}

                <div className={styles.login_right_bottom}>
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

                    <div className={styles.forgot}>
                      <Link to='/forgot_password'>Forgot Password?</Link>
                    </div>

                    <div className={styles.form_group}>
                      <button type='submit' disabled={isSubmitting}>
                        {loading ? (
                          <Loading width='25px' height='25px' color='#fff' />
                        ) : (
                          'Sign in'
                        )}
                      </button>
                    </div>
                  </form>

                  <div className={styles.reg}>
                    <small>
                      Dont have an account? <Link to='/sign_up'>Sign up</Link>
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

export default Login;
