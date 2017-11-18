import React, { Component} from 'react'
import { connect } from 'react-redux'
import * as auth_actions from '../actions/auth_actions'
import RootNavigator from '../navigators/root'
//import Authenticate from '../components/authentication/authenticate'

class Root extends Component {

    render() {

        // if (!this.props.user)
        //     return <Authenticate authenticate={this.props.authenticate} />

        return (
            <RootNavigator />
        );
    }
}

function mapStateToProps(state) {
    return {

    }
}

export default connect(null, auth_actions)(Root)