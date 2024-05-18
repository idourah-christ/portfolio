import ArticleLayout from "../../ArticleLayout";
import reactArticle from "../text/react";

const Article = (props) => {
  return (
    <ArticleLayout>
      <article>{props.children}</article>
    </ArticleLayout>
  );
};

const ArticleHeader = ({ header }) => {
  return (
    <div className="article-header">
      <h3 className="artcle-title">{header.title}</h3>
      <div className="article-abstract">
        <ArticleParagraphe>{header.abstract.text}</ArticleParagraphe>
      </div>
      <div className="article-plan">
        <h5 className="article-plan-title">Table des matières</h5>
        <ol>
          {header.plan.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

const ArticleParagraphe = (props) => {
  return (
    <p
      className="article-paragraphe"
      {...props}
      style={{ fontSize: "18px", textAlign: "justify" }}
    >
      {props.children}
    </p>
  );
};
const ArticleBlock = (props) => {
  return (
    <div className="article-block" {...props} style={{ marginBottom: "14px" }}>
      <h6 className="article-block-title">{props.title}</h6>
      <section className="article-block-content">{props.children}</section>
    </div>
  );
};
const ReactArticle = () => {
  return (
    <Article>
      <ArticleHeader header={reactArticle.header} />
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
          <ul className="article-unorder-list">
            <li className="article-">- Node.js et npm</li>
            <li>- Docker et Docker Compose</li>
            <li>- Votre projet React JS que vous souhaitez déployer</li>
          </ul>
        </ArticleBlock>

        <ArticleBlock title="3. Configuration du fichier Dockerfile">
          <ArticleParagraphe>
            Nous allons maintenant créer un fichier Docker file à la racine de
            notre projet React. Ce fichier contiendra les instructions pour
            construire notre image Docker.
          </ArticleParagraphe>
          <image src="" />
          <ArticleParagraphe>
            Dans ce fichier Dockerfile nous utilisons une fonctionnalité très
            puissante de docker appelée docker multi-stage. Le docker multi
            stage nous permet de créer des dockers plus petites et plus
            efficaces en utilisant plusieurs étapes de build dans un seul
            Dockerfile Nous commençons par construire notre application React
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
          <image src="" />
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
          <image src="" />
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
