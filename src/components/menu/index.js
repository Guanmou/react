import React from 'react'
import { Menu, Icon,Layout} from 'antd';
import {Link,withRouter} from 'react-router-dom'
const { SubMenu } = Menu;
const { Sider} = Layout;

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


 class MenuComponent extends React.Component {
  state = {
    collapsed: false,
    itemOpen:true,
    subKey:[]
  };

  onCollapse = collapsed => {
    // console.log(collapsed);
    this.setState({ collapsed });
  };
  handle=()=>{
    this.setState({
      subKey:['sub1']
    })
  }
  render() {
    console.log(this.props)//withRouter才能打印出此值
    let path=this.props.location.pathname
    if(path=='/neiye'){
      path= "/"
    }

    return (
   
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" style={{display:" flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 5}}> <img style={{verticalAligh:'middle'}} src={require('../../imgs/langchao.png')} /> </div>
          {/* es6不支持在<img />标签内直接写图片的路径 */}
          <Menu theme="dark" 
          selectedKeys={[path]}  
          mode="inline" 
          // onOpenChange={this.handle}
          // openKeys={this.state.subKey}
          inlineCollapsed={this.state.itemOpen}>
            <Menu.Item key="/">
            <Link to='/'>
              <Icon type="pie-chart" />
              <span>实时监控</span>
            </Link>
            </Menu.Item>
            <Menu.Item key="/page2">
            <Link to='/page2'>
              <Icon type="desktop" />
              <span>XSS测试</span>
              </Link>  
            </Menu.Item>
            <SubMenu
             onClick={this.handle}
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>用户管理</span>
                </span>
              }
            >
              <Menu.Item key="/page3"><Link to='/page3'>系统升级</Link></Menu.Item>
              <Menu.Item key="4">资产管理</Menu.Item>
              <Menu.Item key="5">日志查看</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="team" />
                  <span>系统授权</span>
                </span>
              }
            >
              <Menu.Item key="6">授权管理</Menu.Item>
              <Menu.Item key="8">报表查看</Menu.Item>
            </SubMenu>
            <Menu.Item key="/redux">
            <Link to='/redux'>
              <Icon type="file" />
              <span>redux练习</span></Link>
            </Menu.Item>
          </Menu>
        </Sider>
     
    );
  }
}
export default withRouter(MenuComponent)