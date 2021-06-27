import React from 'react'
import {Button} from 'antd'

const Switch=()=>{
    return(<div>
        <Button>red</Button>
        <Button>green</Button>
    </div>)
}
export default class ContComponent extends React.Component{

    render(){
        return(<div><p>Redux内容组件</p>
        <Switch/>
        </div>)
    }
}