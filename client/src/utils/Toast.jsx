import styles from './Toast.module.css';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

export const ErrorMsg = ({ msg }) => {
  return (
    <div className={styles.error_msg}>
      <div className={styles.msg_header}>
        <strong className={styles.title}>Error</strong>

        <FaTimesCircle className={styles.times} />
      </div>
      <div className={styles.body}>{msg}</div>
    </div>
  );
};

export const SuccessMsg = ({ msg }) => {
  return (
    <div className={styles.success_msg}>
      <div className={styles.success_header}>
        <strong className={styles.title}>Success</strong>

        <FaCheckCircle className={styles.check} />
      </div>
      <div className={styles.success_body}>{msg}</div>
    </div>
  );
};
