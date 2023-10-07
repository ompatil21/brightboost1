// 'use client'
// import styles from './page.module.css'
// import{useRouter} from 'next/navigation'

// export default function Home() {
//   const useRouterLogin = useRouter();
//   const navigate =(name)=>{
//     useRouterLogin.push(name)
//   }
//   return (
//     <main className={styles.main}>
//       <h1>Home page</h1>
      
   
//       <button onClick={()=>navigate("/login")} >Go to login page</button>
    
    
//     </main>
    
//   )
// }

'use client'
import Link from 'next/link';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import './homeStyle.css'; // Ensure you have a separate CSS file for home page styles

const Home = () => {
  return (
    <div className="home-page">
      <div className="overlay">
        <div className="content">
          <h1>Welcome to Bright Boost</h1>
          <p>Empowering High School Students Through Quality Tutoring</p>
          <p>Join us to enhance your academic journey and achieve your goals.</p>
          <div className="buttons">
            <Link href="/login">
              {/* <a className="login-button"> */}
                <FaSignInAlt /> Login
              {/* </a> */}
            </Link>
            <Link href="/registration">
              {/* <a className="registration-button"> */}
                <FaUserPlus /> Register
              {/* </a> */}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;


