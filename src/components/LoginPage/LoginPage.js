import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for page redirection
import {
  TextField,
  Button,
  Box,
  Typography,
  IconButton,
  InputAdornment,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function LoginPage() {
  const navigate = useNavigate(); // Initialize the navigate function for redirection

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [userLoginSuccess, setUserLoginSuccess] = useState(false);
  const [adminLoginSuccess, setAdminLoginSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginType, setLoginType] = useState(null);

  const isUserLogin = loginType === 'user';

  const handleEmailChange = (e) => {
    if (isUserLogin) setUserEmail(e.target.value);
    else setAdminEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    if (isUserLogin) setUserPassword(e.target.value);
    else setAdminPassword(e.target.value);
  };

  const handleTogglePasswordVisibility = () => setShowPassword(!showPassword);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.[A-Z])(?=.[0-9])(?=.[!@#$%^&]).{6,}$/;
    return passwordRegex.test(password);
  };

  const handleLogin = () => {
    const email = isUserLogin ? userEmail : adminEmail;
    const password = isUserLogin ? userPassword : adminPassword;
    let valid = true;

    if (email === '') {
      setEmailError('Please enter your email');
      valid = false;
    } else if (!validateEmail(email)) {
      setEmailError('Invalid email');
      valid = false;
    } else {
      setEmailError('');
    }

    if (password === '') {
      setPasswordError('Please enter your password');
      valid = false;
    } else if (!validatePassword(password)) {
      setPasswordError(
        'Password must include at least 1 capital letter, 1 number, and 1 special character, and be at least 6 characters long.'
      );
      valid = false;
    } else {
      setPasswordError('');
    }

    if (valid) {
      console.log(`Login Type: ${loginType}`);
      console.log('Email:', email);
      console.log('Password:', password);
      if (isUserLogin) {
        setUserLoginSuccess(true);
        setAdminLoginSuccess(false); // Reset admin success
        navigate('/demand'); // Navigate to the /demand page for user login
      } else {
        setAdminLoginSuccess(true);
        setUserLoginSuccess(false); // Reset user success
        navigate('/demand'); // Navigate to the /demand page for admin login
      }
    }
  };

  const renderLoginForm = () => (
    <Box sx={styles.box}>
      <Typography variant="h4" sx={styles.header}>
        {isUserLogin ? 'User Login' : 'SignUp'}
      </Typography>

      <Typography sx={styles.label}>Email</Typography>
      <TextField
        label="Enter Email"
        fullWidth
        variant="outlined"
        value={isUserLogin ? userEmail : adminEmail}
        onChange={handleEmailChange}
        error={!!emailError}
        helperText={emailError}
      />

      <Typography sx={styles.label}>Password</Typography>
      <TextField
        label="Enter Password"
        type={showPassword ? 'text' : 'password'}
        fullWidth
        variant="outlined"
        value={isUserLogin ? userPassword : adminPassword}
        onChange={handlePasswordChange}
        error={!!passwordError}
        helperText={passwordError}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <Button
        variant="contained"
        color="primary"
        startIcon={<LoginIcon />}
        fullWidth
        sx={styles.button}
        onClick={handleLogin}
      >
        Login
      </Button>

      {isUserLogin && userLoginSuccess && (
        <Box sx={styles.successMessage}>
          <CheckCircleIcon sx={{ marginRight: '8px' }} />
          User Login successful
        </Box>
      )}
      {!isUserLogin && adminLoginSuccess && (
        <Box sx={styles.successMessage}>
          <CheckCircleIcon sx={{ marginRight: '8px' }} />
          Admin Login successful
        </Box>
      )}
      <Typography sx={styles.terms}>
        By signing in, you agree to our{' '}
        <span style={{ color: 'blue' }}>Conditions</span> and{' '}
        <span style={{ color: 'blue' }}>Privacy Policy</span>.
      </Typography>
    </Box>
  );

  return (
    <Box sx={styles.container}>
      <Box sx={styles.left}>
        <Box sx={styles.selectionPanel}>
          <Typography variant="h5" sx={{ marginBottom: '20px' }}>
            Select Login Type
          </Typography>
          <ToggleButtonGroup
            value={loginType}
            exclusive
            onChange={(e, newLoginType) => setLoginType(newLoginType)}
            aria-label="Login Type"
          >
            <ToggleButton value="user" aria-label="User Login" sx={{ color: 'white' }}>
              User Login
            </ToggleButton>
            <ToggleButton value="admin" aria-label="Admin Login" sx={{ color: 'white' }}>
              SigUp
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Box>

      <Box sx={styles.right}>{loginType && renderLoginForm()}</Box>
    </Box>
  );
}

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    backgroundImage:
      "url('https://images.unsplash.com/photo-1473341304170-971cb5ac1e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  left: {
    width: '30%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    color: '#fff',
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: '80%',
    maxWidth: '400px',
    padding: '40px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  },
  header: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  label: {
    fontSize: '16px',
    marginTop: '20px',
    marginBottom: '10px',
  },
  button: {
    marginTop: '30px',
    padding: '12px',
    backgroundColor: '#1e88e5',
    '&:hover': {
      backgroundColor: '#1565c0',
    },
  },
  successMessage: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20px',
    backgroundColor: 'green',
    color: 'white',
    padding: '10px',
    borderRadius: '5px',
  },
  selectionPanel: {
    textAlign: 'center',
  },
  terms: {
    marginTop: '10px',
    textAlign: 'center',
    fontSize: '14px',
  },
};

export default LoginPage;