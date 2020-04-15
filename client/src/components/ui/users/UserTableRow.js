import React, { Component } from 'react'


class UserTableRow extends Component {
    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                <tr role="row" class="odd">
                    <td tabindex="0" class="sorting_1">{this.props.name}</td>
                    <td>{this.props.trade}</td>
                    <td>{this.props.territory}</td>
                    <td>{this.props.age}</td>
                    <td>{this.props.gender}</td>
                    <td>{this.props.amountpaid}</td>
                </tr>
            </React.Fragment>
        );
    }
}

export default UserTableRow
