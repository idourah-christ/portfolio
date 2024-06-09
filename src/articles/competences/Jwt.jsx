import reactArticle from "../text/jwt";
import jwtSignatureImg from "../../assets/images/portfolio/article/jwt/signature.png";
import jwtInstallImg from "../../assets/images/portfolio/article/jwt/installation.png";
import jwtVerificationImg from "../../assets/images/portfolio/article/jwt/verification.png";

import {
  Article,
  ArticleHeader,
  ArticleBlock,
  ArticleImage,
  ArticleParagraphe,
  OrderList,
} from "../../component/Article";

const JwtArticle = () => {
  return (
    <Article>
      <ArticleHeader header={reactArticle.header}>
        <div className="article-abstract">
          <ArticleParagraphe>
            {reactArticle.header.abstract.text}
          </ArticleParagraphe>
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
        <ArticleBlock title="1. Qu'est-ce qu'un JWT ?">
          <ArticleParagraphe>
            Un JSON Web Token (JWT) est un standard ouvert (RFC 7519) qui
            définit un moyen compact et sécurisé de représenter des
            revendications entre deux parties. Un JWT est composé de trois
            parties :
          </ArticleParagraphe>
          <OrderList>
            <li>
              <b>Header (En-tête) : </b>Contient le type de jeton et
              l'algorithme de signature utilisé.
            </li>
            <li>
              <b>Payload (Charge utile) : </b>Contient les revendications,
              c'est-à-dire les informations que l'on souhaite transmettre.
              Signature
            </li>
            <li>
              <b>Signature :</b>Assure l'intégrité du jeton en vérifiant qu'il
              n'a pas été modifié.
            </li>
          </OrderList>
        </ArticleBlock>

        <ArticleBlock title="2. Pourquoi utiliser JWT ?">
          <OrderList>
            <li>
              <b>Simplicité</b> : Les JWT sont faciles à utiliser et peuvent
              être intégrés rapidement dans une application..
            </li>
            <li>
              <b>Sécurité :</b> Ils peuvent être signés pour garantir
              l'authenticité et l'intégrité des données transmises.
            </li>
            <li>
              <b>Sans état :</b> Les JWT ne nécessitent pas de stockage côté
              serveur, ce qui permet une scalabilité horizontale.
            </li>
            <li>
              <b>Interopérabilité :</b> Étant un standard ouvert, les JWT
              peuvent être utilisés dans différentes technologies et
              plateformes.
            </li>
          </OrderList>
        </ArticleBlock>

        <ArticleBlock title="3. Installation de JSON Web Token en node js">
          <ArticleParagraphe>
            Pour utiliser JWT dans un projet Node.js, vous devez d'abord
            installer le package jsonwebtoken via npm :
          </ArticleParagraphe>

          <ArticleImage src={jwtInstallImg} style={{ width: "800px" }} />
        </ArticleBlock>

        <ArticleBlock title="4. Utilisation de JWT.">
          <ArticleParagraphe>
            Voici un exemple simple pour illustrer comment générer et vérifier
            un JWT avec le package jsonwebtoken.
          </ArticleParagraphe>
          <ArticleImage src={jwtSignatureImg} style={{ width: "800px" }} />
          <ArticleParagraphe>
            <b>Vérification d'un mot de passe</b>
          </ArticleParagraphe>
          <ArticleImage src={jwtVerificationImg} style={{ width: "700px" }} />
        </ArticleBlock>

        <ArticleBlock title="5. Bonne pratique.">
          <OrderList>
            <li>
              <b>Utiliser une clé secrète robuste : </b> Assurez-vous que votre
              clé secrète est longue et aléatoire pour garantir la sécurité de
              vos JWT.
            </li>
            <li>
              <b>Définir des durées de vie courtes :</b> Limitez la durée de
              validité de vos jetons pour réduire les risques en cas de
              compromission.
            </li>
            <li>
              <b>Utiliser HTTPS :</b> Transmettez toujours vos JWT via des
              connexions sécurisées pour éviter les attaques de l'homme du
              milieu.
            </li>
            <li>
              <b>Révoquer les jetons compromis :</b> Mettez en place un
              mécanisme pour révoquer les jetons en cas de compromission.
            </li>
          </OrderList>
        </ArticleBlock>

        <ArticleBlock title="6. Conclusion">
          <ArticleParagraphe>
            Les JSON Web Tokens (JWT) offrent une méthode sécurisée et efficace
            pour l'authentification et l'autorisation dans les applications web.
            En utilisant JWT, vous pouvez garantir que les informations
            échangées entre le client et le serveur sont sécurisées et
            intégrales. En suivant les bonnes pratiques de sécurité, vous pouvez
            renforcer la protection de votre application et offrir une
            expérience utilisateur sécurisée.
          </ArticleParagraphe>
        </ArticleBlock>
      </div>
    </Article>
  );
};

export default JwtArticle;
