import Header from '../assets/components/Header'
import Footer from '../assets/components/Footer'
import Banner from '../assets/components/Banner';



const Realisations = () => {
    return (
        <section id="realisations">
            <Header/>
            <Banner/>
          <div className="entête text-center ">
            <h1 className='text-uppercase font-weight-bold pt-3 mt-3'>portfolio</h1>
            <p className='fs-4'> Voici quelques unes de mes réalisations</p>
            <hr className="w-25 mx-auto border border-primary bg-primary border-3 opacity-100"/>              
          </div>

        <div className='Realisationcard'>
        <div className="row row-cols-1 row-cols-md-2  row-cols-lg-3 g-4">

            <div className="col mb-5">
              <div className="card h-100">
                <img src="/images/imgportfolio/fresh-food.jpg" className="card-img-top" alt="assiette de légumes frais"/>
                    <div className="card-body text-center">
                      <h1 className="card-title ">Fresh food</h1>
                      <p className="card-text  fs-4">Réalisation d&apos;un site avec commande en ligne</p>
                      <a className='portfoliobtn btn text-primary mb-2' href="https://petitprimeur.fr/" >Voir</a>
                    </div>
                    <div className="card-footer text-center">
                      <text className="fs-4">Site réalisé avec PHP et MySQL</text>
                    </div>
              </div>
            </div>
  

          <div className="col mb-5">
            <div className="card h-100">
              <img src="/images/imgportfolio/restaurant-japonais.jpg" className="card-img-top" alt="assiette de suchi"></img>
              <div className="card-body text-center">
                <h1 className="card-title ">Restaurant Akira</h1>
                <p className="card-text fs-4">Réalisation d&apos;un site vitrine</p>
                <br className='fs-4'></br>
                <a className='portfoliobtn btn text-primary mb-2' href= "https://www.sushishop.fr/fr/livraison/maki/" >Voir</a>
                </div>
                <div className="card-footer text-center">
                <text className="fs-4">Site réalisé avec WordPress</text>
              </div>
            </div>
            </div>
  
          <div className="col mb-5">
            <div className="card h-100">
              <img src="/images/imgportfolio/espace-bien-etre.jpg" className="card-img-top" alt="espace de bien être"/>
              <div className="card-body text-center">
                <h1 className="card-title ">Espace de bien-être</h1>
                <p className="card-text fs-4">Réalisation d&apos;un site vitrine pour un praticien du bien-être</p>
                <a className='portfoliobtn btn text-primary mb-2' href= "https://espacedetentesante.fr/" >Voir</a>
              </div>
              <div className="card-footer text-center">
                <text className="fs-4">Site réalisé en HTML/CSS</text>
              </div>
            </div>
          </div>
        </div>
        </div>
<Footer/>
        </section>
    );
};

export default Realisations;