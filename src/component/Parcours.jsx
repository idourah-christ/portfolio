import { Link } from "react-router-dom";

const experiences = [
    {
        period:"2024-2025",
        title:"Fullstack software engineer",
        organisation:"CANAL PLUS GROUPE",
        description:"text"
    },
    {
        period:"2023-2024",
        title:"Fullstack software engineer",
        organisation:"CANAL PLUS GROUPE",
        description:"text"
    },
    {
        period:"2022-2023",
        title:"Fullstack software engineer",
        organisation:"CASH FLOW POSITIF",
        description:"text"
    }
]

const educations = [
    {
        period:"2023-2024",
        title:"Master 2 en Génie Logiciel",
        organisation:"ESIEA",
        description:"text"
    },
    {
        period:"2022-2023",
        title:"Master 1 en Génie Logiciel",
        organisation:"INTECH INFO",
        description:"text"
    },
    {
        period:"2018-2022",
        title:"Bachelor en Génie Logiciel",
        organisation:"CASH FLOW POSITIF",
        description:"text"
    }
]


const ParcourItem  = ({item}) => {
    return ( 
        <div className="parcour-container">
            <Link to=""><h4>{item.period}</h4></Link>
            <h6>{item.title}</h6>
            <h6>{item.organisation}</h6>
            <p>{item.description}</p>
        </div>
    );
}


const Parcours = () => {
    return ( <section id="mu-service">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="mu-service-area">
                    <div className="mu-service-header">
                        <h2 className="mu-heading-title">MON PARCOURS</h2>
                        <span className="mu-header-dot"></span>
                    </div>
                </div>
            </div>
        </div>
        <div classNameName="row">
            <div className="col-md-6">
                <h6>Experiences</h6>
               {experiences.map(item => (
                 <ParcourItem item={item} />
               ))}
            </div>
            </div>
            <div className="col-md-6">
                <h6>Formations</h6>
            {educations.map(item => (
                 <ParcourItem item={item} />
               ))}  
            </div>
    </div>
</section> );
}
 
export default Parcours;