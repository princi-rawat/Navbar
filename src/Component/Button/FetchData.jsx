import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
const FetchData = () => {
    let[content,setContent]=useState([])
    async function getData(){
        let response = await axios.get("")
        console.log(response.data)
        setContent(response.data)
    }
    useEffect(()=>{
            getData()
    },[])
return (
    <div>
        {
            content.map((ele)=>{
                return(
                    <img src={ele.url} alt=""/>
                )
            })
        }
    </div>
  )
}

export default FetchData