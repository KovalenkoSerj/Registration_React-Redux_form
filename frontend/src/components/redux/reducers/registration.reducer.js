import { USER_REGISTER_SUCCESS, USER_REGISTER_FAILURE } from '../constants/user.constants'

export const registration = (state = {}, action ) => {
	switch(action.type){
		case USER_REGISTER_SUCCESS:
			return{
				registration: true
			};
		case USER_REGISTER_FAILURE:
			return {
				error: action.error
			}
		default: 
			return state;			
	}
}; 