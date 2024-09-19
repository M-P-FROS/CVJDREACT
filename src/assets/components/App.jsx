
import { Routes,Route } from 'react-router-dom';

import Home from "../../pages/Home";
import Services from "../../pages/Services";
import Realisations from "../../pages/Realisations";
import Blog from "../../pages/Blog";
import Contacts from "../../pages/Contacts";
import Mentions from '../../pages/Mentions';



const App = () => {
  return (
    <div className="app">
 
            <Routes>
                <Route path="/" element ={<Home/>}> </Route>
                <Route path="/services" element ={<Services/>}> </Route>
                <Route path="/realisations" element ={<Realisations/>}> </Route>
                <Route path="/blog" element ={<Blog/>}> </Route>
                <Route path="/contacts" element ={<Contacts/>}> </Route>
                <Route path="/mentions" element ={<Mentions/>}> </Route>
            </Routes>
           </div>
    
  );
};

export default App;