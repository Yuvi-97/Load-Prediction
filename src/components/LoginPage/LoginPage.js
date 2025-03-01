import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

function Login() {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isLogin && password !== confirmPassword) {
            setMessage("Passwords do not match");
            return;
        }

        try {
            if (isLogin) {
                const response = await axios.post('http://localhost:8080/user/login', null, {
                    params: { username: email, password }
                });
                setMessage(response.data);
                navigate('/demand');
            } else {
                const response = await axios.post('http://localhost:8080/user/register', {
                    username: email,
                    password
                });
                setMessage(response.data);
                setIsLogin(true);
            }
        } catch (error) {
            setMessage(error.response?.data || "An error occurred");
        }
    };

    return (
        <div className="login-container-unique">
            <div className="login-box-unique">
                <h2 className="login-header-unique">{isLogin ? 'Login' : 'Sign Up'}</h2>
                {message && <p className="message">{message}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="input-group-unique">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group-unique">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {!isLogin && (
                        <div className="input-group-unique">
                            <label htmlFor="confirm-password">Confirm Password</label>
                            <input
                                type="password"
                                id="confirm-password"
                                placeholder="Confirm your password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                    )}
                    <button type="submit" className="login-btn-unique">
                        {isLogin ? 'Login' : 'Sign Up'}
                    </button>
                </form>
                <div className="toggle-unique">
                    <p>
                        {isLogin ? "Don't have an account?" : "Already have an account?"}
                        <span onClick={() => setIsLogin(!isLogin)} className="toggle-link-unique">
                            {isLogin ? 'Sign Up' : 'Login'}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
