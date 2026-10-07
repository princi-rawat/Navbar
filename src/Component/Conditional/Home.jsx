import React from 'react'

const Home = () => {
 let isLogin=true;
  return (
    <div>

       <h1>Home Component</h1>
       {isLogin? "Welcome":"Please Login"}
    </div>
  )
}

export default Home