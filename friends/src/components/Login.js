import React,{ useState}  from 'react';

import {axiosWithAuth} from '../utils/axiosWithAuth.js';


function Login (props){
    const [credentials, setCredentials]=useState({username:'', password:''})

    const handleChange = e =>{
        setCredentials(
            {
                ...setCredentials, 
                [e.target.name] : e.target.value
            }
        );
    };

    const login = e =>{
        e.preventDefault();
        console.log('Login Credentials: ', credentials);
        axiosWithAuth()
        .post('/login', credentials)
        .then(res =>{
            console.log (res)
            localStorage.setItem('token', res.data.payload)
            this.props.history.push('/friends')
        })
        .catch (err => console.log(err));
        
    };


    return(
        <div>
            <form>
                <input
                type='text'
                name='username'
                value={credentials.username}
                onChange={handleChange}
                />

                <input
                type='password'
                name='password'
                value={credentials.password}
                onChange={handleChange}
                />

                <button type='submit'>Log In</button>
            </form>
        </div>
    )
}

export default Login;