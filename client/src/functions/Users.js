import axios from 'axios'
import BASE_URL from './Constants'

export const addmember = member => {
    return axios
        .post( BASE_URL+'/api/addmember', {
            name: member.name,
            id_number: member.id_number,
            territory: member.territory,
            contact: member.contact,
            date_of_birth: member.date_of_birth,
            gender: member.gender,
            trade: member.trade,
            email: member.email,
            amount_paid: member.amount_paid, 
        })
        .then(res => {
            //console.log(res.config)
            return res.config
        })
        .catch(err => {
            console.log(err)
        })
}


export  const reports = () => {
    return axios
        .get(BASE_URL +'/api/reports')
        .then(res => {
            return res.data
            //console.log(res.data.members)
        })
        .catch(err => {
            console.log(err)
        })
}

export  const genderReportMale = () => {
    return axios
        .get(BASE_URL +'/api/genderReportMale')
        .then(res => {
            //console.log(res.data)
            return res.data
            
        })
        .catch(err => {
            console.log(err)
        })
}

export  const genderReportFemale = () => {
    return axios
        .get(BASE_URL +'/api/genderReportFemale')
        .then(res => {
            console.log(res.data)
            return res.data
            
        })
        .catch(err => {
            console.log(err)
        })
}


export const ageReportFemale = () => {
    return axios
        .get(BASE_URL + '/api/ageReportFemale')
        .then(res => {
            //console.log(res)
            return res.data
        })
        .catch(err=> {
            console.log(err);
        })
}

export const ageReportMale = () => {
    return axios
        .get(BASE_URL + '/api/ageReportMale')
        .then(res => {
            //console.log(res)
            return res.data
        })
        .catch(err=> {
            console.log(err);
        })
}


export const totalMale = () => {
    return axios.get(BASE_URL + '/api/totalMale')
    .then(res => {
        return res.data
    })
    .catch(err => {
        console.log(err);
        
    })
}

export const territories = () => {
    return axios.get(BASE_URL + '/api/territories')
    .then(res => {
        return res.data
    })
    .catch(err => {
        console.log(err);
    })
}
