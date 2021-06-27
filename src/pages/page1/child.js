import React from 'react'
import {Breadcrumb } from 'antd'
import {Link} from 'react-router-dom'
import {AppContext} from '../../app';
const ChildFunction=(props)=>{
    // console.log(this)//函数式声明组件this为undefine
    // console.log(props)
    // console.log(props.children)
    React.useEffect(() => {

    }, [])
    const url=props.params.url.split('').splice(1).join('')
    return(<><Breadcrumb style={{marginTop:15,marginBottom:15}}>
        <Breadcrumb.Item>
          <Link to="/">{props.params.item}</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{url}</Breadcrumb.Item>
      </Breadcrumb>
      
      <AppContext.Consumer>
                    {
                        value => {
                            console.log(value)
                             return <h1 style={{color: value.color}}>{'context孙子'}</h1>
                        }
                    }
                </AppContext.Consumer>
      </>)
}

export default ChildFunction