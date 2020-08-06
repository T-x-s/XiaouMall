import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class goBack extends Component {
    goBack(){
        this.props.history.goBack()
    }
    render() {
        return (
            <div>
                <span onClick={()=>this.goBack()}>返回</span>
            </div>
        )
    }
}
export default withRouter(goBack)