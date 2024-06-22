import { Article } from "../../component/Article";

const NotGDeployArticle = () => {
  return (
    <Article>
      <article>
        <div>
          <h5>Bienvenue dans l'équipe auto 😃 </h5>
          <p>
            En janvier 2023 j’ai été recruté chez CANAL+ en tant qu’alternant au
            poste d’apprenti ingénieur automatisation. Mon travail consistait à
            analyser les résultats des tests pour rediger un rapport journalier.
            En tant qu'équipe automatisation notre mission était de concevoir et
            maintenir des pipelines de lancement de tests sur des décodeurs.
          </p>
          <p>
            Les tests s'excutant toute la nuit, j'analisai les résultats le
            matin à l'aide d'outils de visualisation. Je detectai les tests
            ayant échoués pour en déterminer les causes.
            <br />
            Je rédigeai ensuite un rapport détaillé que je transmettai à
            d'autres équipes de la chaine de validation qui l'utilisaient pour
            remonter des bugs, des régressions ou apporter des corrections.
          </p>
          <p>
            Une fois le rapport transmis, je passai le reste du temps à corriger
            et mettre à jours des tests.
          </p>
        </div>

        <div>
          <h5>Et si tu faisais un peu de dev ? </h5>
          <p>
            Après avoir passé 5 mois à analyser et corriger des tests, mon
            maître d'apprentissage me proposa de faire du développement web.
            <br /> Il me confia le développement d'une nouvelle fonctionnalité
            sur l'outil de gestion de test qui était développé par un membre de
            l'équipe.
          </p>
          <p>
            Il s'agissait d'une application web conçu avec du Javascript et
            Backbone JS, un framework très utilisé à partir de 2011 et qui avait
            perdu sa popularité avec l'apparution de framework plus morderne
            comme React et Angular.
            <br />
            Je n'avais aucune expérience en Backbone JS. J'ai décidé de faire
            des récherches sur internet pour en apprendre d'avantage.
          </p>
          <p>
            Dans mes recherches, je découvri le site officiel de Backbone JS. Il
            me fallait comprendre la philosophie du framework pour ajouter la
            fonctionnalité sans casser les fonctionnalités existantes.
          </p>
        </div>

        <div>
          <h5>Eureka 🥸</h5>
          <p>
            En s'inspirant de ce que j'ai appris sur le site de backbone js,
            j'ai pu ajouter une page sur l'application. Elle était là, la
            fameuse page blanche. J'avais compris comment ajouter des pages à
            l'application il me fallait à présent ajouter les éléments
            graphiques et du style (css) à mes pages.
          </p>
          <p>
            L'expérience que j'ai des bibliothèques Javascript comme Jquery, des
            frameworks comme Angular et React JS me permis de mieux comprendre
            la philosophie de Backbone. Faire du Backbone c'est, créer un
            modèle, une vue et un template.
          </p>
        </div>

        <div>
          <h5>J'ai mon code en production 😊</h5>
          <p>
            Après deux jours de développement, j'ai ajouté trois composants
            graphiques à la page web créee quelques jours plus tôt. J'ai ajouté
            deux champs de type select ainsi qu'un bouton comme me l'avait
            demandé mon maître d'apprentissage.
            <br /> Il ne restait plus qu'à ajouter des gestionnaires évènement
            (event handler) aux composants graphiques pour gérer les différentes
            actions de l'utilisateur.
          </p>
          <p>
            A la fin de la semaine la fonctionnalité était prête. J'ai envoyé
            mon travail à mon mâitre d'apprentissage qui a vérifié et decider de
            déployer en production.
            <br />
            Cette exercice m'a permis de comprendre la philisophie du framework
            backbone JS ainsi que le fonctionnement de l'application de gestion
            de test automatisé, développée par notre équipe. Pour mon maître
            d'apprentissage, c'était une preuve que j'avais les compétences pour
            contribuer au développement de l'application.
          </p>
        </div>
      </article>
    </Article>
  );
};

export default NotGDeployArticle;
