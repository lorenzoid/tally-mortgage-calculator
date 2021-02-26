// Actions
const SET_SAVINGS_INFO = 'SET_SAVINGS_INFO';

const initialState = {
  monthlySavings: '0.00',
  savingsPeriod: '6',
};

export default function savingsInfoReducer(state = initialState, action) {
  const { type = 'default', info } = action;

  switch (type) {
    case SET_SAVINGS_INFO:
      return {
        ...state,
        [info.type]: info.value,
      };
    default:
      return state;
  }
}

export function setSavingsInfo(type, value) {
  return (dispatch) => {
    dispatch({
      type: SET_SAVINGS_INFO,
      info: {
        type,
        value,
      },
    });
  };
}
