import axios from 'axios'
import BASE_URL from './Constants'

export const register = newUser => {
    return axios
    .post(BASE_URL + '/api/register', {
        first_name: newUser.first_name,
        last_name: newUser.last_name,
        email: newUser.email,
        password: newUser.password
    })
    .then(res => {
        //console.log("registered");
        localStorage.setItem('usertoken', res.data.token)
        return res.data
    })
}


export const login = user => {
    return axios
    .post(BASE_URL +'/api/login', {
  
        email: user.email,
        password: user.password
    })
    .then(res => {
        localStorage.setItem('usertoken', res.data.token)
        //console.log(res.data)
        return res.data
       
    })
    .catch(err => {
        console.log(err)
    })
}


