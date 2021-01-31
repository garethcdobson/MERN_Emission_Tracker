import { v4 as uuid } from 'uuid';
import { GET_ITEMS, ADD_ITEMS, DELETE_ITEM } from '../actions/types';

const initialState = {
    items: [
        { id: uuid(), name: 'Georgia', description: 'Cycling to work', transport: 'Bike', distance: 3, emissions: 0 },
        { id: uuid(), name: 'Andy', description: 'Drive to work', transport: 'Car', distance: 20, emissions: 100 },
        { id: uuid(), name: 'Jerry', description: 'Flying to France for work', transport: 'Plane', distance: 400, emissions: 500 },
    ]
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state
            }
        default:
            return state;
    }
};