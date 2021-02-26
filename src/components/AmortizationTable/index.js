import React from 'react';
import { amortizationSchedule } from 'amortization';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import styles from './styles.module.css';
import globalStyles from '../../assets/global-styles/bootstrap.min.module.css';

const AmortizationTable = () => {
  const { principal, rate, period } = useSelector((store) => store.mortgageInfo);
  const { monthlySavings, savingsPeriod } = useSelector((store) => store.savingsInfo);

  const getAmortizationSched = () => amortizationSchedule(
    parseFloat(monthlySavings ? principal - (monthlySavings * savingsPeriod) : principal),
    parseInt(period, 10),
    parseFloat(rate),
  );

  return (
    <div>
      <h4>Amortization Schedule</h4>
      <table className={classNames(globalStyles.table, globalStyles['table-bordered'], globalStyles['table-striped'])}>
        <thead>
          <tr>
            <th>#</th>
            <th>Principal Paid</th>
            <th>Interest Paid</th>
            <th>Accrued Interest</th>
            <th>Monthly Payment</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {getAmortizationSched().map((row) => (
            <tr>
              <td className={styles.col}>
                {row.paymentNumber}
              </td>
              <td className={styles.col}>
                {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(row.principalPayment)}
              </td>
              <td className={styles.col}>
                {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(row.interestPayment)}
              </td>
              <td className={styles.col}>
                {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(row.accInterest)}
              </td>
              <td className={styles.col}>
                {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(row.payment)}
              </td>
              <td className={styles.col}>
                {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(row.principalBalance)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  );
};

export default AmortizationTable;
