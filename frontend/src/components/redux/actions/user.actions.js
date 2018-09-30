import {  USER_REGISTER_SUCCESS, USER_REGISTER_FAILURE } from '../constants/user.constants'
import { history } from '../../utils/history'
import { message } from 'antd'

export const user_register_request = () => {
	return dispatch => {
		return fetch('/register').then(response => response.json())
		.then(data =>  {
			dispatch(success(data));
			history.push('/home')
			message.success('authenticated')
			
		})
		.catch(error => dispatch(failure(error)
		))
		
	}
}

export const success = user => {
	console.log(user)
	return {
		type: USER_REGISTER_SUCCESS,
		user
	}
}

export const failure = error => {
	return {
		type: USER_REGISTER_FAILURE,
		error
	}
}


