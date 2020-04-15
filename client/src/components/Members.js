
import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation,
    withRouter
} from 'react-router-dom'
import Cards from './ui/dashboard/Cards'
import '../assets/vendors4/jquery-toggles/css/toggles.css'
import '../assets/vendors4/jquery-toggles/css/themes/toggles-light.css'
import '../assets/dist/css/style.css'
import AddMember from './ui/users/AddMember'


const navStyle = {
    textDecoration: "none",

}


class Members extends Component {
    constructor(props, ...rest) {
        super()
        
    }

   
    render() {
        return (
            <React.Fragment>
              <div className="hk-wrapper hk-vertical-nav" style={{marginTop:"120px", marginLeft:"240px"}}>
                <div className="row">
                    
                        
                        <Link to="/addmember" className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-30">
                            <Cards title="New Member"  iconClass="ion ion-md-person-add"/>
                        </Link>

                        <Link to="/view-members" className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-30">
                          <Cards title="View Members" iconClass="ion ion-md-person-add" />
                        </Link>
         <div id="hk_nav_backdrop" className="hk-nav-backdrop"></div>
                {/* <!-- /Vertical Nav --> */}
                {/* <!-- Main Content --> */}
                <div className="hk-pg-wrapper">
                    {/* <!-- Container --> */}
                    <div className="container-fluid mt-xl-50 mt-sm-30 mt-15 px-xxl-65 px-xl-20">

                    </div>
                    </div>
                </div>
              </div>
                
            </React.Fragment>
        );
    }
}

export default withRouter(Members)
