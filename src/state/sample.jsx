export const sampleIncrementAction = (payload = 1) => {
  return {
    type: 'SAMPLE_INC',
    payload,
  };
};

export const sampleDecrementAction = (payload = 1) => {
  return {
    type: 'SAMPLE_DEC',
    payload,
  };
};

const sampleReducer = (state = {
  sampleValue: 0,
  sampleFlag: false,
}, action) => {

  switch(action.type) {
    case 'SAMPLE_INC':
      state = { ...state, sampleValue: (state.sampleValue + action.payload) };
      break;

    case 'SAMPLE_DEC':
      state = { ...state, sampleValue: (state.sampleValue - action.payload) };
      break;

    default:
      break;
  }

  return state;
};

export default sampleReducer;
