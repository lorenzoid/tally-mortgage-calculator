import React from 'react';
import { amortizationSchedule } from 'amortization';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import styles from './styles.module.css';
import globalStyles from '../../assets/global-styles/bootstrap.min.module.css';
import Summary from '../Summary';
import { formatToCurrency } from '../../utils';

const AmortizationTable = () => {
  const { principal, rate, period } = useSelector((store) => store.mortgageInfo);
  const { monthlySavings, savingsPeriod } = useSelector((store) => store.savingsInfo);

  const getAmortizationSched = () => amortizationSchedule(
    parseFloat(monthlySavings ? principal - (monthlySavings * savingsPeriod) : principal),
    parseInt(period, 10),
    parseFloat(rate),
  );

  // eslint-disable-next-line max-len
  const canYouPayOffYourLoan = () => parseFloat(monthlySavings) * parseInt(savingsPeriod, 10) >= principal;

  const renderResult = () => (canYouPayOffYourLoan() ? (
    <h5 className={styles.message}>Congratulations! You can pay off your loan outright!</h5>
  ) : (

    <>
      <Summary />
      <div className={styles.wrapper}>
        <table className={classNames(globalStyles.table, globalStyles['table-bordered'], globalStyles['table-striped'])}>
          <thead>
            <tr>
              <th className={styles.header}>Period</th>
              <th className={styles.header}>Principal Paid</th>
              <th className={styles.header}>Interest Paid</th>
              <th className={styles.header}>Accrued Interest</th>
              <th className={styles.header}>Monthly Payment</th>
              <th className={styles.header}>Balance</th>
            </tr>
          </thead>
          <tbody>
            {getAmortizationSched().map((row) => (
              <tr>
                <td className={styles.col}>
                  {row.paymentNumber}
                </td>
                <td className={styles.col}>
                  {formatToCurrency(row.principalPayment)}
                </td>
                <td className={styles.col}>
                  {formatToCurrency(row.interestPayment)}
                </td>
                <td className={styles.col}>
                  {formatToCurrency(row.accInterest)}
                </td>
                <td className={styles.col}>
                  {formatToCurrency(row.payment)}
                </td>
                <td className={styles.col}>
                  {formatToCurrency(row.principalBalance)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>

  ));

  return renderResult();
};

export default AmortizationTable;
