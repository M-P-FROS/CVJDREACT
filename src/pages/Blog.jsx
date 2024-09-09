import Header from '../assets/components/Header'
import Footer from '../assets/components/Footer'
import Banner from '../assets/components/Banner'



const Blog = () => {
    return (
        <section id="blog">
            <Header />
            <Banner/>
            <div className="entête">
            <h1 className='text-uppercase  text-center font-weight-bold'>blog</h1>
            <p className='text-center'> Retrouver ici quelques articles sur le développement web.</p>
            <hr className="w-50 mx-auto border border-primary bg-primary border-3 opacity-100"/>              
        </div>

        <div className='Blogcard'>
        <div className="row row-cols-1 row-cols-md-2  row-cols-lg-3 g-3">

  
          <div className="col mb-5">
      <div className="card h-100">
        <img src="/images/imgblog/coder.jpg" className="card-img-top" alt="image écran avec du code"/>
            <div className="card-body ">
                <h1 className="card-title">Coder son site en</h1>
                <h1 className='text-uppercase'>Html/Css</h1>
                <p className="card-text pb-5 mb-5">Some quick example text to build on the card title and make up the bulck of the card&apos;s content.</p>
                
                <div className='btn-rounded-sm'>
                <a href="https://getbootstrap.com/docs/4.0/components/card/" className="btn btn-primary btn-rounded  ">Lire la suite</a>
                </div>
            </div>            
          <div className="card-footer">
              <text className="text-muted">Publié le 22 août 2022</text>
          </div>
        </div>
        </div>

        <div className="col mb-5">
    <div className="card h-100">
      <img src="/images/imgblog/croissance.jpg" className="card-img-top" alt="Pile de pièce de monnaie"/>
          <div className="card-body ">
              <h1 className="card-title">vendre ses produits sur le web</h1>             
              <p className="card-text pb-5 mb-5">Some quick example text to build on the card title and make up the bulck of the card&apos;s content.</p>
             <br/>
             <div className='btn-rounded-sm'>
             <a href="https://getbootstrap.com/docs/4.0/components/card/" className="btn btn-primary">Lire la suite</a>
             </div>
            </div>            
          <div className="card-footer">
            <text className="text-muted">Publié le 20 août 2022</text>
          </div>
        </div>
        </div>

<div className="col mb-5">
    <div className="card h-100">
      <img src="/images/imgblog/google.jpg" className="card-img-top" alt="image écran avec le requeteur google"/>
          <div className="card-body ">
              <h1 className="card-title">Se positionner sur google</h1>
            <p className="card-text pb-5 mb-5">Some quick example text to build on the card title and make up the bulck of the card&apos;s content.</p>
             <br/>
             <div className='btn-rounded-sm'>
             <a href="https://getbootstrap.com/docs/4.0/components/card/" className="btn btn-primary">Lire la suite</a>
             </div>
            </div>            
          <div className="card-footer">
            <text className="text-muted">Publié le 1août 2022</text>
          </div>
        </div>
        </div>

        <div className="col mb-5">
    <div className="card h-100">
      <img src="/images/imgblog/screens.jpg" className="card-img-top" alt="image écran avec du code"/>
          <div className="card-body ">
              <h1 className="card-title">Coder en responsive design</h1>
              <h1 className='text-uppercase'>Html/Css</h1>
              <p className="card-text pb-5 mb-5">Some quick example text to build on the card title and make up the bulck of the card&apos;s content.</p>
             <br/>
             <div className='btn-rounded-sm'>
             <a href="https://getbootstrap.com/docs/4.0/components/card/" className="btn btn-primary">Lire la suite</a>
             </div>
            </div>            
          <div className="card-footer">
            <text className="text-muted">Publié le 31 juillet 2022</text>
          </div>
        </div>
        </div>

        <div className="col mb-5">
    <div className="card h-100">
      <img src="/images/imgblog/seo.jpg" className="card-img-top" alt="image grahique SEO avec des mots en lien avec le SEO"/>
          <div className="card-body ">
              <h1 className="card-title">Technique de référencement</h1>
              <p className="card-text pb-5 mb-5">Some quick example text to build on the card title and make up the bulck of the card&apos;s content.</p>
             <br/>
             <div className='btn-rounded-sm'>
             <a href="https://getbootstrap.com/docs/4.0/components/card/" className="btn btn-primary">Lire la suite</a>
             </div>
            </div>            
          <div className="card-footer">
            <text className="text-muted">Publié le 30 juillet 2022</text>
          </div>
        </div>
        </div>

        <div className="col mb-5">
    <div className="card h-100">
      <img src="/images/imgblog/technos.png" className="card-img-top" alt="mosaique avec tous les types de langage"/>
          <div className="card-body ">
              <h1 className="card-title">Apprendre à coder </h1>
               <p className="card-text pb-5 mb-5">Some quick example text to build on the card title and make up the bulck of the card&apos;s content.</p>
             <br/>
             <div className='btn-rounded-sm'>
             <a href="https://getbootstrap.com/docs/4.0/components/card/" className="btn btn-primary">Lire la suite</a>
             </div>
            </div>            
          <div className="card-footer">
            <text className="text-muted">Publié le 12 juillet 2022</text>
          </div>
        </div>
        </div>    

            </div>
           </div>
        <Footer/>
        </section>
    )
};

export default Blog;