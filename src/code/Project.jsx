import { Card, Col, Row } from "antd";
import image from "./images/project/project-image01.png";

const { Meta } = Card;
const boxStyles = {
  boxShadow: "8px 8px 2px 1px rgba(0, 0, 255, .2)",
};
export const ProjectCard = (props) => {
  return (
    <Card
      hoverable
      style={props.style}
      title={props.title}
      cover={<img alt={props.alt} src={props.src} />}
    >
      <Meta title={props.meta.title} description={props.meta.description} />
    </Card>
  );
};
const Project = () => {
  return (
    <Row gutter={16} style={{ paddingTop: 20 }}>
      <Col lg={8} md={8} xs={24}>
        <ProjectCard
          style={boxStyles}
          src={image}
          meta={{ title: "Rxvalid ", description: "link to the project" }}
        />
      </Col>
      <Col lg={8} md={8} xs={24}>
        <ProjectCard
          style={boxStyles}
          src={image}
          meta={{
            title: "Compilateur en C++",
            description: "link to the project",
          }}
        />
      </Col>
      <Col lg={8} md={8} xs={24}>
        <ProjectCard
          style={boxStyles}
          src={image}
          meta={{ title: "NotG deploy", description: "link to the project" }}
        />
      </Col>
    </Row>
  );
};

export default Project;
