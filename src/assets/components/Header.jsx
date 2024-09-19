import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
    return (
        <div className='navbar d-flex flex-row '>
        <nav
     className="navbar navbar-expand-lg text-light text-uppercase fixed-top"
     id="mainNav">
      
     <Container>       
       <Navbar.Brand className=" d-flex text-light" href="/">
        <img
        src="/favicon.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="favicon de John Doe"/>
     
        <p className="px-3">John Doe</p>
        </Navbar.Brand>
     </Container>
     
     <Container className=" d-flex flex-row-reverse text-light fixed-top">
       <button
         className="navbar-toggler collapsed text-uppercase font-weight-bold bg-primary text-white rounded mt-3"
         type="button"
         data-bs-toggle="collapse"
         data-bs-target="#navbarResponsive"
         aria-controls="navbarResponsive"
         aria-expanded="false"
         aria-label="Toggle navigation"
         
       >
         <i className="fas fa-bars"></i>
       </button>
       <div className="collapse navbar-collapse" id="navbarResponsive">
         <ul className="navbar-nav ms-auto">
           <li className="nav-item active mx-0 mx-lg-1">
             <Link className="nav-link py-3 px-0 px-lg-3 text-light rounded" to = "/services">Services</Link>
           </li>
           <li className="nav-item active mx-0 mx-lg-1">
           <Link className="nav-link py-3 px-0 px-lg-3 text-light rounded" to = "/realisations">Realisations</Link>
           </li>
           <li className="nav-item active mx-0 mx-lg-1">
           <Link className="nav-link py-3 px-0 px-lg-3 text-light rounded" to = "/blog">Blog</Link>
              </li>
           <li className="nav-item active mx-0 mx-lg-1">
           <Link className="nav-link py-3 px-0 px-lg-3 text-light rounded" to = "/contacts">Me contacter</Link>
           </li>          
         </ul>
       </div>
       </Container>
           </nav>
           </div>

    );
};

export default Header;