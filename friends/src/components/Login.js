import React,{ useState}  from 'react';


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
        // set up axiosWithAuth
    }


    return(
        <div>
            <form>
                <input
                type='text'
                name='username'
                value={credentials.username}
                />

                <input
                type='password'
                name='password'
                value={credentials.password}
                />

                <button type='submit'>Log In</button>
            </form>
        </div>
    )
}

export default Login;