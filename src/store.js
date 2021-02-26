import { configureStore } from '@reduxjs/toolkit';
import mortgageInfoReducer from './reducers/mortgageInfoReducer';
import savingsInfoReducer from './reducers/savingsInfoReducer';

export default configureStore({
  reducer: {
    mortgageInfo: mortgageInfoReducer,
    savingsInfo: savingsInfoReducer,
  },
});
