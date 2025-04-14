// src/Auth.jsx
import { useState } from 'react';
import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import "./Auth.css";
import "./pages/Dashboard.css";

export default function Auth({ onUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = isLogin
        ? await signInWithEmailAndPassword(auth, email, password)
        : await createUserWithEmailAndPassword(auth, email, password);
      onUser(userCredential.user);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      <div class="sidebar">
            <div class="baricons">
                <img src="https://github.com/user-attachments/assets/9380b62b-8486-4f1d-a3bf-821bf120147c" id="Comicon"/>
            </div>
            <div class="baraboutus">
                <div id="Setbutton">
                    <a href="https://github.com/Epicalable/ComDash" title="About Us"><img src="https://github.com/user-attachments/assets/e9530ede-b4bb-4842-a11a-bfcdeed6d236"/></a>
                </div>
            </div>
      </div>
      <div id="auth-container" style={{backgroundColor: 'color here'}}>
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit}>
        <label id="sno">E-mail:  </label><br />
        <input className="sbg" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" /><br />
        <label id="sno">Password:  </label><br />
        <input className="sbg" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" /><br />
        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>
      <button onClick={() => setIsLogin(!isLogin)}>
        Switch to {isLogin ? 'Sign Up' : 'Login'}
      </button>
    </div>
    </div>
    
  );
}
