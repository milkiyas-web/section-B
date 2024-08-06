import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProtectedPage = () => {
  const navigate  = useNavigate();
  const style : any = {
    heading: {
      color: 'red'
    },
    button: {
      backgroundColor: 'blue',
      color: 'white',
      padding: '10px',
      borderRadius: '5px',
    }
  }

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:3000/logout', {}, { withCredentials: true });
      document.cookie = 'token=; Max-Age=0;'; // Remove the cookie
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };
  return (
    <div>
      <h1 className={style.heading}>
      protectedPage
      </h1>
      <button onClick={handleLogout} className={style.button}>Log out</button>
    </div>
  )
}

export default ProtectedPage