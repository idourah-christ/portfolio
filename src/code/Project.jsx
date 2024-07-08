import { Card, Col, Row } from "antd";
import compilerImage from "./images/compiler.png";
import backboneImage from "./images/backbone-js.jpeg";
import { useNavigate } from "react-router-dom";
import rxvalid from "./images/rxvalid.png";

const { Meta } = Card;
const boxStyles = {
  boxShadow: "4px 4px 6px 1px rgba(0, 0, 255, .2)",
  minHeight:200,
  height:280
};
export const ProjectCard = (props) => {
  return (
    <Card
      {...props}
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
  const navigate = useNavigate();

  const handleOnClick = (link) => {
    navigate(link);
  };
  return (
    <Row gutter={16} style={{ paddingTop: 20 }}>
      <Col lg={8} md={8} xs={24}>
        <ProjectCard
          style={boxStyles}
          src={rxvalid}
          meta={{ title: "Rxvalid " }}
          onClick={() => handleOnClick("/articles/rxvalid")}
        />
      </Col>
      <Col lg={8} md={8} xs={24}>
        <ProjectCard
          style={boxStyles}
          src={compilerImage}
          meta={{
            title: "Un compilateur en C++ ....",
          }}
          onClick={() => handleOnClick("/articles/compiler")}
        />
      </Col>
      <Col lg={8} md={8} xs={24}>
        <ProjectCard
          style={boxStyles}
          src={backboneImage}
          meta={{ title: "Je decouvre Backbone JS" }}
          onClick={() => handleOnClick("/articles/notg-deploy")}
        />
      </Col>
    </Row>
  );
};

export default Project;
