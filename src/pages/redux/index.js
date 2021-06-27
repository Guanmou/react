import React from 'react'
import Title from './child1'
import Cont from './child2'
import store from '../../store/store.js'
export default class Page1 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            reduxData:store.getState()
        }
        store.subscribe(this.handleStoreonChang);
    }
    handleStoreonChang=()=>{
        this.setState({
            reduxStore:store.getState()
        },()=>{})
    }
    handle=(e)=>{
        const action={
            type:'TEXT_INPUT_VALUE',
            value:e.target.value
        }
        store.dispatch(action)
    }
    render(){
        console.log(store.getState())
        return(<div style={{fontSize:'40',padding:'40px'}}>
           <Title></Title>
           <Cont></Cont>
           <input value={store.getState().inputValue} onChange={this.handle}></input>
        </div>)
    }
}