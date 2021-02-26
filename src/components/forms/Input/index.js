import React from 'react';
import { func, number, string } from 'prop-types';
import classNames from 'classnames';
import globalStyles from '../../../assets/global-styles/bootstrap.min.module.css';

const Input = ({
  id, label, onBlur, onChange, type, value, max,
}) => (
  <div className={classNames(globalStyles['input-group'], globalStyles['mb-3'])}>
    {type === 'currency' && <span className={globalStyles['input-group-text']}>$</span>}
    <input
      id={id}
      className={globalStyles['form-control']}
      onBlur={onBlur}
      onChange={onChange}
      type="number"
      value={value}
      placeholder={label}
      max={max}
      min="0"
    />
    {type === 'rate' && <span className={globalStyles['input-group-text']}>%</span>}
    {type === 'period' && <span className={globalStyles['input-group-text']}>months</span>}
  </div>
);

Input.defaultProps = {
  type: 'number',
  label: '',
  onBlur: () => {},
  onChange: () => {},
};

Input.propTypes = {
  id: string.isRequired,
  label: string,
  type: string,
  onBlur: func,
  onChange: func,
  value: string.isRequired,
  // eslint-disable-next-line react/require-default-props
  max: number,
};

export default Input;
