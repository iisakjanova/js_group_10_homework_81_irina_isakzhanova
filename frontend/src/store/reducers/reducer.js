import {
    ADD_LINK_FAILURE,
    ADD_LINK_REQUEST,
    ADD_LINK_SUCCESS
} from "../actions/actions";

const initialState = {
    link: '',
    loading: false,
    error: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LINK_REQUEST:
            return {...state, loading: true};
        case ADD_LINK_SUCCESS:
            return {...state, link: action.payload, loading: false, error: false};
        case ADD_LINK_FAILURE:
            return {...state, link: '', loading: false, error: action.payload};
        default:
            return state;
    }
};

export default reducer;