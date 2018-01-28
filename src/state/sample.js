import { createReducer, createActions } from 'reduxsauce';

const INITIAL_STATE = {
  sampleValue: 0,
  sampleFlag: false,
};

const { Types, Creators } = createActions({
  sampleIncrementAction: ['incBy'],
  sampleDecrementAction: ['decBy'],
});

export const SampleTypes = Types; // SampleTypes
export default Creators; // SampleActions

// Reducers
const sampleIncrementAction = (state, { incBy = 1 }) => {
  return { ...state, sampleValue: (state.sampleValue + incBy) };
};

const sampleDecrementAction = (state, { decBy = 1 }) => {
  return { ...state, sampleValue: (state.sampleValue - decBy) };
};

// Relate Action Types to reducers
export const reducer = createReducer(INITIAL_STATE, {
  [SampleTypes.SAMPLE_INCREMENT_ACTION]: sampleIncrementAction,
  [SampleTypes.SAMPLE_DECREMENT_ACTION]: sampleDecrementAction,
});
