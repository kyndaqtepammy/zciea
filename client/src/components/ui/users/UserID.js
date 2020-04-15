import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
const member = {
    name: "",
    idnumber: "",
    image: "",
    gender:""
}

class UserID extends Component {
    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {};

        const j = this.props.location
        console.log(j);
        
    }

    render() {
        return (
            <React.Fragment>
            <div className="container-fluid px-xxl-65 px-xl-20">
    
                <div className="hk-pg-header">
                    <h4 className="hk-pg-title"><span className="pg-title-icon"><span className="feather-icon"><i data-feather="layers"></i></span></span></h4>
                </div>
    
                <div className="row">
                    <div className="col-xl-12">
                        <section className="hk-sec-wrapper">
                            <h5 className="hk-sec-title">ZCIEA Membership ID</h5>
                            
                            <div className="row">
                                <div className="col-sm">
                                    <div className="row">
                                        <div className="col-lg-3 col-sm-4 col-xs-12">
                                            <div className="card w-260p w-sm-290p">
                                            <i class="ion ion-md-person" style={{fontSize: "64px", textAlign:"center", padding: "20px"}}></i>
                                                <div className="card-body">
                                                    <h5 className="card-title">Name:</h5>
                                                    <h6 className="card-subtitle mb-2 text-muted">ID Number: </h6>
                                                    <h6 className="card-subtitle mb-2 text-muted">Territory: </h6>
                                                    <h6 className="card-subtitle mb-2 text-muted">Validity: </h6>
                                                    <h6 className="card-subtitle mb-2 text-muted">Gender: </h6>
                                                </div>
                                                
                                                <div className="card-body">
                                                    <a href="" className="card-link" style={{float: "left"}}>ZCIEA</a>
                                                    <a href="" className="card-link" style={{float: "right"}}>MEMBER</a>
                                                </div>

                                                <button className="btn btn-success" style={{textAlign: "center"}}>Print ID</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </React.Fragment>
        );
    }
}

UserID.propTypes = {};
export default withRouter(UserID)
