'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaUserShield } from 'react-icons/fa';
import './adminLoginStyle.css'; // Ensure you have a separate CSS file for admin login styles

const AdminLogin = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform admin login logic here, e.g., send a request to your server

    // For demonstration purposes, let's assume login is successful
    // Redirect to an admin dashboard page
    router.push('/admin-dashboard');
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="icon">
          <FaUserShield />
        </div>
        <h2 className="heading-white">Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
