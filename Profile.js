import React, { useEffect } from 'react'

function Profile() {
    const data = localStorage.getItem("UserInfo")
    const getdata = () =>{
        console.log(data.id)
    }
  return (
    <div>
        <button onClick={()=>getdata()}>DINA</button>
    </div>
  )
}

export default Profile