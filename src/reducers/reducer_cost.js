import { COSTS } from '../actions/index'

export default function(state = null, action) {
    switch( action.type ) {
        case COSTS: {
            return [
                {id: 1, color: '#F44336', costAmount: 123},
                {id: 2, color: '#2196F3', costAmount: 456},
                {id: 3, color: '#FFEB3B', costAmount: 789},
                {id: 4, color: '#4CAF50', costAmount: 675},
                {id: 5, color: '#FF9800', costAmount: 999},
                {id: 6, color: '#FACE00', costAmount: 666}
            ]
        }
    }
    return state;
}