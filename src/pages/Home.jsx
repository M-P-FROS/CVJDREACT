import Header from '../assets/components/Header';
import Footer from '../assets/components/Footer';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {ProgressBar} from 'react-bootstrap';


import '../sass/home.scss'


const Home = () => {
    return (
<section>
        <Header />
        <main>
          <div className='hero'>
          <img src="images/imghero/hero-bg.jpg" className="img-fluid pb-3" alt="informaticien sur son poste de travail..."/>
            <h1 className='background-size:cover'>Bonjour, je suis John DOE</h1>
          <h2>Développeur full stack</h2>
          <button type="button" className="btn">En savoir plus</button>
          </div>

          <div className='herobis'>
          <Container fluid>
            <Row>
              <Col xs={12} sm={6} lg={6} className="d-flex align-items-stretch pb-2 ">                  
                      <div className='apropos'>  
                      <h2 className='border-bottom border-primary px-3'> A propos</h2>
                      <p className='px-3'>Passionné par l&apos;informatique et les nouvelles technologies,
                      j&apos;ai suivi une formation <strong> intégrateur-développeur web</strong>au CEF.
                      Au cours de cette formation, j&apos;ai pû acquérir des bases solides dans le domaine du <strong>développement web </strong>.
                      <br></br>
                      Basé à Lyon,je suis en recherche d&apos;une alternance au sein d&apos;une agence digitale pour consolider
                      ma formation de <strong>développeur full stack</strong>.
                      <br></br>                
                      J&apos;accorde une attention particulière à la qualité du code que j&apos;écris
                      et je respecte les bonnes pratiques du web.</p>                      
                      </div>                      
               </Col>
           
              <Col xs={12} sm={6} lg={6} className="d-flex align-items-stretch">                    
                      <div className='mescompetences px-3'>                     
                      <img src="images/imgabout/john-doe-about.jpg" className='img-fluid p-3 rounded-pill' alt='photo de Jhon Doe, jeune homme barbu'/>
                      <h2 className='mt-3'>Mes compétences</h2>
                      <p className='text-uppercase my-1 px-3'>HTML5   90 %</p>
                      <ProgressBar variant="danger" now={90} />
                      <p className='text-uppercase my-1 px-3'>Css3   80%</p>
                      <ProgressBar variant="info" now={80} />
                      <p className='text-uppercase my-1 px-3'>Javascript 70%</p>
                      <ProgressBar variant="warning" now={70} />
                      <p className='text-uppercase my-1 px-3'>PHP   70%</p>
                      <ProgressBar variant="success" now={60} />
                      <p className='text-uppercase my-1 px-3'>React   60%</p>                                         
                      <ProgressBar variant="primary " className='pb-1 mb-2 ' now={50} />
                      </div>
              </Col>      
          </Row>
          </Container>    
          </div>     
          </main>
        <Footer/>      
</section>
    );
};

export default Home;