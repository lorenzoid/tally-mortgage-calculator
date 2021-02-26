import React from 'react';
import { useSelector } from 'react-redux';
import styles from './index.module.css';
import { formatToCurrency, calculateMonthlyPayment } from '../../utils';

const Summary = () => {
  const { monthlySavings, savingsPeriod } = useSelector((store) => store.savingsInfo);
  const { principal, rate, period } = useSelector((store) => store.mortgageInfo);

  const getMonthlyPayment = () => formatToCurrency(
    calculateMonthlyPayment(principal, rate, period),
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.item}>
          <div className={styles.label}>Expected Monthly Payment</div>
          <div className={styles.value}>{getMonthlyPayment()}</div>
        </div>
        <div className={styles.item}>
          <div className={styles.label}>Downpayment</div>
          <div className={styles.value}>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(monthlySavings * savingsPeriod)}</div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
