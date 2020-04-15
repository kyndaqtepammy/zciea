import React, { Component } from 'react'
import { Link, BrowserRouter as Router, Switch, Route, withRouter  } from 'react-router-dom'
import {login} from '../functions/Auth.js'
import Register from './Register'
import SimpleLoader from './ui/loaders/SimpleLoader.js'

class Login extends Component {
    constructor(props, ...rest) {
        super()
        this.state = {
            email: '',
            password: '',
            loading: false, 
            loggedIn: false
        }
    
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }


    onChange(e) {
        this.setState( {[e.target.name]: e.target.value} )
    }
    
    onSubmit(e){ 
        this.setState({
            loading: true
        })
        e.preventDefault()
        const user = {
            email: this.state.email,
            password: this.state.password
        }
    
        login(user).then(res => {
            if(res) {
                this.setState({
                    loading: false
                })
                //console.log(res);
                this.props.history.push('/dashboard') 
                //("Incorrect Username/Password combination")
                
            }else {
               //this.props.history.push('/dashboard') 
            }
        })
    }

    componentDidMount() {
        if(localStorage.usertoken) {
            console.log("logged in");  
        } else{
            console.log("out");
            
        }
    }

    render() {
        if( this.state.loading ){
            return (
                <SimpleLoader/>
            )
        }
        return (
            <React.Fragment>

                <div className="hk-wrapper">
                    <div className="hk-pg-wrapper hk-auth-wrapper">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-xl-12 pa-0">
                                    <div className="auth-form-wrap pt-xl-0 pt-70">
                                        <div className="auth-form w-xl-35 w-lg-65 w-sm-85 w-10 card pa-25 shadow-lg">
                                            <a className="auth-brand text-center d-block mb-20" href="#">
                                            </a>
                                            <form noValidate onSubmit={this.onSubmit}>
                                                <h1 className="display-4 text-center mb-10">Sign In</h1>
                                                <p className="text-center mb-30">Sign in to your account and enjoy unlimited perks.</p> 
                                                <div className="form-group">
                                                    <input className="form-control" placeholder="Email" name="email" type="email" value={this.state.email} onChange={this.onChange} />
                                                </div>
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <input className="form-control" placeholder="Password" type="password" name="password" value={this.state.password} onChange={this.onChange} />
                                                        <div className="input-group-append">
                                                            <span className="input-group-text"><span className="feather-icon"><i data-feather="eye-off"></i></span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="custom-control custom-checkbox mb-25">
                                                    <input className="custom-control-input" id="same-address" type="checkbox" />
                                                    <label className="custom-control-label font-14" for="same-address">Keep me logged in</label>
                                                </div>
                                                <button className="btn btn-success btn-block">Login</button>
                                                <p className="font-14 text-center mt-15">Having trouble logging in?</p>
                                                <p className="text-center">Don't have an account yet? <Link to="/register">Sign Up</Link></p>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>		
                </div>
            </React.Fragment>   
        );
    }
}

export default withRouter(Login)
