const jobs = [
  {title:"Développeur fullstack", period:2024, company:"CANAL +", mission:``},
  {title:"Développeur fullstack", period:2023, company:"CANAL +", mission:``},
  {title:"Développeur fullstack", period:2022, company:"Cash flow Positif", mission:``},
  {title:"Apprentis DevOps", period:2021, company:"Softserve", mission:``}
]
const educations = [
  {title:"Master 2 Génie logiciel", period:2024, company:"Esiea", mission:``},
  {title:"Master 1 Génie logiciel", period:2023, company:"Esiea", mission:``},
  {title:"Bachelor Génie logiciel", period:2022, company:"Simon Kuznet, Kharkiv", mission:``},
  {title:"Bachelor Génie logiciel", period:2021, company:"Simon Kuznet, Kharkiv", mission:``}
]

const Timeline = (props) => {
  return (
    <div className="timeline">
    {props.items.map((item, index) => (
        <div className="timeline-wrapper" key={index}>
          <div className="timeline-yr">
          <span>{item.period}</span>
        </div>
        <div className="timeline-info">
          <h3>
            <span>{item.title}</span>
            <small>{item.company}</small>
          </h3>
          <p>
            {item.mission}
          </p>
        </div>
        </div>
    ))}
    </div>
  )
}
const Parcours = () => {
    return (  <section
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
      </section> );
}
 export default Parcours;