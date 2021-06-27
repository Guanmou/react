import React from 'react'
import MenuBar from './components/menu/index'
import {Layout,Breadcrumb} from 'antd'
import {BrowserRouter} from 'react-router-dom';
import Router from './router.js'
const {  Footer, Content } = Layout;
// const NavBar=()=>{
//     // console.log(this.props.children)
//     return(<div> 
//         <NavLink  to='/page1'><Button>page1</Button></NavLink>
//         <NavLink  to='/page2'><Button>page2</Button></NavLink>
//         {/* <Link  to='/page1' replace><Button>page1</Button></Link>
//         <Link  to='/page2'><Button>page2</Button></Link> */}
//     </div>)
// } 
  
// export default NavBar
    //   笔记 10.28
    // 1 现在，我们应用需要在各个页面间切换，如果使用锚点元素实现，在每次点击时，页面被重新加载，React Router提供了<Link>组件用来避免这种状况发生。 当 你点击<Link>时，url会更新，组件会被重新渲染，但是页面不会重新加载

    // 2 <Link>使用to参数来描述需要定位的页面。它的值既可是字符串，也可以是location对象（包含pathname、search、hash、与state属性）如果其值为字符串，将会被转换为location对象
    
    // 3  replace(bool)：为 true 时，点击链接后将使用新地址替换掉访问历史记录里面的原地址；为 false 时，点击链接后将在原有访问历史记录的基础上添加一个新的纪录。默认为 false；

//   4  <NavLink>是<Link>的一个特定版本，会在匹配上当前的url的时候给已经渲染的元素添加参数，组件的属性有

// activeClassName(string)：设置选中样式，默认值为active
// activeStyle(object)：当元素被选中时，为此元素添加样式
// exact(bool)：为true时，只有当导致和完全匹配class和style才会应用
// strict(bool)：为true时，在确定为位置是否与当前URL匹配时，将考虑位置pathname后的斜线
// isActive(func)判断链接是否激活的额外逻辑的功能
export const AppContext = React.createContext({color: 'blue'});
export default class App extends React.Component {
  componentDidMount() {
    console.log(AppContext)
  }
 
  render() {
    const {Provider, Consumer} = AppContext;
    return (
      <BrowserRouter>
      <Provider value={{color: 'red'}}>
        <Layout style={{ height: '100vh' }}>
            <MenuBar></MenuBar>
            <Layout style={{height:'100%'}}>
                <div style={{ background: '#fff',height:'100%'}}>
                  <Router></Router>
                </div>
              <div style={{ textAlign: 'center',height:'48px',lineHeight:'48px' }}>日志审计 ©2020 Created by Gyz</div>
            </Layout>
        </Layout>
        </Provider>,
     </BrowserRouter>
    );
  }
}