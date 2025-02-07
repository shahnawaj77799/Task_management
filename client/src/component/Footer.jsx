

// const Footer=()=>{
//     return(
//         <>
//           <div id="footer">
//             Task Management System.
//           </div>
//         </>
//     )
// }

// export default Footer;



// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-dark text-white py-4">
//       <div className="container text-center">
//         <p className="mb-0">
//           Task Management System - <span className="font-weight-light">Your productivity partner</span>
//         </p>
//         <small>&copy; 2025 Task Management System. All Rights Reserved.</small>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




import React from 'react';
// import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'; // Social Media Icons

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          {/* Logo and Description */}
          <div className="col-md-4 mb-4">
            <h3 className="text-white">Task Management</h3>
            <p className="text-muted">
              A seamless solution to manage your tasks and boost your productivity. Stay on top of your work with our powerful tools.
            </p>
          </div>

          {/* Useful Links */}
          <div className="col-md-4 mb-4">
            <h5 className="text-white">Useful Links</h5>
            <ul className="list-unstyled">
              <li><a href="/about" className="text-muted text-decoration-none">About Us</a></li>
              <li><a href="/contact" className="text-muted text-decoration-none">Contact</a></li>
              <li><a href="/services" className="text-muted text-decoration-none">Services</a></li>
              <li><a href="/privacy" className="text-muted text-decoration-none">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h5 className="text-white">Contact</h5>
            <ul className="list-unstyled">
              <li className="text-muted">Email: support@taskmanager.com</li>
              <li className="text-muted">Phone: +1 (800) 123-4567</li>
              <li className="text-muted">Address: 123 Main Street, City, Country</li>
            </ul>
          </div>
        </div>

        {/* Social Media and Footer Bottom */}
        <div className="row justify-content-between align-items-center">
          <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
            <div className="d-flex justify-content-center justify-content-md-start">
              {/* <a href="https://www.facebook.com" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
                <FaFacebookF size={24} />
              </a>
              <a href="https://www.twitter.com" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.linkedin.com" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn size={24} />
              </a>
              <a href="https://www.instagram.com" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={24} />
              </a> */}
            </div>
          </div>

          <div className="col-md-6 text-center text-md-right">
            <small>&copy; 2025 Task Management System. All Rights Reserved.</small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
