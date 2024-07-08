import reactArticle from "../text/react";
import Dockerfile from "../../assets/images/portfolio/article/react/Dockerfile.png";
import nginxConfig from "../../assets/images/portfolio/article/react/nginxConfig.png";
import DockerRunImg from "../../assets/images/portfolio/article/react/DockerRun.png";

import {
  Article,
  ArticleHeader,
  ArticleBlock,
  ArticleImage,
  ArticleParagraphe,
  UnOrderList,
  OrderList,
} from "../../component/Article";


const ReactArticle = () => {
  return (
    <Article>
      <ArticleHeader header={reactArticle.header}>
        <div className="article-abstract">
          <ArticleParagraphe>
            {reactArticle.header.abstract.text}
          </ArticleParagraphe>
          <OrderList>
            <li>Standardisation et Portabilité</li>
            <li>Efficacité de déploiement </li>
            <li>Scalabilité et gestion de ressources</li>
            <li>Cohérence et Répétabilité</li>
            <li>Sécurité et isolation</li>
          </OrderList>
        </div>
        <div className="article-plan">
          <h5 className="article-plan-title">Table des matières</h5>
          <OrderList>
            {reactArticle.header.plan.map((item, index) => (
              <li key={index} className="list-item">
                {item}
              </li>
            ))}
          </OrderList>
        </div>
      </ArticleHeader>
      <div className="article-body">
        <ArticleBlock title="1. Introduction">
          <ArticleParagraphe>
            Déployer une application web peut sembler intimidant, mais en
            utilisant Docker et Nginx, nous pouvons simplifier grandement ce
            processus. Docker nous permet de créer des environnements isolés et
            reproductibles pour notre application, tandis que Nginx peut servir
            notre application en tant que serveur web performant
          </ArticleParagraphe>
        </ArticleBlock>

        <ArticleBlock title="2. Prérequis">
          <ArticleParagraphe>
            Avant de commencer, assurez-vous d'avoir les éléments suivants
            installés sur votre machine :
          </ArticleParagraphe>
          <UnOrderList>
            <li className="list-item">- Node.js et npm</li>
            <li className="list-item">- Docker et Docker Compose</li>
            <li className="list-item">
              - Votre projet React JS que vous souhaitez déployer
            </li>
          </UnOrderList>
        </ArticleBlock>

        <ArticleBlock title="3. Configuration du fichier Dockerfile">
          <ArticleParagraphe>
            Nous allons maintenant créer un fichier Docker file à la racine de
            notre projet React. Ce fichier contiendra les instructions pour
            construire notre image Docker.
          </ArticleParagraphe>
          <ArticleImage
            style={{ width: "700px", height: "700px" }}
            src={Dockerfile}
          />
          <ArticleParagraphe>
            Dans ce fichier Dockerfile nous utilisons une fonctionnalité très
            puissante de docker appelée docker multi-stage. Le docker multi
            stage nous permet de créer des dockers plus petites et plus
            efficaces en utilisant plusieurs étapes de build dans un seul
            Dockerfile. Nous commençons par construire notre application React
            avec la commande npm run build afin de générer les fichiers
            statistiques de notre application web. Ensuite nous copions le
            contenu du dossier build dans le répertoire{" "}
            <b>/usr/share/nginx/html.</b>
          </ArticleParagraphe>
        </ArticleBlock>

        <ArticleBlock title="4. Création du fichier de configuration Nginx">
          <ArticleParagraphe>
            Nous devons également créer un fichier nginx.conf à la racine de
            notre projet pour configurer Nginx :
          </ArticleParagraphe>
          <ArticleImage src={nginxConfig} style={{ width: "700px" }} />
          <ArticleParagraphe>
            Ce fichier indique à Nginx de servir les fichiers statiques de notre
            application React et de rediriger toutes les demandes vers
            index.html.
          </ArticleParagraphe>
        </ArticleBlock>

        <ArticleBlock title="5. Contruction et exécution de l'image docker">
          <ArticleParagraphe>
            Avec le Dockerfile et le fichier de configuration Nginx en place,
            nous pouvons maintenant construire notre image Docker et exécuter un
            conteneur.
          </ArticleParagraphe>
          <ArticleImage src={DockerRunImg} style={{ width: "700px" }} />
          <ArticleParagraphe>
            Accédez à `http://localhost` dans votre navigateur, et vous devriez
            voir votre application React en cours d'exécution.
          </ArticleParagraphe>
        </ArticleBlock>

        <ArticleBlock title="6. Conclusion">
          <ArticleParagraphe>
            Nous avons maintenant une application React fonctionnant dans un
            conteneur Docker et servie par Nginx. Cette configuration permet un
            déploiement simple et efficace, et peut être facilement adaptée pour
            être déployée sur n'importe quel service d'hébergement compatible
            avec Docker.
          </ArticleParagraphe>
        </ArticleBlock>
      </div>
    </Article>
  );
};

export default ReactArticle;
