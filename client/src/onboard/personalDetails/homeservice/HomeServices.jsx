import React from 'react';
import services from '../../../constants/services';
import styles from './HomeService.module.css';

const HomeServices = () => {
  return (
    <section className={styles.home_services}>
      <div className={styles.home_services_center}>
        {services.map((service) => {
          const { id, icon, title, text, step } = service;
          return (
            <div key={id} className={styles.home_container}>
              <p>Step {step}</p>
              <article key={id} className={styles.home_service}>
                <div className={styles.home_div}>
                  <div className={styles.icon_box}>{icon}</div>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </div>
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HomeServices;
