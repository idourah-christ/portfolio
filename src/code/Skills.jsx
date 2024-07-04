import {Card,Col, Divider, Row} from "antd";
import { useNavigate } from "react-router-dom";

const boxStyles = {
    boxShadow: '4px 4px 2px 1px rgba(0, 0, 255, .2)',
    marginTop:16
  };

const tech = [{label:"Node JS", link:"/articles/bcrypt"}, {label:"REACT JS", link:"/articles/react-js"}, {label:"DevOps", link:"/articles/jwt"}];
const trans = [{label:"Ledearship", link:"/articles/leadership"}, {label:"Persévérance",link:"/articles/autonomie"}, {label:"Communication", link:"/competences"}];
const langs = ["Français", "Anglais", "Russe"]

const Skills = () => {
  const navigate = useNavigate();

    const handleCardClicked = (link) => {
      navigate(link)
    }
    return ( 
       <Row gutter={16}>
         <Col lg={8} md={8}  xs={24}>
            <Divider>Techniques</Divider>
            {tech.map((item, index) => (
                <Card key={index}  hoverable onClick={() => handleCardClicked(item.link)} style={boxStyles}>
                <p><b>{item.label}</b></p>
            </Card>
            ))}
         </Col>
         <Col lg={8} md={8}  xs={24}>
            <Divider>Transverses</Divider>
            {trans.map((item, index) => (
                <Card  hoverable key={index} onClick={() => handleCardClicked(item.link)} style={boxStyles}>
                    <p><b>{item.label}</b></p>
                </Card>
            ))}
         </Col>
         <Col xs={24} lg={8} md={8} >
            <Divider>Langues et hobbies</Divider>
            {langs.map((item, index) => (
                <Card key={index} style={boxStyles}>
                <p><b>{item}</b></p>
            </Card>
            ))}
         </Col>
       </Row>
     );
}
 
export default Skills;