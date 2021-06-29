import { SET_EVENTS } from "../actions/index";

const eventsReducer = (state = {}, action) => {
    switch(action.type) {
        case SET_EVENTS:
            {
                return action.events
            }
        default:
            return state;
    }
}

export default eventsReducer;
