import React, { Component } from 'react'

class Territories extends Component {
    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                <div className="hk-wrapper hk-vertical-nav" style={{marginTop:"120px", marginLeft:"240px"}}>
                    Territories
                </div>
            </React.Fragment>
        );
    }
}

export default Territories
