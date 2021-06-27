import React from 'react'
import {Button} from 'antd'
export default class Inside extends React.Component{

    render(){
        console.log(this.props.location)
        const data=this.props.location.state
        return(<div>
            <Button>{data}</Button>
        </div>)
    }
}