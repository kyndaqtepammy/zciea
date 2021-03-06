import axios from 'axios'
import  setAuthToken from '../../utils/setAuthToken'
import jwt_decode from 'jwt-decode'

import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from './types'

//register
// export const registerUser = ( userData, history )=> dispatch => {
//     axios
//         .post('/api/users/register', userData)
//         .then(res => history.push('/dashboard')) //redirect to dashboard on success
//         .catch(err=> 
//             dispatch({
//                 type: GET_ERRORS,
//                 payload: err.response.data
//             })
//         )
//     }




//login-get user token
export const loginUser = userData => dispatch => {
    axios
        .post('api/users/login', userData)
        .then( res=> {
            //save to local storage
            //save token to local storage
            const { token } = res.data 
            localStorage.setIte("jwtToken", token)
            //set token to auth header
            setAuthToken(token)
            //decode token to get userdata
            const decoded = jwt_decode(token)
            //set current user
            dispatch(setCurrentUser(decoded))
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )
}




//set logged in user
export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}


//log out
export const logoutUser = () => dispatch => {
    //remve local storag token
    localStorage.removeItem("jwtToken")
    //remove auth header
    setAuthToken(false)
    //set current user to empty which will set is authenticated to false
    dispatch(setCurrentUser({}))
}
