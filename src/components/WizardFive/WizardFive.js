import React,  { Component } from 'react';
import { Link } from 'react-router-dom';

import {connect} from 'react-redux';
import {updateAgent} from '../../ducks/reducer'

class WizardFive extends Component {

    render(){
        const { updateAgent } = this.props;
        return(
            <div className="parent-div">
                    <div className="vert-align">    

                    <p>Are you currently working with a real estate agent?</p> <br />
                    <div className="row">
                        <Link to="/wSix"><button onClick={() => updateAgent('Yes')}>Yes</button></Link>
                        <Link to="/wSix"><button onClick={() => updateAgent('No')}>No </button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        realEstateAgent: state.realEstateAgent
    }
}

let outActions = {
    updateAgent
}

let connected = connect(mapStateToProps, outActions)

export default connected(WizardFive);