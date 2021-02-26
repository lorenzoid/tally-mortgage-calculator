import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AmortizationTable from '../components/AmortizationTable';
import globalStyles from '../assets/global-styles/bootstrap.min.module.css';
import styles from './main.module.css';
import MortgageCard from '../components/MortgageCard';
import SavingsCard from '../components/SavingsCard';
import { fetchFedRate } from '../reducers/mortgageInfoReducer';

const Main = () => {
  const dispatch = useDispatch();
  const { principal, rate, period } = useSelector((store) => store.mortgageInfo);

  useEffect(() => {
    dispatch(fetchFedRate());
  }, []);

  const shouldDisplayAmort = () => principal !== '' && period !== '' && rate !== '';

  return (
    <div className={globalStyles.container}>

      <h1 className={styles.header}>Tally Take Home Assignment</h1>

      <div className={styles.main}>
        <div className={styles.card}>
          <MortgageCard />
        </div>

        <div className={styles.card}>
          <SavingsCard />
        </div>
      </div>

      {shouldDisplayAmort() && <AmortizationTable />}

    </div>
  );
};

export default Main;
