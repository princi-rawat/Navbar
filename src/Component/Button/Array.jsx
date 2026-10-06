import {useState} from 'react'

const Array = () => {
    let[arr,useArr]=useState([10,20,30,40])
    let btnHandler=()=>{
        useArr([...arr, 50])
    }
  return (
    <div>{
        arr.map((ele)=>{
            return(
            <>
            <h1>{ele}</h1>
            </>
        )
    })}
<button onClick={btnHandler}>Add</button>
</div>
  )
}
export default Array