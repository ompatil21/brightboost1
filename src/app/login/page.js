"use client"
import { useRouter } from 'next/navigation';
import React from 'react';
import Link from 'next/link';
import { FaUserGraduate, FaChalkboardTeacher, FaUserShield } from 'react-icons/fa';
import './loginStyle.css'

const Login = () => {

  const useRouterLogin = useRouter();
  // const handleStudentClick = (e) => {
  //   // Handle student icon click logic, e.g., redirect to student login page
  //   console.log('Student icon clicked');
  //   e.stopPropagation(); // Stop event propagation to prevent triggering Link component's navigation
  //   useRouterLogin.push("/login/studentlogin")
   
  // };

  // const handleTeacherClick = (e) => {
  //   // Handle teacher icon click logic, e.g., redirect to teacher login page
  //   console.log('Teacher icon clicked');
  //   e.stopPropagation(); // Stop event propagation to prevent triggering Link component's navigation
  //   useRouterLogin.push("/login/teacherlogin")
  // };

  // const handleAdminClick = (e) => {
  //   // Handle admin icon click logic, e.g., redirect to admin login page
  //   console.log('Admin icon clicked');
  //   e.stopPropagation(); // Stop event propagation to prevent triggering Link component's navigation
  //   useRouterLogin.push("/login/adminlogin")
  // };

  return (
    <div className="landing-page">
      <div className="icon-container" >
        <Link href="/login/studentlogin">
          <div className="icon">
            <FaUserGraduate />
            <span>Student</span>
          </div>
        </Link>
        <Link href="/login/teacherlogin" >
          <div className="icon">
            <FaChalkboardTeacher />
            <span>Teacher</span>
          </div>
        </Link>
        <Link href="/login/adminlogin">
          <div className="icon">
            <FaUserShield />
            <span>Admin</span>
          </div>
        </Link>
      </div>
    </div>
  );
};


export default Login;

