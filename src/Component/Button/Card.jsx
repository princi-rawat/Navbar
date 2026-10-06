import React,{useState} from 'react'
const Card = () => {
    let[post,setPost]=useState(userPost)
  return (
    <div>
        {
            post.map((ele)=>{
                return(
                    <div key={ele.id}>
                    <h2>{ele.id}</h2>
                    <p>Title={ele.title}</p>
                    <p>Body={ele.body}</p>
                    </div>
                )
            })
        }
    </div>
  )
}
export default Card