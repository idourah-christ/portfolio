const Banner = () => {
  return (
    <section id="mu-featured-slider">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="mu-featured-area">
              <h1>Qui suis-je ?</h1>
              <div class="mu-featured-slider-wrapper">
                <div class="mu-featured-slider" id="typed-strings">
                  <p></p>
                </div>
                <span id="typed"></span>
              </div>

              <div class="mu-featured-content">
                <p className=" fs-5 lh-lg text-start">
                  Passionné d’informatique, des nouvelles technologies et de la
                  transformation numérique. J’aime travailler sur la conception
                  des logiciels de toute taille, car la rigueur et la discipline
                  que ça implique sont des valeurs que j’incarne au quotidien.
                  Actuellement employé chez CANAL+ au poste de développeur
                  logiciel, ma mission consiste à concevoir des outils logiciels
                  à usage internes. Père d’une petite fille au nom de Kinya qui
                  m’attend chaque soir quand je rentre du travail, j’aime passer
                  du temps avec ma famille le week-end. Au travail comme à la
                  maison j’aime écouter de la Rumba, un style de musique
                  originaire de Cuba qui mélange rythmes et mélodies cubaines
                  avec des sonorités africaines.
                </p>
                <a href="#mu-portfolio" class="mu-primary-btn view-my-work-btn">
                  DOWNLOAD CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
