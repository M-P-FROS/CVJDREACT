import Header from '../assets/components/Header';
import Banner from '../assets/components/Banner';
import Footer from '../assets/components/Footer';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const Contacts = () => {
    return (
  <section id="contacts">
            <Header/>
            <Banner/>
   

            <Container>
         
            <div className="card h-100">      
            <img src="images/contact-bg.jpg" className="card-img background-image img-fluid" alt="Enveloppes courrier sur clavier ordinateur"/>
            <div className="card-img-overlay">
          
            <Row className='p-5'>
              
              <Col xs={12} sm={12} lg={12} className="justify-content-center pt-2 bg-white">                  
              <div className='titre'>  
              <h5 className="card-title text-uppercase text-center pt-1">Me contacter</h5>  
               <p className="card-text">Pour me contacter en vue d&apos;une future collaboration, merci de renseigner le formulaire de contact</p>						
               <hr className="w-25 mx-auto border border-primary bg-primary border-3 opacity-100 mb-1"/>  
               </div>                               
               </Col>

               <Col xs={12} sm={6} lg={6} className="d-flex flex-column pl-3 bg-white">                  
              <div className='formulairedecontact'>  
               <h3 className="card-title ">Formulaire de contact</h3>  
               <p className='border-bottom border-primary'></p>
               <Form >
                <Form.Control className="mb-3"   type="text" size="sm" placeholder="Votre nom" />
                <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control className="mb-3"   type="email" size="sm" placeholder="Votre adresse mail :name@example.fr" />
                </Form.Group>
                <Form.Control className="mb-3"  size="sm" placeholder="Votre numéro de téléphone" />
                <Form.Group  controlId="exampleForm.ControlTextarea1">
                <Form.Control className="mb-3"  type="text" size="sm" placeholder="Sujet" />
                <Form.Control  size="sm" placeholder="Votre message" as="textarea" rows={4} />
                </Form.Group>    
                <div className="d-flex justify-content-center">
                <Button className="sm mt-5" variant="primary" type="submit">Envoyer</Button>                   
                </div>
                </Form>                                                         
               </div>   
                            
               </Col>
               
               <Col xs={12} sm={6} lg={6} className="d-flex flex-column pl-3 bg-white">                  
              <div className='coordonnees'>  
              <h3 className="card-title ">Mes coordonnées</h3>  
              <p className='border-bottom border-primary '></p>
              <adress>
              <i className='fas fa-map-marker'></i>40 Rue Laure Diebold, 69 009 Lyon, France<br/>
              <i className='fas fa-mobile-alt'></i> tel: 06 20 30 40 50<br/>
              </adress>
              </div>  
             
              <div className="map">
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6271524682!2d4.7963986117034505!3d45.778661970960165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1698876466515!5m2!1sfr!2sfr'
                height='400'
                width="100%"
                style={{ border: '0' }}
                allowfullscreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                  ></iframe>
               </div>           
              </Col>
             
            </Row>
              </div>
      </div>
            </Container>
      
        <Footer/>
  </section>
    );
};

export default Contacts;
                     
               

