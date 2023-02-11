import React, { useReducer, useContext } from 'react';
import ChannelContext from './channelContext';
import ChannelReducer from './channelReducer';
import {
    SET_CURRENT,
    CLEAR_CURRENT
} from '../types';

// Create a custom hook to use the channel context
export const useChannel = () => {
    const { state, dispatch } = useContext(ChannelContext);
    return [state, dispatch];
};

// Action creators
// NOTE: These could be moved to a separate file like in redux but they remain here for ease of students transitioning

// Set Current Channel
export const setCurrent = (dispatch, channel) => {
    dispatch({ type: SET_CURRENT, payload: channel });
};

// Clear Current Channel
export const clearCurrent = (dispatch) => {
    dispatch({ type: CLEAR_CURRENT });
};

const ChannelState = (props) => {
    const initialState = {
        url: null,
    };

    const [state, dispatch] = useReducer(ChannelReducer, initialState);

    return (
        <ChannelContext.Provider value={{ state: state, dispatch }}>
            {props.children}
        </ChannelContext.Provider>
    );
};

export default ChannelState;