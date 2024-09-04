import Header from '../assets/components/Header'
import Banner from '../assets/components/Banner';
import Footer from '../assets/components/Footer';


const Services = () => {
    return (
        <section id="services">
            <Header/>
            <Banner/>
           
            <h1  className='text-center'>MON OFFRE DE SERVICES</h1>
            <h3 className='text-decoration-underline link-underline-primary text-center'>Voici les prestations sur lesquelles je peux intervenir.</h3>
            <div className="container">
            <div className="d-flex justify-content-between m-4">
                
                <div className="p-1 mx-3 bg-white">
                <div className="col-sm-12 col-md-6 col-lg-6 mx-auto align-items-center">
                <img src="images/imgservices/imgecran.jpg" className='img-fluid' alt='icone d un ecran ordinateur'/>
                <h2 className='text-uppercase m-auto'>UX DESIGN</h2>
                <p>L&apos;<strong>UX Design</strong> est une méthode de conception centré sur l&apos;utilisateur.
                Son but est d&apos;offrir  une expérience de navigation optimale à l&apos;internaute</p>
                </div>           
                </div>
                
                <div className="p-1 mx-3 bg-white">
                <div className="col-sm-12 col-md-6 col-lg-6 mx-auto align-items-center">
                <img src="images/imgservices/imgdevelop.jpg" className='img-fluid' alt='icone de fichier ordinateur'/>
                <h2 className='text-uppercase m-auto'>développement WEB</h2>
                <p>Le <strong>développement de sites web</strong> repose sur l&apos;utilisation des langages HTML, CSS,Javascript, et PHP.</p>
                </div>
                </div>

                <div className="p-1 mx-3  bg-white">
                <div className="col-sm-12 col-md-6 col-lg-6 mx-auto align-items-center">
                <img src="images/imgservices/imgref.jpg" className='img-fluid' alt='loupe incluant un dollard'/>
                    <h2 className='text-uppercase m-auto'>référencement</h2>
                    <p>Le <strong>Référencement naturel d&apos;un site</strong> , aussi appélé SEO, consiste à mettre en oeuvre pour
                    améliorer sa position dans les résultats des motaeurs de recherche.</p>
                    </div>
                
                    </div>
            </div>
            </div>
          
            <Footer/>
        </section>
    );
};

export default Services;