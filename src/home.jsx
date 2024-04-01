import React from 'react';
import { useEffect } from "react";
import getDataAndAppend from "./main";
import Navbar from './Navbar';
import './style.css'
// function HomePage() {
//   return (
//     <div className='container'>
//       <header>
//         <h1>Welcome to My Website</h1>
//         <nav>
//           <ul>
//             <li><a href="/">Home</a></li>
//             <li><a href="/about">About</a></li>
//             <li><a href="/contact">Contact</a></li>
//           </ul>
//         </nav>
//       </header>
//       <main>
//         <section>
//           <h2>About Us</h2>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec justo eget risus posuere blandit.</p>
//         </section>
//         <section>
//           <h2>Contact Us</h2>
//           <p>Email: example@example.com</p>
//           <p>Phone: 123-456-7890</p>
//         </section>
//       </main>
//       <footer>
//         <p>&copy; 2024 My Website. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }

// export default HomePage;

function Home() {
    
    useEffect(() => {
      getDataAndAppend();
    }, []);
  
    return (
      
      <div className="page">
        <div className ="navbar"> <Navbar/> </div>
        {/* Your other components */}
        <div className="container"></div>

      </div>
    );
  }
export default Home;
  