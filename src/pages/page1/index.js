import React from 'react'
import {Button, Input,Col,Row,Layout} from 'antd'
import Child from './child'
import {Link,withRouter} from 'react-router-dom'
import PropTypes from 'prop-types';
import {AppContext} from '../../app';

 class Page1 extends React.Component{
    constructor(){
        super()
        this.state={
            num:0,
            company:'<h1>谐润</h1>'
        }
        // console.log(this)//使用类定义组件this指代此类
    }
    arrow=()=>{
        // console.log(this)//可以打印,react事件监听里面是函数调用,而不是对象上的方法调用
    }
    handle(e){
        // console.log(e.target.className)//事件对象
        // console.log(e.target.value)//事件对象
        // console.log(this)
        // console.log(this.props)
        // console.log(this.inputDom.innerHTML)

        this.setState({
            company:e.target.value,
            num:++this.state.num
        },(e)=>{
            // console.log(e)
            // console.log(this.state.num)
        })
        // console.log(this.state.num)
        this.setState((e)=>{
            console.log(e)//接收一个函数作为参数,可以通过e.num来获取上一次的state值
        })
    }
    componentWillMount(){
        localStorage.setItem('data','{"age":18,"user":"gyz"}')
    }
    componentDidMount(){
        this.inputDom.focus();
        console.log(React.createContext())
        console.log(this.context);
    }
    render(){
    
        return(
            <div style={{ margin: '0 16px' }}>
                <Child params={{item:'首页','url':this.props.location.pathname}} i="<div>ee</div>"></Child>
                <AppContext.Consumer>
                    {
                        value => {
                            console.log(value)
                             return <h2 style={{color: value.color}}>{'context儿子'}</h2>
                        }
                    }
                </AppContext.Consumer>
                <Link to={{pathname:`/neiye/${this.state.num}`,state:this.state.num}} target="_blank"><Button>进入内页走你,把加的结果传过去</Button></Link>
                <div style={{ padding: 24, minHeight: 660 }}> 
                    <Button className='zz' onClick={this.handle.bind(this)}>Add</Button>
                    <Input ref={(e)=>{this.inputDom=e}}></Input>
                    <Button>{this.state.num}</Button> 
                    <div dangerouslySetInnerHTML={{__html: this.state.company}}></div>
                </div>
           
            </div>

        )
    }
}
export default withRouter(Page1)
// react做了xss预防出于安全考虑的原因（XSS 攻击），在 React.js 当中所有的表达式插入的内容都会被自动转义，就相当于 jQuery 里面的 text(…) 函数一样，任何的 HTML 格式都会被转义掉：
// 这里的事件绑定是react内部事件
// React.js 调用你所传给它的方法的时候，并不是通过对象方法的方式调用,而是直接通过函数调用。
// 所以要想通过this获取实例要加上bind或者用箭头函数
// this打印出来代表这个类或者说这个组件。
// 组件自带的属性包含
// props对象里面包含默认对象,history location match ; 然后父组件可以通过props传值。单向数据流也体现在这里
// state是在构造器里定义的，而且必须有super()[{item:"念"},{item:"来"},{item:"过"},{item:"倒"},{item:"才"},{item:"猪"}}]
Page1.contextType = {
    color: PropTypes.string
}