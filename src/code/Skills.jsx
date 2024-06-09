import {Card,Col, Divider, Row} from "antd";

const boxStyles = {
    boxShadow: '4px 4px 2px 1px rgba(0, 0, 255, .2)',
    marginTop:16
  };

const tech = ["Node JS", "REACT JS", "Docker & Kubernetes", "Git & GitOps"];
const trans = ["Leadership", "Persévérance", "Communication"];
const langs = ["Français", "Anglais", "Russe", "Rumba"]
const Skills = () => {
    return ( 
       <Row gutter={16}>
         <Col lg={8} md={8}  xs={24}>
            <Divider>Techniques</Divider>
            {tech.map((item, index) => (
                <Card key={index} style={boxStyles}>
                <p><b>{item}</b></p>
            </Card>
            ))}
         </Col>
         <Col lg={8} md={8}  xs={24}>
            <Divider>Transverses</Divider>
            {trans.map((item, index) => (
                <Card key={index} style={boxStyles}>
                    <p><b>{item}</b></p>
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