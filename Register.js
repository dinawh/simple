import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

const Register = () =>{
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password1,setPassword1] = useState('')
    const [password2,setPassword2] = useState('')
    const [error,setError] = useState('')
    const navigate = useNavigate()
    const userinformation = localStorage.getItem('UserInfo')

    useEffect(()=>{
        if(userinformation){
            navigate('/')
        }
    },[userinformation,navigate])

    const Done = () => {
        fetch(`http://127.0.0.1:8000/user/${username}`, {
            method:'GET',
            headers: {
                'Content-Type':'application/json'
            },})
        .then(resp => resp.json())
        .then(result => {
            localStorage.setItem('UserInfo', JSON.stringify(result))
            navigate('/')
        })
    }

    const login = () => {
        fetch('http://127.0.0.1:8000/dj-rest-auth/login/', {
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({username, password1})
        })
        .then(resp => resp.json())
        .then(result => {
            Done()
        })
    }


    const registerr=()=>{
        if(username&&email&&password1&&password2){
            fetch('http://127.0.0.1:8000/dj-rest-auth/registration/', {
                method:'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({username, email,password1,password2})
            })
                .then(resp => resp.json())
                .then(data => {
                    if(data.key === undefined) {
                        console.log(data)
                        setError('error in your data')
                        return
                    }
                    login()
                })
        }
    }

    return (
        <div>
            {error&&<h1>{error}</h1>}
            <h1>Register</h1>
            <p>Username: </p>
            <input type='text' placeholder='Username' 
                onChange={e=>setUsername(e.target.value)}/>
            <p>Email: </p>
            <input type='text' placeholder='Email'
                onChange={e=>setEmail(e.target.value)}/>
            <p>Password: </p>
            <input type='password' placeholder='Password' 
                onChange={e=>setPassword1(e.target.value)}/>
            <p>Confirm Password: </p>
            <input type='password' placeholder='Confirm Password'
                onChange={e=>setPassword2(e.target.value)}/>

            <button onClick={registerr}>Register</button>
        </div>
    )
}

export default Register