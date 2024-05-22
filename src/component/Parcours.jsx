import { Link } from "react-router-dom";
import { Chrono } from "react-chrono";
import data from "./data";
import PageLayout from "../layouts/PageLayout";

const experiences = [
  {
    period: "2024-2025",
    title: "Fullstack software engineer",
    organisation: "CANAL PLUS GROUPE",
    description: "text",
  },
  {
    period: "2023-2024",
    title: "Fullstack software engineer",
    organisation: "CANAL PLUS GROUPE",
    description: "text",
  },
  {
    period: "2022-2023",
    title: "Fullstack software engineer",
    organisation: "CASH FLOW POSITIF",
    description: "text",
  },
];

const educations = [
  {
    period: "2023-2024",
    title: "Master 2 en Génie Logiciel",
    organisation: "ESIEA",
    description: "text",
  },
  {
    period: "2022-2023",
    title: "Master 1 en Génie Logiciel",
    organisation: "INTECH INFO",
    description: "text",
  },
  {
    period: "2018-2022",
    title: "Bachelor en Génie Logiciel",
    organisation: "CASH FLOW POSITIF",
    description: "text",
  },
];

const ParcourItem = ({ item }) => {
  return (
    <div className="parcour-container">
      <Link to="">
        <h4>{item.period}</h4>
      </Link>
      <h6>{item.title}</h6>
      <h6>{item.organisation}</h6>
      <p>{item.description}</p>
    </div>
  );
};

const Parcours = () => {
  return (
    <PageLayout>
      <section id="mu-service" style={{ paddingTop: "78px" }}>
        <div style={{ width: "100%" }}>
          <Chrono
            items={data}
            mode="VERTICAL_ALTERNATING"
            slideShow
            slideItemDuration={4500}
          />
        </div>
      </section>
    </PageLayout>
  );
};

export default Parcours;
