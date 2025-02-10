

// const Header=()=>{
//     return(
//         <>
//         <header className="header">
//       <div className="logo">
//         {/* <img src="src/images/logo.jpg" alt="Logo" className="logo-image" /> */}
//         <h1 className="logo-text">Task Management System</h1>
//       </div>


//     </header>
//         </>
//     )
// }
// export default Header;




// import React from 'react';

// const Header = () => {
//   return (
//     <>
//       <header className="header bg-dark text-white py-3">
//         <div className="container">
//           <div className="row justify-content-between align-items-center">
//             {/* Logo Section */}
//             <div className="col-12 col-md-6 text-center text-md-left mb-3 mb-md-0">
//               <div className="logo">
//                 {/* <img src="src/images/logo.jpg" alt="Logo" className="logo-image" /> */}
//                 <h1 className="logo-text">Task Management System</h1>
//               </div>
//             </div>

//             {/* Optional Navbar (for larger screens) */}
//             <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end">
//               <nav className="d-flex">
//                 <ul className="list-unstyled d-flex mb-0">
//                   <li className="mx-3"><a href="/" className="text-white text-decoration-none">Home</a></li>
//                   <li className="mx-3"><a href="/about" className="text-white text-decoration-none">About</a></li>
//                   <li className="mx-3"><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
//                 </ul>
//               </nav>
//             </div>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// }

// export default Header;


import React from 'react';

const Header = () => {
  return (
    <>
      <header className="header bg-dark text-white py-3">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            {/* Logo Section */}
            <div className="col-12 col-md-6 text-center text-md-left mb-3 mb-md-0">
              <div className="logo">
                {/* <img src="src/images/logo.jpg" alt="Logo" className="logo-image" /> */}
                <h1 className="logo-text text-white">Task Management System</h1> {/* Ensure logo text is white */}
              </div>
            </div>

            {/* Optional Navbar (for larger screens) */}
            <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end">
              <nav className="d-flex">
                <ul className="list-unstyled d-flex mb-0">
                  <li className="mx-3"><a href="/" className="text-white text-decoration-none">Home</a></li>
                  <li className="mx-3"><a href="/about" className="text-white text-decoration-none">About</a></li>
                  <li className="mx-3"><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Custom CSS Styling (if needed) */}
      <style jsx>{`
        .header {
          background-color: #343a40; /* Dark background for header */
        }

        .logo-text {
          font-size: 1.8rem;
          font-weight: bold;
        }

        .header .nav-link {
          color: white;
          text-decoration: none;
        }

        .header .nav-link:hover {
          color: #ffc107; /* Yellow color for hover effect */
        }
      `}</style>
    </>
  );
}

export default Header;


