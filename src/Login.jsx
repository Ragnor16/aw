import React, {useState} from "react" 
import Header from './Header'

const Login =(props) => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const handleSubmit= (e)=>{
        e.preventDefault();
        console.log(email);    
    }
   

    return (
        
        

        <div className='auth-form-container'>
            <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
            <label htmlfor="email">Email</label>
            <input value={email} type='email' placeholder="Your email" id="email" name="email" />
            <label htmlfor="password">password</label>
            <input value={password} type='password' placeholder="*********" id="password" name="password"/>
<button>Log IN</button>

        </form>
        <button className= "link-btn" onClick={()=>props.onFormSwitch('register')} >Don't have a account? Register Here</button>
        </div>
    )
}

export default Login