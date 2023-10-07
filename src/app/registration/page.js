'use client'
import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaUniversity } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import './registrationStyle.css'; 
const Registration = () => {
  const router = useRouter();
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [university, setUniversity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform registration logic here, e.g., send a request to your server

    // For demonstration purposes, let's assume registration is successful
    // Redirect to the dashboard page
    router.push('/dashboard');
  };

  return (
    <div className="registration-page">
      <div className="overlay">
        <div className="content">
          <h1>Register with Bright Boost</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <FaPhone className="icon" />
              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <FaEnvelope className="icon" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <FaMapMarkerAlt className="icon" />
              <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <FaUniversity className="icon" />
              <input
                type="text"
                placeholder="University Name"
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
                required
              />
            </div>
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
