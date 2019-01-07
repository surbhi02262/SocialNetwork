import React, { Component } from 'react';
import { connect } from 'react-redux';



class SignUp extends Component {
    render() {
        return (
            <div>
                SignUp Page
            </div>
        );
    }
}



function mapStateToProps(state) {
    return {

    };
}

export default connect(
    mapStateToProps,
)(SignUp);