import Header from '../assets/components/Header'
import Footer from '../assets/components/Footer'
import Banner from '../assets/components/Banner';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Realisations = () => {
    return (
        <section id="realisations">
            <Header/>
            <Banner/>
          <div className="entête text-center ">
            <h1 className='text-uppercase font-weight-bold'>porfolio</h1>
            <p> Voici quelques unes de mes réalisations</p>
            <hr className="w-25 mx-auto border border-primary border-3 opacity-100"/>              
        </div>

        <div className='Realisationcard'>
            <Row xs={1} md={2}  lg={3} className="g-4">
      
      
      
      {Array.from({ length: 1 }).map((_, idx) => (
       
       <Col key={idx}>
          <Card>
            <Card.Img variant="top" src="images/imgportfolio/fresh-food.jpg" />
            <Card.Body>
              <Card.Title className='text-center'>
                <h3>Fresh food</h3>
              </Card.Title>
              <Card.Text>
               Realisation d&apos;un site avec commande en ligne
              </Card.Text> 
              <Card.Text className='bascard text-center'>
               Site réalisé avec PHP et MySQL
              </Card.Text>  
              <Button variant="outline-primary">Primary</Button>{' '}                 
              </Card.Body>    
              </Card>
          
            
              <Card>
              <Card.Img variant="top" src="images/imgportfolio/restaurant-japonais.jpg" />
              <Card.Body>
              <Card.Title className='text-center'>
                <h3>Restaurant AKIRA</h3>
              </Card.Title>
              <Card.Text>
               Realisation d&apos;un site avec commande en ligne
              </Card.Text>                          
              <Card.Text className='bascard text-center'>
               Site réalisé avec PHP et MySQL
              </Card.Text>         
              </Card.Body>
              </Card>
              

              <Card>
            <Card.Img variant="top" src="images/imgportfolio/espace-bien-etre.jpg" />
            <Card.Body>
              <Card.Title className='text-center'>
                <h3>Espace bien-être</h3>
              </Card.Title>
              <Card.Text>
               Realisation d&apos;un site avec commande en ligne
              </Card.Text>                                   
              <Card.Text className='bascard text-center'>
               Site réalisé avec PHP et MySQL
              </Card.Text>             
              </Card.Body>
              </Card>
           
        </Col>
      ))}
    </Row>
    </div>
<Footer/>
        </section>
    );
};

export default Realisations;