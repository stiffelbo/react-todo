import React from 'react';
import styles from './Container.scss';

const Container = (props) => (
  <div     
    className={styles.component}
  >
    {props.children}
  </div>
);

export default Container;