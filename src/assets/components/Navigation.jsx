import { Routes,Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from "../../pages/Home";
import Services from "../../pages/Services";
import Realisations from "../../pages/Realisations";
import Blog from "../../pages/Blog";
import Contacts from "../../pages/Contacts";


const Navigation = () => {
    return (
        <div className='navbar' id='mainNav'>
            <nav>
                <Link to ="/">Accueil</Link>
                <Link to ="/about">A propos</Link>
                <Link to ="/realisations">Realisations</Link>
                <Link to ="/blog">Blog</Link>
                <Link to ="/contacts">Contactez-moi</Link>
                
            </nav>

            <Routes>
                <Route path="/" element ={<Home/>}> </Route>
                <Route path="/about" element ={<Services/>}> </Route>
                <Route path="/realisations" element ={<Realisations/>}> </Route>
                <Route path="/blog" element ={<Blog/>}> </Route>
                <Route path="/contacts" element ={<Contacts/>}> </Route>
            </Routes>
            
        </div>
    );
};

export default Navigation;