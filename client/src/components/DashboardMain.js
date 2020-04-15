import React, { Component } from 'react'
import avatar from '../assets/dist/img/avatar1.jpg'
import jwt_decode from 'jwt-decode'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, useLocation, Redirect
} from 'react-router-dom'
import Dashboard from './Dashboard'
import Members from './Members'
import Reports from './Reports'
import AddMember from '../components/ui/users/AddMember'
import ByAge from '../components/ui/reports/ByAge'
import ByGender from '../components/ui/reports/ByGender'
import Navigation from './Navigation'
import UserID from './ui/users/UserID'
import Login from './Login'
import Register from './Register'
import ViewMembers from './ui/users/ViewMembers'
import MyProfile from './ui/users/MyProfile'
import Territories from './ui/reports/AllTerritories'
import NoMatch from './NoMatch'


const routes = [
    {
        path: '/',
        exact: true,
        sidebar: () => '',
        main: () => <Login/>
    },
    {
        path: '/register',
        exact: true,
        sidebar: () => '',
        main: () => <Register/>
    },
    {
        path: '/users',
        exact: true,
        sidebar: () => <Navigation/>,
        main: () => <Members/>
    },
    {
        path: '/dashboard',
        exact: true,
        sidebar: () => <Navigation/>,
        main: () => <Dashboard />
    },
    {
        path: '/members',
        exact: true,
        sidebar: () => <Navigation/>,
        main: () => <Members />
    },
    {
        path: '/view-members',
        exact: true,
        sidebar: () => <Navigation/>,
        main: () => <ViewMembers />
    },
    {
        path: '/territories',
        exact: true,
        sidebar: () => <Navigation/>,
        main: () => <Territories />
    },
    {
        path: '/reports',
        exact: true,
        sidebar: () => <Navigation/>,
        main: () => <Reports />
    },
    {
        path: '/profile',
        exact: true,
        sidebar: () => <Navigation/>,
        main: () => <MyProfile />
    },
    {
        path: '/addmember',
        exact: true,
        sidebar: () => <Navigation/>,
        main: () => <AddMember />
    },
    {
        path: '/reports',
        exact: true,
        sidebar: () => <Navigation/>,
        main: () => <Reports />
    },
    {
        path: '/by-age',
        exact: true,
        sidebar: () => <Navigation/>,
        main: () => <ByAge />
    },
    {
        path: '/by-territory',
        exact: true,
        sidebar: () => <Navigation/>,
        main: () => <ByGender />
    },
    {
        path: '/userid',
        exact: true,
        sidebar: () => <Navigation/>,
        main: () => <UserID />
    },
    {
        path: '/*', 
        sidebar: () => '',
        main: () => <NoMatch/>
    }

];




class Main extends Component {
    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {
            firstname: '',
            lastname: ''
        };
    }

    // componentDidMount() {
    //     const token = localStorage.usertoken
    //     const decoded = jwt_decode(token)
    //     const userObject = decoded.user[0]
    //     //console.log(decoded.user[0]);
    // }

    render() {
        return (
            <React.Fragment>
                {/* <!-- HK Wrapper --> */}
                <Switch>
                    {routes.map((route, index) => (
                        // Render more <Route>s with the same paths as
                        // above, but different components this time.
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            children={<route.sidebar />}
                        />
                    ))}
                </Switch>
                  
                    <div id="hk_nav_backdrop" className="hk-nav-backdrop"></div>
                    {/* <!-- /Vertical Nav --> */}
                    {/* <!-- Main Content --> */}
                    <div className="hk">
                        {/* <!-- Container --> */}
                        <div className="container-fluid">
                            {/* DYNAMIC COMPONENT GOES HERE */}
                            <Switch>
                                {routes.map((route, index) => (
                                    // Render more <Route>s with the same paths as
                                    // above, but different components this time.
                                    <Route
                                        key={index}
                                        path={route.path}
                                        exact={route.exact}
                                        children={<route.main />}
                                    />
                                ))}
                            </Switch>

                        </div>
                        {/* <!-- /Container --> */}


                    </div>
                    {/* <!-- /Main Content --> */}

                
                {/* <!-- /HK Wrapper --> */}
            
            </React.Fragment>
        );
    }
}

Main.propTypes = {};
export default Main


