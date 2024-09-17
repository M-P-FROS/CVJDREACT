import Header from '../assets/components/Header';
import Banner from '../assets/components/Banner';
import Footer from '../assets/components/Footer';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Services = () => {
    return (
        <section id="services">
            <Header/>
            <Banner/>
           
            <h1  className='text-center mt-4 px-3'>MON OFFRE DE SERVICES</h1>
            <h3 className='text-decoration-underline link-underline-primary text-center fs-4 mb-5'>Voici les prestations sur lesquelles je peux intervenir.</h3>
            
         
            <Container >
            <Row>  
            <Col xs={12} sm={4} lg={4} className="d-flex align-items-stretch">
                <div className="bg-white text-center mx-0 my-5 p-2">
                <img src="images/imgservices/imgecran.jpg" className='img-fluid m-3' alt='icone d un ecran ordinateur'/>
                <h5 className='text-uppercase m-auto'>UX Design</h5>
                <br></br>
                <p className='mx-auto'>L&apos;<strong>UX Design</strong> est une méthode de conception centré sur l&apos;utilisateur.
                Son but est d&apos;offrir  une expérience de navigation optimale à l&apos;internaute.</p>
                </div>
            </Col>
          
            <Col xs={12} sm={4} lg={4} className="d-flex align-items-stretch">
                <div className="bg-white text-center mx-0 my-5 p-2">
                <img src="images/imgservices/imgdevelop.jpg" className='img-fluid m-3' alt='icone de fichier ordinateur'/>
                <h5 className='text-uppercase m-auto'>développement WEB</h5>
                <br></br>
                <p className='m-auto'>Le <strong>développement de sites web</strong> repose sur l&apos;utilisation des langages HTML, CSS, Javascript, et PHP.</p>
                </div>
            </Col>
          
            <Col xs={12} sm={4} lg={4} className="d-flex align-items-stretch">
                    <div className="p-1 bg-white text-center mx-0 my-5 p-2">
                    <img src="images/imgservices/imgref.jpg" className='img-fluid m-3' alt='loupe incluant un dollard'/>
                   
                    <h5 className='text-uppercase m-auto'>référencement</h5>
                    <br></br>
                    <p className='m-auto'>Le <strong>Référencement naturel d&apos;un site</strong>, aussi appélé SEO,
                     consiste à mettre des techniques en oeuvre pour <italic className='italic'> améliorer sa position </italic>
                     dans les résultats des moteurs de recherche.</p>                                
                    </div>              
            </Col>
            </Row>                     
           </Container>
        
          
            <Footer/>
        </section>
    );
};

export default Services;