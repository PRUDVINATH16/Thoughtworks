import { useRef, useState } from "react";
import { useLoginMutation } from "../services/authAPI"

function Login() {

  const [loginUser, { isLoading }] = useLoginMutation();
  const [errorMsg, setErrorMsg] = useState('');
  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleLogin = async () => {
    setErrorMsg('');
    try {
      const credentials = { 
        username: usernameRef.current.value, 
        password: passwordRef.current.value 
      };
      const res = await loginUser(credentials).unwrap();
      console.log('Login Success:', res);

      if (res.token) {
        localStorage.setItem('token', res.token);
      }

      usernameRef.current.value = '';
      passwordRef.current.value = '';
      alert('Login Successful!');
    } catch (err) {
      console.error('Login Failed:', err);
      if (err.status === 'FETCH_ERROR') {
        setErrorMsg('Server is unreachable. Please check if the backend is running.');
      } else {
        setErrorMsg(err.data?.message || 'Login failed. Please check your credentials.');
      }
    }
  }

  return (
    <div className='login-form'>
      <h2>Login</h2>
      {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}
      <label htmlFor="username">Username</label>
      <input type="text" id='username' placeholder='Username' ref={usernameRef} />
      <label htmlFor="password">Password</label>
      <input type="password" id='password' placeholder='Password' ref={passwordRef} />
      <button 
        className='login-btn' 
        disabled={isLoading}
        onClick={() => {
          if (usernameRef.current.value && passwordRef.current.value) {
            handleLogin();
          }
        }}
      >
        {isLoading ? 'Logging in...' : 'Login'}
      </button>
    </div>
  )
}

export default Login