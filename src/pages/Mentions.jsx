import Footer from '../assets/components/Footer';
import Header from '../assets/components/Header';

import Accordion from 'react-bootstrap/Accordion';

const Mentions = () => {
    return (
        
    <section id="mentions">
        <div className='d-flex flex-column' >
        <Header/>
        <div className='mt-5 pt-5'>

            <h1 className='text-center'>MENTIONS LEGALES</h1>
            <hr className="w-25 mx-auto border border-primary bg-primary border-1 opacity-100"/> 

         <Accordion defaultActiveKey="0">
                <Accordion.Item  eventKey="0">
                    <Accordion.Header>Editeur du site</Accordion.Header>
                    <Accordion.Body>
                            <h4>John DOE</h4>
                            <address className='pb-0 mb-0'>
                                40 rue Laure Diebold<br></br>
                                69009 Lyon, France         
                                </address>
                                <i className='fas fa-mobile-alt'>Tel : 06 20 30 40 50</i>
                                <br />
                                <a href="mailto:john.doe@gmail.com">mail: john.doe@gmail.com</a>                   
                            </Accordion.Body>
                            </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header>Hébergeur</Accordion.Header>
                    <Accordion.Body>
                    <a href="https://admin.alwaysdata.com/site/" target='_blank'>Always data</a>
                    </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                    <Accordion.Header>Crédits</Accordion.Header>
                    <Accordion.Body>
                    <p>Sité développé par John DOE, étudiant du CEF</p>
                    <br />
                    <p>Les images sont libres de droits issues du site <p className='text-primary'>PIXABAY</p></p> 
                    </Accordion.Body>
                    </Accordion.Item>                
                </Accordion>
                </div>                
                </div>
            <Footer/>
           </section>    
            
    );
};

export default Mentions;