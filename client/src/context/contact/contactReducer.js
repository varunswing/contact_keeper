import {
	ADD_CONTACT,
	DELETE_CONTACT,
	SET_CONTACT,
	CLEAR_CONTACT,
	UPDATE_CONTACT,
	FILTER_CONTACTS,
	CLEAR_FILTER
} from '../types';

export default (state, action) =>  {
    switch (action.type){
        case ADD_CONTACT:
            return {
                ...state,
                contacts: [...state.contacts, action.payload]
            };
        default:
            return state;
    }
};