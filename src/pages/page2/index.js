import React,{useState} from 'react';

import Transfer from './Transfer';
const Page = () => {
    const [state, setState] = useState([1,2]);
    const options =  [
        { id: 1, title: "测试 A", user: "用户 A" },
        { id: 2, title: "测试 B", user: "用户 B" },
        { id: 3, title: "测试 C", user: "用户 C" }
    ]
    return (<div>
        <Transfer 
            state={state}
            onChange={
                (val) => {
                    console.log(val)
                    setState(val)
                }
            }
            options={options}
        />
    </div>)
}
export default Page;