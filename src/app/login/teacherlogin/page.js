'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaChalkboardTeacher } from 'react-icons/fa';
import './teacherLoginStyle.css'; // Ensure you have a separate CSS file for teacher login styles

const TeacherLogin = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform teacher login logic here, e.g., send a request to your server

    // For demonstration purposes, let's assume login is successful
    // Redirect to a teacher dashboard page
    router.push('/teacher-dashboard');
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="icon">
          <FaChalkboardTeacher />
        </div>
        <h2 className="heading-white">Teacher Login</h2>
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

export default TeacherLogin;
