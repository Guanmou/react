import React ,{Component} from 'react'

export default (paramsComponent,name)=>{
    class newComponent extends Component{
        constructor () {
            super()
            this.state = { data: null }
          }
        componentWillMount(){
            let data = localStorage.getItem(name)
            this.setState({ data })
        }
        render(){
            return <paramsComponent data={this.state.data}></paramsComponent>
        }
    }
    return newComponent
}