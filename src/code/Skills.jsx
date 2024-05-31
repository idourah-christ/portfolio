import {Carousel} from "antd";
import image from "./images/project/project-image01.png"
import { ProjectCard } from "./Project";

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

const Skills = () => {
    return ( 
        <Carousel>
            <ProjectCard style={contentStyle} src={image}  meta={{title:"Rxvalid ", description:"link to the project"}}/>
            <ProjectCard style={contentStyle}  src={image}  meta={{title:"Patience ", description:"link to the project"}}/>
            <ProjectCard style={contentStyle}  src={image}  meta={{title:"Node js ", description:"link to the project"}}/>
            <ProjectCard style={contentStyle}  src={image}  meta={{title:"React ", description:"link to the project"}}/>
        </Carousel>
     );
}
 
export default Skills;