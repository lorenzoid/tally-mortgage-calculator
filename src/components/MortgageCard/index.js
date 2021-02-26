import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { setMortgageInfo } from '../../reducers/mortgageInfoReducer';
import Input from '../forms/Input';
import styles from './index.module.css';
import globalStyles from '../../assets/global-styles/bootstrap.min.module.css';
import Select from '../forms/Select';

const MortgageCard = () => {
  const dispatch = useDispatch();
  const { principal, rate, period } = useSelector((store) => store.mortgageInfo);

  const handleChange = (event) => {
    const { id, value } = event.target;

    dispatch(setMortgageInfo(id, value));
  };

  const handleBlur = (event) => {
    const { id, value } = event.target;

    dispatch(setMortgageInfo(id, parseFloat(value).toFixed(2)));
  };

  return (
    <div className={classNames(globalStyles.card, styles.card)}>
      <div className={globalStyles['card-body']}>
        <h5 className={globalStyles['card-title']}>Mortgage Info</h5>
        <Input
          type="currency"
          id="principal"
          label="Loan Principal"
          onBlur={handleBlur}
          onChange={handleChange}
          value={principal}
        />
        <Input
          type="rate"
          id="rate"
          label="Rate"
          onBlur={handleBlur}
          onChange={handleChange}
          value={rate}
        />
        <Select label="Period" value={period} id="period" onChange={handleChange}>
          <option value="10">10 years</option>
          <option value="15">15 years</option>
          <option value="20">20 years</option>
          <option value="30">30 years</option>
          <option value="50">50 years</option>
        </Select>
      </div>

    </div>
  );
};

export default MortgageCard;
