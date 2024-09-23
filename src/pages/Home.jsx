import Header from '../assets/components/Header';
import Footer from '../assets/components/Footer';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {ProgressBar} from 'react-bootstrap';




const Home = () => {
    return (
<section>
        <Header />
        <div>
          <div className='hero'>
          <img src="images/imghero/hero-bg.jpg" className="img-fluid pb-3" alt="informaticien sur son poste de travail..."/>
            <h1 className='background-size:cover'>Bonjour, je suis John DOE</h1>
          <h2>Développeur full stack</h2>
          <button type="button" className="homebtn rounded">En savoir plus</button>
          </div>

          <div className='herobis bg-white m-5'>
          <Container fluid >
            <Row>
              <Col xs={12} sm={6} lg={6} className="d-flex align-items pb-2">                  
                      <div className='apropos'>  
                      <h2 className='border-bottom border-primary mx-5 pt-4'> A propos</h2>
                      <p className='px-5 pt-3'>Passionné par l&apos;informatique et les nouvelles technologies,
                      j&apos;ai suivi une formation <strong> intégrateur-développeur web </strong>au CEF.
                      Au cours de cette formation, j&apos;ai pû acquérir des bases solides dans le domaine du <strong>développement web </strong>.
                      <br></br>
                      <br></br>
                      Basé à Lyon, je suis en recherche d&apos;une alternance au sein d&apos;une agence digitale pour consolider
                      ma formation de <strong>développeur full stack</strong>.
                      <br></br>  
                      <br></br>           
                      J&apos;accorde une attention particulière à la qualité du code que j&apos;écris
                      et je respecte les bonnes pratiques du web.</p>                      
                      </div>                      
               </Col>
           
              <Col xs={12} sm={6} lg={6} className="d-flex align-items">                    
                    <div className='mescompetences pt-4 mb-4'>                     
                      <img src="images/imgabout/john-doe-about.jpg" className='imgjd img-fluid p-3' alt='photo de Jhon Doe, jeune homme barbu'/>
                      <h2 className='p-3'>Mes compétences</h2>
                      <div className='progressbar px-3 '>
                      <p className='text-uppercase my-1 px-3'>HTML5   90 %</p>
                      <ProgressBar variant="danger" now={90} />
                      <p className='text-uppercase my-1 px-3'>Css3   80%</p>
                      <ProgressBar variant="info" now={80} />
                      <p className='text-uppercase my-1 px-3'>Javascript 70%</p>
                      <ProgressBar variant="warning" now={70} />
                      <p className='text-uppercase my-1 px-3'>PHP   70%</p>
                      <ProgressBar variant="success" now={60} />
                      <p className='text-uppercase my-1 px-3'>React   60%</p>                                         
                      <ProgressBar variant="primary "  now={50} />
                      </div>
                    </div>
              </Col>      
          </Row>
          </Container>    
          </div>     
          </div>
        <Footer/>      
</section>
    );
};

export default Home;