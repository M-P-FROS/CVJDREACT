import Header from '../assets/components/Header';
import '../sass/home.scss'





const Home = () => {
    return (
<section>
        <Header />
        <main>
            <section className='hero'>
            <img src="images/imghero/hero-bg.jpg" className="img-fluid" alt="informaticien sur son poste de travail...">
              </img>
            <h1 className='background-size:cover'>Bonjour, je suis John DOE</h1>
            <h2>Développeur full stack</h2>
            <button type="button" className="btn">En savoir plus</button>
            </section>
           
           <row className='hero2 col-sm-12 cl-md-6 col-lg-6'>
            <col className='apropos col-sm-12 cl-md-6 col-lg-6 p-2' >          
            </col>
            <h1> A propos</h1>
            <hr/>
            <h4>Passionné par l&posinformatique et les nouvelles technologies,
               j&apos;ai suivi une formation d&posintégrateur-développeur web au CEF.
               Au cours de cette formation, j&apos;ai pû acquérir des bases solides dans le domaine du développement web.
                </h4>
                <br/>
                <h4>
                  Basé à Lyon,je suis en recherche d&apos;sune alternance au sein d&posune agence digitale pour consolider
                  ma formation de développeur full stack.
                  </h4>
                  <br />
                  <h4>J&apos;accorde une attention particulière à la qualité du code que j&apos;écris
                     et je respecte les bonnes pratiques du web.</h4>
           
            <row className='mescompétences col-sm-12 cl-md-6 col-lg-6'>
           <img src="images/imgabout/john-doe-about.jpg" className='img-fluid' alt='photo de Jhon Doe, jeune homme barbu'>
           </img>
           <h1>Mes compétences</h1>
           <progress className='file ' max="100" value="90">90</progress>
           <label htmlFor='file' className='font-size=0.25vw' >html5 90%</label>

           <progress className='file'max="100" value="80">80</progress>
           <label htmlFor='file' className='text-uppercase' >css3 80%</label>

           <progress className='file'max="100" value="70">70</progress>
           <label htmlFor='file' className='text-uppercase' >javascript 70%</label>

           <progress className='file'max="100" value="60">60</progress>
           <label htmlFor='file' className='text-uppercase' >php 60%</label>

           <progress className='file'max="100" value="50">50</progress>
           <label htmlFor='file' className='text-uppercase' >react 50%</label>
            </row>
            </row>
               </main>

</section>



    );
};

export default Home;