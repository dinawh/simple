import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

const UserLogIn=()=>{
    const [username,setUsername] = useState('') // username real data, if you wanna change it, use setUsername
    const [password,setPassword] = useState('') //useState('') ''=initial value
    const [error,setError] = useState('')
    const navigate = useNavigate() // to route between pages (redirect)
    const userinformation = localStorage.getItem('UserInfo') //get value bu name

    useEffect(()=>{
        if(userinformation){
            navigate('/')
        }else if(error){
            navigate('/login/')
        }
    },[error,userinformation,navigate])

    const Done = () => { // function or method
        // send request to backend to get jason data (API)
        fetch(`http://127.0.0.1:8000/user/${username}`, {
            method:'GET', //get data // post add data // put edit data //delete data 
            headers: {
                'Content-Type':'application/json'
            },})
        .then(resp => resp.json())
        .then(result => {
            // (Set) local storage take name and value, if you wanna get it, use its name
            localStorage.setItem('UserInfo', JSON.stringify(result))
            //we save data in localstorage so that it wont be gone when i refresh unless i clicked on logout or deleted from server (which is in the application in the server)
            //it stores on server, when we rerender the page, data will be stucked on the server 
            navigate('/')
        })
    }

    const login = () => {
        fetch('http://127.0.0.1:8000/dj-rest-auth/login/', {
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({username, password})
        })
        .then(resp => resp.json())
        //result is the data that we added in django
        .then(result => {
            if(result.key === undefined) {
                //data is not found 
                setError("Invalid username or password")
                return
            }
            Done()
        })
    }
// {} used to show dynamic data 
// {&&} if, {args ? arg : } ? = if, : = else
    return (
        <div>
            <h1>Login</h1>
            {error && <h3>{error}</h3>}
            <p>Your Username: </p>
            <input type='text' placeholder='Username' 
                onChange={e=>setUsername(e.target.value)}/>
            <p>Your Password: </p>
            <input type='password' placeholder='Password'
                onChange={e=>setPassword(e.target.value)}/>

            <button onClick={()=>login(username,password)}>Login</button>
          
        </div>
    )
}

export default UserLogIn
