import React, { Component } from 'react'
import { addmember } from '../../../functions/Users'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import BASE_URL from '../../../functions/Constants'
import UserID from './UserID';

const uploadData = new FormData();


class AddMember extends Component {
    constructor(props, ...rest) {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            id_number: '',
            disability: '',
            address: '',
            territory: '',
            date_of_birth: '',
            gender: '',
            trade: '',
            contact: '',
            email: '',
            amount_paid: '',
            selectedFile: null,
            loading: null,
            success: null,
            error: null
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }


    onChange(e) {
        this.setState(
            {
                [e.target.name]: e.target.value,
                //selectedFile: e.target.files[0],
                //loaded:0
            }
        )
    }

    onImageSelcted = e => {
        console.log(e.target.files[0]);
        this.setState({
            selectedFile: e.target.files[0]

        })
    }


    onSubmit(e) {
        e.preventDefault()
        this.setState({ loading: true })
        // const data = new FormData() 
        // data.append('myImage', this.state.selectedFile)
        // const config = {
        //     headers: {
        //         'content-type': 'multipart/form-data'
        //     }
        // }

        // axios.post(BASE_URL+'/api/uploads', data, config)
        //     .then((response) => {
        //         alert("Upload successful")
        //     }).catch((error) => {
        //         alert(error)
        //     })

        const member = {
            name: this.state.firstName + " " + this.state.lastName,
            id_number: this.state.id_number,
            disability: this.state.disability,
            address: this.state.address,
            territory: this.state.territory,
            date_of_birth: this.state.date_of_birth,
            gender: this.state.gender,
            trade: this.state.trade,
            contact: this.state.contact,
            email: this.state.email,
            amount_paid: this.state.amount_paid,
            profile: this.state.profile,
        }


        addmember(member).then(res => {
            if (res) {
                //if(res.success) {
                console.log(res.data.name);

                this.props.history.push({
                    pathname: '/userid',
                    search: '?query=userid',
                    state: { id_number: "" }
                })
                //    }
                //    if(res.failed){
                //     alert("error adding new member")
                //    }
            }
        })
    }



    render() {
        return (
            <React.Fragment>
                <div className="hk-wrapper hk-vertical-nav" style={{ marginTop: "12px", marginLeft: "240px" }}>
                    <div className="hk-wrapper">
                        <nav className="hk-breadcrumb" aria-label="breadcrumb">
                            <ol className="breadcrumb breadcrumb-light bg-transparent">
                                <li className="breadcrumb-item"><a href="javascript:void(0)">Members</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Add New Member</li>
                            </ol>
                        </nav>

                        <div className="container-fluid px-xxl-65 px-xl-20">
                            <div className="hk-pg-header">
                                <h4 className="hk-pg-title"><span className="pg-title-icon"><span className="feather-icon"><i data-feather="align-left"></i></span></span>Add New Member</h4>
                            </div>

                            <div className="row">
                                <div className="col-xl-12">
                                    <section className="hk-sec-wrapper">
                                        <div className="row">
                                            <div className="col-sm">
                                                <form noValidate onSubmit={this.onSubmit}>
                                                    <div className="row">
                                                        <div className="col-md-6 form-group">
                                                            <label htmlFor="firstName">First name</label>
                                                            <input className="form-control" id="firstName" name="firstName" placeholder="" value={this.state.firstName} onChange={this.onChange} type="text" />
                                                        </div>
                                                        <div className="col-md-6 form-group">
                                                            <label htmlFor="lastName">Last name</label>
                                                            <input className="form-control" id="lastName" name="lastName" placeholder="" value={this.state.lastName} onChange={this.onChange} type="text" />
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-6 form-group">
                                                            <label htmlFor="id_number">ID Number</label>
                                                            <input className="form-control" id="id_number" name="id_number" placeholder="" value={this.state.id_number} onChange={this.onChange} type="text" />
                                                        </div>
                                                        <div className="col-md-6 form-group">
                                                            <label htmlFor="disability">Disability</label>
                                                            <select className="form-control custom-select d-block w-100" id="disability" name="disability" onChange={this.onChange}>
                                                                <option value="">Choose...</option>
                                                                <option value="1">Yes</option>
                                                                <option value="0">No</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-6 form-group">
                                                            <label htmlFor="address">Address</label>
                                                            <textarea className="form-control mt-15" type="text" placeholder="Address" value={this.state.value} onChange={this.onChange}></textarea>
                                                        </div>

                                                        <div className="col-md-6 form-group">
                                                            <label htmlFor="territory">Territory</label>
                                                            <select className="form-control custom-select d-block w-100" id="territory" name="territory" onChange={this.onChange}>
                                                                <option value="">Select Territory...</option>
                                                                <option value="Masvingo">Masvingo</option>
                                                                <option value="Mutare">Mutare</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-6 form-group">
                                                            <label htmlFor="email">Password</label>
                                                            <input className="form-control" id="email" name="email" placeholder="Email Address" type="email" value={this.state.value} onChange={this.onChange} />
                                                        </div>

                                                        <div className="col-md-6 form-group">
                                                            <label htmlFor="gender">Gender</label>
                                                            <select className="form-control custom-select d-block w-100" id="gender" name="gender" onChange={this.onChange}>
                                                                <option value="">Select Gender...</option>
                                                                <option value="Female">Female</option>
                                                                <option value="Male">Male</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-6 form-group">
                                                            <label htmlFor="date_of_birth">Date Of Birth</label>
                                                            <input className="form-control" type="date" id="date_of_birth" name="date_of_birth" value={this.state.value} onChange={this.onChange} placeholder="Date of Birth" />
                                                        </div>

                                                        <div className="col-md-6 form-group">
                                                            <label htmlFor="contact">Phone Number</label>
                                                            <input className="form-control" type="number" id="contact" name="contact" value={this.state.contact} onChange={this.onChange} placeholder="Phone Number" />
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-6 form-group">
                                                            <label htmlFor="trade">Trade</label>
                                                            <input className="form-control" type="text" id="trade" name="trade" value={this.state.value} onChange={this.onChange} placeholder="Trade" />
                                                        </div>

                                                        <div className="col-md-6 form-group">
                                                            <label htmlFor="amount_paid">Amount</label>
                                                            <input className="form-control" type="number" id="amount_paid" name="amount_paid" value={this.state.value} onChange={this.onChange} placeholder="Amount Paid" />
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-6 form-group">
                                                            <label htmlFor="image">Profile Image</label>
                                                            <input type="file" name="myImage" onChange={this.onImageSelcted} />
                                                        </div>
                                                    </div>

                                                    <hr />
                                                    <button className="btn btn-success" type="submit">Add New Member</button>
                                                </form>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default withRouter(AddMember)
