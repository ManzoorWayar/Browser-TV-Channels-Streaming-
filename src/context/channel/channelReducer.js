import {
    SET_CURRENT,
    CLEAR_CURRENT
} from '../types';

const channelReducer = (state, action) => {
    switch (action.type) {
        case SET_CURRENT:
            return {
                ...state,
                url: action.payload
            };

        case CLEAR_CURRENT:
            return {
                ...state,
                url: null
            };

        default:
            throw new Error(`Unsupported type of: ${action.type}`);
    }
};

export default channelReducer;