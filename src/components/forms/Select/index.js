import { func, node, string } from 'prop-types';
import classNames from 'classnames';
import React from 'react';
import globalStyles from '../../../assets/global-styles/bootstrap.min.module.css';
import styles from './index.module.css';

const Select = ({
  children, id, onChange, value, label,
}) => (
  <div className={classNames(globalStyles['form-floating'], styles.container)}>
    <select className={globalStyles['form-select']} value={value} id={id} onChange={onChange}>
      {children}
    </select>
    <label htmlFor={id}>{label}</label>
  </div>
);

Select.propTypes = {
  value: string.isRequired,
  children: node.isRequired,
  id: string.isRequired,
  label: string.isRequired,
  onChange: func.isRequired,
};

export default Select;
