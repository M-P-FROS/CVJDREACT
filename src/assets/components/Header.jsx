import { Link } from "react-router-dom";




const Header = () => {
    return (
        <div className='navbar'>
        <nav
     className="navbar navbar-expand-lg bg-secondary text-light text-uppercase fixed-top"
     id="mainNav"
   >
     <div className="container">
       <Link className="navbar-brand text-light" to="/">Jane Doe</Link>
       <button
         className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
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
           <li className="nav-item mx-0 mx-lg-1">
             <Link className="nav-link py-3 px-0 px-lg-3 text-light rounded" to = "/services">Services</Link
             >
           </li>
           <li className="nav-item mx-0 mx-lg-1">
           <Link className="nav-link py-3 px-0 px-lg-3 text-light rounded" to = "/realisations">Realisations</Link
           >
           </li>
           <li className="nav-item mx-0 mx-lg-1">
           <Link className="nav-link py-3 px-0 px-lg-3 text-light rounded" to = "/blog">Blog</Link
           >
              </li>
           <li className="nav-item mx-0 mx-lg-1">
           <Link className="nav-link py-3 px-0 px-lg-3 text-light rounded" to = "/contacts">Me contacter</Link
                           >
           </li>
         </ul>
       </div>
     </div>
           </nav>
           </div>

    );
};

export default Header;