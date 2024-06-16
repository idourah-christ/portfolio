const jobs = [
  {
    title: "Ingénieur logiciel",
    period: 2024,
    company: "CANAL PLUS",
    mission: `
    Migration en Réact JS de l'application de gestion de test initialement conçue avec Backbone JS.
    Conteneurisation des applications pour préparer leur deploiement sur le cloud.`,
    stack: ["Node JS", "React JS", "Mongo DB", "Docker, Gitlab"],
    contract: "Alternant",
  },
  {
    title: "Ingénieur automatisation",
    period: 2023,
    company: "CANAL PLUS",
    mission: `
    Analyse des résultats des tests automatisés et redaction du rapport quotidient 
    destiné aux équipes d'intégration et de validation.
    `,
    stack: [" Power BI", " Javascript", " Mongo DB"],
    contract: "Alternant",
  },
  {
    title: "Intégrateur UI",
    period: 2022,
    company: "Cash flow Positif",
    mission: `Intégration en HTML, CSS des maquettes UI du CRM de la start-up.`,
    stack: ["Javascript ", "HTML ", "CSS"],
    contract: "Alternant",
  },
  {
    title: "",
    period: ".",
    company: "",
    mission: ``,
  },
];
const educations = [
  {
    title: "Master 2 Génie logiciel",
    period: 2024,
    company: "Esiea",
    mission: `Le rythme d'alternance, à savoir 3 jours en entreprise et 2 jours à l'école 
    m'a permis de bien avancer aussi bien sur les missions en entreprise que les projets à l'école.`,
  },
  {
    title: "Master 1 Génie logiciel",
    period: 2023,
    company: "Esiea",
    mission: `La philosophie d'une formation orientée projet adoptée par l'école, m'a permis de facilement mettre en pratique, les notions et concepts appris à l'école sur des projets en entreprise.`,
  },
  {
    title: "Bachelor Génie logiciel",
    period: 2022,
    company: "Simon Kuznet, Kharkiv",
    mission: (
      <div>
        <p>
          Le manque d'experience terrain des professeurs dans certains sujet,
          rendait impossible les discussions en profondeur de certains aspects
          techniques des cours.
        </p>

        <p>
          Le professeur était en général détenteur d'un doctorat ou d'une
          maîtrise dans un domaine de l'informatique mais n'avait jamais
          travaillé dans une entreprise IT.
        </p>
      </div>
    ),
  },
  {
    title: "",
    period: 2019,
    company: "",
    mission: ``,
  },
];

const Timeline = (props) => {
  return (
    <div className="timeline">
      {props.items.map((item, index) => (
        <div className="timeline-wrapper" key={index}>
          <div className="timeline-yr">
            <span>{item.period}</span>
          </div>
          <div className="timeline-info">
            <h4>
              <span>{item.title}</span>
              <small>{item.company}</small>
            </h4>
            <p>{item.mission}</p>
            {item.stack && (
              <p>
                <b>Stack:</b>
                {item.stack.map((tech) => (
                  <span>{tech},</span>
                ))}
              </p>
            )}
            {item.contract && (
              <p>
                <b>Statut: </b>
                {item.contract}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
const Parcours = () => {
  return (
    <section
      className="resume py-5 d-lg-flex justify-content-center align-items-center"
      id="parcours"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <h2 className="mb-4">Experiences</h2>
            <Timeline items={jobs} />
          </div>

          <div className="col-lg-6 col-12">
            <h2 className="mb-4 mobile-mt-2">Educations</h2>
            <Timeline items={educations} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Parcours;
