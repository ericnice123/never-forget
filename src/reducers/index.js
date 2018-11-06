import { combineReducers } from 'redux';

// reducers
import CostsReducer from './reducer_cost';

const rootReducer = combineReducers({
  costs: CostsReducer
});

export default rootReducer;
