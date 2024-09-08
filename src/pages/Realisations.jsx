import Header from '../assets/components/Header'
import Footer from '../assets/components/Footer'
import Banner from '../assets/components/Banner';



const Realisations = () => {
    return (
        <section id="realisations">
                     <Header/>
            <Banner/>
          <div className="entête text-center ">
            <h1 className='text-uppercase font-weight-bold'>porfolio</h1>
            <p> Voici quelques unes de mes réalisations</p>
            <hr className="w-25 mx-auto border border-primary bg-primary border-3 opacity-100"/>              
        </div>

        <div className='Realisationcard'>
        <div className="row row-cols-1 row-cols-md-2  row-cols-lg-3 g-4">

  <div className="col mb-5">
    <div className="card h-100">
      <img src="/images/imgportfolio/fresh-food.jpg" className="card-img-top" alt="asiette de légumes frais"/>
          <div className="card-body text-center">
              <h1 className="card-title ">Fresh food</h1>
              <p className="card-text pb-5 mb-5">Réalisation d&apos;un site avec commande en ligne</p>
             <div className=' btn-rounded-sm'>
              <a href="https://petitprimeur.fr/" className="btn btn-primary bg-transparent text-primary stretched-link">Voir</a>
              </div>
          </div>
          <div className="card-footer text-center">
            <text className="text-muted">Site réalisé avec PHP et MySQL</text>
          </div>
    </div>
    </div>

  <div className="col mb-5">
    <div className="card h-100">
      <img src="/images/imgportfolio/restaurant-japonais.jpg" className="card-img-top" alt="asiette de suchi"></img>
      <div className="card-body text-center">
        <h1 className="card-title ">Restaurant Akira</h1>
        <p className="card-text pb-5 mb-5">Réalisaation d&apos;un site vitrine</p>
        <div className=' btn-rounded-sm'>
              <a href="https://www.sushishop.fr/fr/livraison/maki/" className="btn btn-primary bg-transparent text-primary ">Voir</a>
              </div>
      </div>
      <div className="card-footer text-center">
        <text className="text-muted">Site réalisé avec WordPress</text>
      </div>
    </div>
    </div>


  <div className="col mb-5">
    <div className="card h-100">
      <img src="/images/imgportfolio/espace-bien-etre.jpg" className="card-img-top" alt="espace de bien être"/>
      <div className="card-body text-center">
        <h1 className="card-title ">Espace de bien-être</h1>
        <p className="card-text pb-5 mb-5">Réalisation d&apos;un site vitrine pour un praticien du bien-être</p>
        <div className=' btn-rounded-sm pt-3       '>
              <a href="https://espacedetentesante.fr/" className="btn btn-primary bg-transparent text-primary ">Voir</a>
              </div>
      </div>
      <div className="card-footer text-center">
        <text className="text-muted ">Site réalisé en HTML/CSS</text>
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