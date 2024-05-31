import profile from "../assets/images/portfolio/profile.jpg"
const text = ` Passionné d’informatique, des nouvelles technologies et de la
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
avec des sonorités africaines.`

const Banner = () => {
  return (
    <section id="mu-featured-slider">
      <div className="container" style={{padding:"50px"}}>
        <div className="row">
          <div className="col-xs-12 d-flex col-md-3 justify-content-center">
          <img src={profile} alt="profile" id="profile" />
          </div>
          <div className="col-xs-12 col-md-9">
          <p className="text-start text-white">
             {text}
           </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
