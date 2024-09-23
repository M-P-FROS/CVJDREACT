import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';


const Footer = () => {
    
    return (
    <section className='footer d-flex flex row'>
    <Container className='bg-light text-dark '>
          <Row >
          <Col sm={12} md={6} lg={3}>
                <h4 className='mt-3'>John DOE</h4>
                <address >
                    40 rue Laure Diebold<br></br>
                  <br />
                    69009 Lyon, France         
                    </address>               
                    <i className='fas fa-mobile-alt'>Tel : 06 20 30 40 50</i>

                <Row>
                    <Col className='d-flex justify-content-start'>
                    <a href="https://github.com/github-john-doe" target='_blank'>
                    <img src="/images/github.jpg" className='image-fluid  mt-2 mx-2' alt="icon github" size='sm'/></a>
                    <a href="https://twitter.com/" target='_blank'>
                    <img src="/images/twitter.jpg" className='image-fluid mt-2 mx-2' alt="icon github" size='sm'/></a>
                    <a href="https://fr.linkedin.com/in/john-doe-1932141a3?trk=people-guest_people_search-card/" target='_blank'>
                    <img src="/images/linkedin.jpg"  className='image-fluid mt-2 mx-2' alt="icon github" size='sm'/></a>
                    </Col>
                </Row>
          </Col>    

          <Col sm={12} md={6} lg={3}>
                <h4 className='mt-3'>Liens utiles</h4>
                <Nav defaultActiveKey="/home" className="flex-column">
                <ul>
                <li><Nav.Link className='text-dark' href="/">Accueil</Nav.Link></li>
                <li><Nav.Link className='text-dark' href="/">A propos</Nav.Link></li>
                <li><Nav.Link  className='text-dark'href="/services">Services</Nav.Link></li>
                <li><Nav.Link  className='text-dark'href="/contacts">Me contacter</Nav.Link></li>
                <li><Nav.Link className='text-dark' href="/mentions">Mentions légales</Nav.Link></li>
                </ul>
                </Nav>         
          </Col>
      
             

         <Col sm={12} md={6} lg={3}>
              <h4 className='mt-3'>Mes réalisations</h4>
              <ul className='mt-3'>
              <li className='mb-3' > 
              <a href="https://petitprimeur.fr/" target="_blank" className='text-dark text-decoration-none'>Fresh food</a>
              </li>
              <li className='mb-3'> 
              <a href= "https://www.sushishop.fr/fr/livraison/maki/" target="_blank" className='text-dark text-decoration-none '>Restaurant Akira</a>
              </li>
              <li className='mb-3'> 
              <a href= "https://espacedetentesante.fr/" target="_blank" className='text-dark text-decoration-none '>Espace bien-être</a>
              </li>
              </ul>
        </Col>

          <Col sm={12} md={6} lg={3}>
              <h4 className='mt-3'>Mes derniers articles</h4>
              <Nav defaultActiveKey="/home" className="flex-column">
              <ul>
                <li className='mb-3' > 
                <a href="https://getbootstrap.com/docs/4.0/components/card/" className='text-dark text-decoration-none'>Coder son site en HTML/CSS</a>
                </li>
                <li className='mb-3'> 
                <a href="https://getbootstrap.com/docs/4.0/components/card/" className='text-dark text-decoration-none '>Vendre ses produits sur le site WEB</a>
                </li>
                <li className='mb-3' > 
                <a href="https://getbootstrap.com/docs/4.0/components/card/" className='text-dark text-decoration-none '>Se positionner sur google</a>
                </li>
            </ul>
        </Nav>
        </Col>
    </Row>

        <Row>
            <Col className='bg-dark text-light text-center p-4'>
              <p>
              <img src="./images/copyright.jpg" alt="copyright"/>
                Designed by John DOE </p>
              </Col>
        </Row>
        </Container>
      </section>
    );
  }
  
 
  
   

export default Footer;