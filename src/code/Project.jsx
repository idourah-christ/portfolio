import {Card, Col, Row} from "antd";
import image from "./images/project/project-image01.png"

const {Meta} = Card;

export const ProjectCard = (props) => {
    return (
        <Card hoverable style={props.style} title={props.title} cover={<img alt={props.alt} src={props.src} />}>
            <Meta title={props.meta.title} description={props.meta.description} />
        </Card>
    )
  
}
const Project = () => {
    return ( 
        <Row gutter={16} style={{paddingTop:20}}>
            <Col span={8}>
                <ProjectCard src={image}  meta={{title:"Rxvalid ", description:"link to the project"}}/>
            </Col>
            <Col span={8}>
                <ProjectCard src={image}  meta={{title:"Mobembo+", description:"link to the project"}}/>
            </Col>
            <Col span={8}>
                <ProjectCard src={image}  meta={{title:"Mobembo+", description:"link to the project"}}/>
            </Col>
        </Row>
    );
}
 
export default Project;