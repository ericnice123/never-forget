import { combineReducers } from 'redux';

// reducers
import CostReducer from './reducer_cost';

const rootReducer = combineReducers({
  cost: CostReducer
});

export default rootReducer;
