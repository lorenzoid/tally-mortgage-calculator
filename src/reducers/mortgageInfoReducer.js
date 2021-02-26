// Actions
const SET_MORTGAGE_INFO = 'SET_MORTGAGE_INFO';

const initialState = {
  principal: '100.00',
  rate: '',
  period: '10',
};

export default function mortgageInfoReducer(state = initialState, action) {
  const { type = 'default', info } = action;

  switch (type) {
    case SET_MORTGAGE_INFO:
      return {
        ...state,
        [info.type]: info.value,
      };
    default:
      return state;
  }
}

export function setMortgageInfo(type, value) {
  return (dispatch) => {
    dispatch({
      type: SET_MORTGAGE_INFO,
      info: {
        type,
        value,
      },
    });
  };
}

export function fetchFedRate() {
  return async (dispatch) => {
    fetch('http://localhost:3001/data')
      .then((res) => res.json())
      .then((result) => {
        dispatch({
          type: SET_MORTGAGE_INFO,
          info: {
            type: 'rate',
            value: result.fed_rate + 2.5,
          },
        });
      });
  };
}
