import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import {Card, Col, Layout, Row} from "antd";
import hashing from "./images/hashing.png";
import dockerReact from "./images/docker-react.png";
import jwt from "./images/jwt.png";
import leadership from "./images/leadership.jpg"
import trip from "./images/trip.jpg";
import jackson from "./images/jackson.jpg";
import lacAnnecy from "./images/lacAnnecy.jpg";
import alternance from "./images/alternance.png"

const {Meta} = Card;
const {Content} = Layout;

const imageStyle = {
    border:"1px solid rgba(0, 0, 255, .2)",
    borderBottom:"0px",
    
}
const cardStyle = {
  marginTop:30,
  boxShadow: '12px 12px 2px 1px rgba(0, 0, 255, .2)',
  border:"1px solid rgba(0, 0, 255, .2)",
  minHeight:300,
  maxHeight:460
}
export const ArticleCard = (props) => {
    return (
      <Card {...props} hoverable style={props.style} title={props.title} cover={<img style={props.meta.style} alt={props.alt} src={props.src} />}>
      <Meta title={props.meta.title} description={props.meta.description} />
     </Card>
    ) 
}



const Nav = (props) => {
    return (
    <ul className="navbar-nav mx-auto">
      {props.items.map((item, index) =>(
        <li className="nav-item" key={index}>
        <Link to={item.to} className="nav-link">
          <span data-hover={item.label} >{item.label}</span>
        </Link>
      </li> 
      ))}
    </ul>
  )
}

const articles = [
  {
    title:"Sécuriser les mots de passe utilisateurs avec Bcrypt", 
    image:hashing, 
    text:`La sécurité des mots de passe est une préoccupation importante pour
      toute application web. Une bonne pratique consiste à ne jamais
      stocker les mots de passe en clair, mais plutôt de les hacher avant
      de les enregistrer dans une base de données.`,
    to:"bcrypt"
  },
  {title:"Dans la peau d'un leader", image:leadership},
  {title:"Comment j'ai appris l'anglais", image:jackson},
  {
    title:"Signature et Chiffrement des données avec JWT", 
    to:"jwt",
    image:jwt, text:`Dans le développement web moderne, les JSON Web Tokens (JWT) sont devenus un standard populaire pour l'authentification et l'autorisation.`
  },
  {
    title:"Déployer votre application React  avec Docker et Nginx", 
    image:dockerReact, 
    text:`Le déploiement d’une application avec docker est devenu une
      compétence incontournable dans le monde du développement logiciel.`,
    to:"react-js"
  },
  
  {title:"Un voyage qui a tout changé", image:trip},
  {title:"Une histoire qui commence, Un chapitre se ferme", image:lacAnnecy},
  {title:"Un stage pour une alternance chez Canal+", image:alternance}
]

const navItems = [{to:"/", label:"About"}, {to:"/articles", label:"Articles"}];

export const ArticleLayout = (props) => {
  return (
    <Layout {...props}>
       <Header>
            <Nav items={navItems}/>
        </Header>
        <Content>
          {props.children}
        </Content>
    </Layout>
  )
}
const Articles = () => {
  
  const navigate = useNavigate();

  const isEven = (index) => {
    return index % 2 === 0
  };  
  
  const handleCardClick = (link) => {
    if(link){
      navigate(`/articles/${link}`)
    }
    
  }
  return ( 
    <ArticleLayout>
        <Row justify="center" style={{padding:16}}>
            {articles.map((article, index) => (
                isEven(index) ? 
                (<Col span={10} key={index}  xs={24}>
                  <ArticleCard onClick={() => handleCardClick(article?.to)} style={cardStyle}  src={article?.image}  key={index} meta={{title:article.title, style:imageStyle, description:article?.text}}/>
                </Col>) : 
                (<Col span={10} key={index} xs={24} style={{marginLeft:25}}>
                  <ArticleCard onClick={() => handleCardClick(article?.to)}  style={cardStyle}    src={article?.image}  key={index} meta={{title:article.title, style:imageStyle, description:article?.text}}/>
                </Col>)
            ))}
        </Row>
    </ArticleLayout>
    );
}
 
export default Articles;