import React, {useState} from 'react'

const Transfer = (props) =>{
  const [inputvalue, setInputvalue] = useState('');

  const[value, setValue] = useState(props.state || []);
  const handleChange = (id) => {
    const arr = [...value];
    const index = value.indexOf(id);

    if (index === -1) {
      arr.push(id);
      setValue(arr);
      props.onChange && props.onChange(arr);
    } else 
    {
      arr.splice(index, 1);
      setValue(arr);
      props.onChange && props.onChange(arr);
    }
  }
  const handleClear =(id) => {
    const arr = [...value];
    arr.splice(value.indexOf(id), 1);
    setValue(arr)
    props.onChange && props.onChange(arr);
  }
  return(<div>
    <div>
      <input placeholder='请搜索' value={inputvalue} onChange={(e) => setInputvalue(e.target.value)}></input>
      {
        props.options.filter(item=> item.title.indexOf(inputvalue)!=-1).map(item => (<div key={item.id}>  
            <input type='checkbox' checked={value.includes(item.id)} onChange={() => handleChange(item.id)}/>{item.title} : {item.user}
          </div>))
      }
    </div>
    <div>
      已选数据
      {
        props.options.filter(item => value.includes(item.id)).map(item => (
        <div key={item.id}>{item.title} <span onClick={() => handleClear(item.id)}>X</span></div>
        ))
      }
    </div>
  </div>)
}
export default Transfer;
  
    
       
    




