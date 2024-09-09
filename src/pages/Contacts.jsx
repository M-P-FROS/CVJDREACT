import Header from '../assets/components/Header';
import Banner from '../assets/components/Banner';
import Footer from '../assets/components/Footer';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Form from 'react-bootstrap/Form';


const Contacts = () => {
    return (
        <section id="contacts">
            <Header/>
            <Banner/>
            <div className="card">
            <img src="images/contact-bg.jpg" className="card-img background-image opacity-50 img-fluid0" alt="Enveloppes courrier sur clavier ordinateur"/>
            <div className="card-img-overlay">

            <Container fluid>
            <Row>
              <Col xs={12} sm={12} lg={12} className="d-flex align-items-stretch pt-2 bg-white text-center">                  
              <div className='titre'>  
              <h5 className="card-title text-uppercase">Me contacter</h5>  
               <p className="card-text">Pour me contacter en vue d&apos;une future collaboration, merci de renseigner le formulaire de contact</p>						
               <hr className="w-25 mx-auto border border-primary bg-primary border-3 opacity-100"/>  
               </div>                      
               </Col>

               <Col xs={12} sm={6} lg={6} className="d-flex align-items p-2 bg-white">                  
              <div className='formulairedecontact'>  
               <h3 className="card-title ">Formulaire de contact</h3>  
               <p className='border-bottom border-primary'></p>
               <Form>
                <Form.Control className="mb-2"   type="text" size="sm" placeholder="Votre nom" />
                <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control className="mb-2"   type="email" size="sm" placeholder="Votre adresse mail :name@example.fr" />
                </Form.Group>
                <Form.Control className="mb-2"   type="phone" size="sm" placeholder="Votre numéro de téléphone" />
                <Form.Group  controlId="exampleForm.ControlTextarea1">
                <Form.Control className="mb-2"  type="text" size="sm" placeholder="Sujet" />
                <Form.Control  size="sm" placeholder="Votre message" as="textarea" rows={4} />
                </Form.Group>
                </Form>  
                                            
               </div>   
                            
               </Col>
               
               <Col xs={12} sm={6} lg={6} className="d-flex align-items-stretch p-2 bg-white">                  
              <div className='coordonnees'>  
              <h3 className="card-title ">Mes coordonnées</h3>  
              <p className='border-bottom border-primary '></p>
              <adress>
              <i className='fas fa-map-marker'></i>40 Rue Laure Diebold, 69 009 Lyon, France<br/>
              <i className='fas fa-moile-alt'></i> tel: 06 20 30 40 50<br/>
              </adress>
              </div>  
              </Col>

              <Col xs={12} sm={6} lg={6} className="d-flex align-items-stretch p-2 bg-white" >
              <div className="map">
              <iframe src="https://www.google.fr/maps/place/40+Rue+Laure+Diebold,+69009+Lyon/@45.7786657,4.796404,17z/data=!3m1!4b1!4m6!3m5!1s0x47f4eb65edac5b3f:0xe01c47049cb2e2b9!8m2!3d45.778662!4d4.7989789!16s%2Fg%2F11c24790th?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D">
               </iframe>
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

export default Contacts;
                     
               

