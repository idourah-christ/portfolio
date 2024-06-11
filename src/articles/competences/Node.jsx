import reactArticle from "../text/bcrypt";
import bcryptHashImg from "../../assets/images/portfolio/article/bcrypt/hash.png";
import bcryptInstallImg from "../../assets/images/portfolio/article/bcrypt/installation.png";
import bcryptVerificationImg from "../../assets/images/portfolio/article/bcrypt/verification.png";

import {
  Article,
  ArticleHeader,
  ArticleBlock,
  ArticleImage,
  ArticleParagraphe,
  OrderList,
} from "../../component/Article";

const NodeJsArticle = () => {
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
        <ArticleBlock title="1. Qu'est-ce que bcrypt ?">
          <ArticleParagraphe>
            bcrypt est un algorithme de hachage de mots de passe conçu pour être
            lent afin de rendre les attaques par force brute plus difficiles.
            Contrairement aux algorithmes de hachage rapides comme MD5 ou
            SHA-256, bcrypt introduit un facteur de coût qui rend le calcul du
            hachage plus gourmand en ressources, augmentant ainsi le temps
            nécessaire pour casser un mot de passe par essai et erreur.
          </ArticleParagraphe>
        </ArticleBlock>

        <ArticleBlock title="2. Pourquoi bcrypt ?">
          <OrderList>
            <li>
              <b>Sécurité accrue:</b> La lenteur intentionnelle de bcrypt rend
              les attaques par force brute plus difficiles.
            </li>
            <li>
              <b>Facteur de coût ajustable :</b> Vous pouvez augmenter la
              complexité du hachage au fil du temps pour rester en avance sur
              les capacités croissantes des attaquants.
            </li>
            <li>
              <b>Sels uniques : </b>Bcrypt génère un sel unique pour chaque mot
              de passe, ce qui empêche les attaques par table arc-en-ciel.
            </li>
          </OrderList>
        </ArticleBlock>

        <ArticleBlock title="3. Installation en node js">
          <ArticleParagraphe>
            Pour utiliser bcrypt dans un projet Node.js, vous devez d'abord
            l'installer via npm :
          </ArticleParagraphe>

          <ArticleImage src={bcryptInstallImg} style={{ width: "800px" }} />
        </ArticleBlock>

        <ArticleBlock title="4. Utilisation de bcrypt.">
          <ArticleParagraphe>
            <b>Hachage d'un mot de passe </b>Voici un exemple simple pour
            illustrer comment hacher un mot de passe avec bcrypt.
          </ArticleParagraphe>
          <ArticleImage src={bcryptHashImg} style={{ width: "800px" }} />
          <ArticleParagraphe>
            <b>Vérification d'un mot de passe</b>
          </ArticleParagraphe>
          <ArticleParagraphe>
            {" "}
            Lorsqu'un utilisateur essaie de se connecter, vous devez vérifier
            que le mot de passe fourni correspond au hash enregistré dans votre
            base de données.
          </ArticleParagraphe>
          <ArticleImage
            src={bcryptVerificationImg}
            style={{ width: "700px" }}
          />
        </ArticleBlock>

        <ArticleBlock title="5. Bonne pratique.">
          <OrderList>
            <li>
              <b>Utiliser un facteur de coût approprié :</b> Le facteur de coût
              (saltRounds) doit être assez élevé pour ralentir le processus de
              hachage, mais pas au point de rendre votre application lente.
            </li>
            <li>
              <b>Mise à jour des mots de passe :</b> Au fil du temps, augmentez
              le facteur de coût et demandez aux utilisateurs de mettre à jour
              leurs mots de passe pour renforcer la sécurité.
            </li>
            <li>
              <b>Protéger vos bases de données :</b> Même si les mots de passe
              sont hachés, il est crucial de protéger votre base de données
              contre les accès non autorisés.
            </li>
          </OrderList>
        </ArticleBlock>

        <ArticleBlock title="6. Conclusion">
          <ArticleParagraphe>
            bcrypt est un outil puissant pour la gestion sécurisée des mots de
            passe dans les applications Node.js. En utilisant un algorithme de
            hachage avec un facteur de coût ajustable et en générant des sels
            uniques, vous pouvez protéger les mots de passe de vos utilisateurs
            contre les attaques courantes. En suivant les bonnes pratiques et en
            restant vigilant face aux évolutions de la sécurité, vous pouvez
            renforcer la protection des données sensibles dans votre application
          </ArticleParagraphe>
        </ArticleBlock>
      </div>
    </Article>
  );
};

export default NodeJsArticle;
