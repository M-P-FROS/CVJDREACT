import Header from '../assets/components/Header';
import '../sass/home.scss'
import { ProgressBar } from 'react-bootstrap';
import Footer from '../assets/components/Footer'





const Home = () => {
    return (
<section>
        <Header />
        <main>
          <div className='hero'>
          <img src="images/imghero/hero-bg.jpg" className="img-fluid" alt="informaticien sur son poste de travail..."/>
            <h1 className='background-size:cover'>Bonjour, je suis John DOE</h1>
          <h2>Développeur full stack</h2>
          <button type="button" className="btn">En savoir plus</button>
          </div>
           
          <div  className='hero2'>
                <div className='contenair justify-content-between'>
                        <div className='row'>
                        <div className='col-sm-12 col-md-6 col-lg-6 m-2'>
                        <div className='apropos'>     
                        <h2 className='border-bottom border-primary'> A propos</h2>
                        <p>Passionné par l&apos;informatique et les nouvelles technologies,
                          j&apos;ai suivi une formation <strong> intégrateur-développeur web</strong>au CEF.
                          Au cours de cette formation, j&apos;ai pû acquérir des bases solides dans le domaine du <strong>développement web </strong>.
                          <br></br>
                          Basé à Lyon,je suis en recherche d&apos;une alternance au sein d&apos;une agence digitale pour consolider
                          ma formation de <strong>développeur full stack</strong>.
                          <br></br>                
                        J&apos;accorde une attention particulière à la qualité du code que j&apos;écris
                          et je respecte les bonnes pratiques du web.</p>
                          </div>
                        </div>
                        </div>
              
                    <div className='contenair row'>
                    <div className=' col-sm-12 col-md-6 col-lg-6  m-2'>
                    <div className='mescompétences'>
                      <img src="images/imgabout/john-doe-about.jpg" className='img-fluid' alt='photo de Jhon Doe, jeune homme barbu'/>
                      <h2>Mes compétences</h2>
                      <div>
                      <p className='text-uppercasemy-1 '>HTML5   90 %</p>
                      <ProgressBar variant="danger" now={90} />
                      <p className='text-uppercase my-1'>Css3   80%</p>
                      <ProgressBar variant="info" now={80} />
                      <p className='text-uppercase my-1'>Javascript 70%</p>
                      <ProgressBar variant="warning" now={70} />
                      <p className='text-uppercase my-1'>PHP   70%</p>
                      <ProgressBar variant="success" now={60} />
                      <p className='text-uppercase my-1'>React   60%</p>                                         
                      <ProgressBar variant="primary " now={50} />
                    </div>
                      </div>
                    </div>
                    </div>
                </div>
          </div>
        <Footer/>
       </main>
</section>



    );
};

export default Home;