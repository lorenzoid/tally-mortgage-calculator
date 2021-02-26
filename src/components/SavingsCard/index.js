import React from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../forms/Input';
import globalStyles from '../../assets/global-styles/bootstrap.min.module.css';
import styles from './index.module.css';
import { setSavingsInfo } from '../../reducers/savingsInfoReducer';

const SavingsCard = () => {
  const { monthlySavings, savingsPeriod } = useSelector((store) => store.savingsInfo);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { id, value } = event.target;

    dispatch(setSavingsInfo(id, value));
  };

  const handleBlur = (event) => {
    const { id, value } = event.target;

    dispatch(setSavingsInfo(id, parseFloat(value).toFixed(2)));
  };

  return (
    <div className={classNames(globalStyles.card, styles.card)}>
      <div className={globalStyles['card-body']}>
        <h5 className={globalStyles['card-title']}>Savings Info</h5>
        <Input
          type="currency"
          id="monthlySavings"
          label="Monthly Savings Goal"
          onBlur={handleBlur}
          onChange={handleChange}
          value={monthlySavings}
        />
        <Input
          type="period"
          id="savingsPeriod"
          label="Savings Period"
          onChange={handleChange}
          value={savingsPeriod}
          max="60"
        />
      </div>
    </div>
  );
};

export default SavingsCard;
