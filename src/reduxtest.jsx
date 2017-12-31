import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

const userReducer = (state={}, action) => {
  console.log('in userReducer');
  switch(action.type) {
    case 'CHANGE_NAME':
      state = {...state, name: action.payload};
      break;

    case 'CHANGE_AGE':
      state = {...state, age: action.payload};
      break;

    default:
      break;
  }
  return state;
};

const tweetsReducer = (state=[], action) => {
  console.log('in tweetsReducer');
  return state;
};

const reducer = combineReducers({
  user: userReducer,
  tweets: tweetsReducer,
});

let store = createStore(reducer, {}, devToolsEnhancer());

console.log(store);

store.subscribe(() => {
  console.log('\n\nSOMETHING HAPPENED IN THE STORE');
  console.log(store.getState());
});

console.log('\n\n\n');
store.dispatch({ type: 'CHANGE_NAME', payload: 'Sukrit' });
store.dispatch({ type: 'CHANGE_AGE', payload: 25 });
