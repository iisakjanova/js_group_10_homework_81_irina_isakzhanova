import axiosApi from "../../axiosApi";

export const ADD_LINK_REQUEST = 'ADD_LINK_REQUEST';
export const ADD_LINK_SUCCESS = 'ADD_LINK_SUCCESS';
export const ADD_LINK_FAILURE = 'ADD_LINK_FAILURE';

export const addLinkRequest = () => ({type: ADD_LINK_REQUEST});
export const addLinkSuccess = data => ({type: ADD_LINK_SUCCESS, payload: data});
export const addLinkFailure = error => ({type: ADD_LINK_FAILURE, payload: error});

export const addLink = (data) => {
    return async dispatch => {
        try {
            dispatch(addLinkRequest());
            const response = await axiosApi.post('/links', data);
            dispatch(addLinkSuccess(response.data));
        } catch (error) {
            dispatch(addLinkFailure(error.response.data.error));
        }
    };
};
