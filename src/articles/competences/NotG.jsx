import ArticleLayout from "../../layouts/ArticleLayout";

const NotGDeployArticle = () => {
  return (
    <ArticleLayout>
      <article>
        <p>
          Dans le monde de la technologie en constante évolution, rester à la
          pointe est essentiel pour les entreprises afin de maintenir leur
          avantage concurrentiel. Pour CANAL+, le principal fournisseur de
          télévision français, l'innovation n'est pas seulement un objectif mais
          une nécessité. Dans cet article, je vous propose de voir ensemble la
          migration d’un projet en python 2 vers Node JS.{" "}
        </p>

        <h4>Et si tu faisais un peu de dev ? </h4>

        <p>
          En janvier 2023 j’avais été recruté chez CANAL+ en tant qu’alternant
          au poste d’apprentis ingénieur automatisation. Mon travail consistait
          à analyser les résultats des tests automatisés afin de produire un
          rapport journalier. Après avoir fait mes preuves lors de l’ajout d’une
          fonctionnalité dans le CRM de gestion de tests fait maison, mon maitre
          d’apprentissage avait décidé de me confier la migration d’un projet
          initialement en python 2 vers Node JS.
        </p>

        <h4>A dieu python 2</h4>
        <p>
          Il s’agissait d’une application serveur permettant de lancer
          l’exécution d’un ou plusieurs scripts. Elle faisait partie d’une
          chaine de services qui automatisaient le lancement de plus 7000 tests
          end-to-end par jours. Les informations relatives à l’exécutions des
          scripts devraient être renvoyées aux applications clientes en temps
          réel. L’application avait une dépendance majeure a une bibliothèque
          externe qui n’était plus maintenue en python 2 et plus disponible en
          Python 3. Après quelque recherche j’avais trouvé une alternative à
          cette bibliothèque en Node JS et avais proposé de migrer l’application
          en Node JS.
        </p>

        <h4>C’est maintenant ou jamais </h4>

        <p>
          Ce projet était pour moi une occasion de mettre en lumière mes
          compétences de développeur Node JS. Mes objectifs étaient :
        </p>

        <ol>
          <li>Réécrire la solution en utilisant Node JS.</li>
          <li>
            Redéfinir l'architecture pour garantir la scalabilité et la
            maintenabilité.
          </li>
          <li>
            Améliorer les performances du serveur pour répondre aux exigences de
            la communication en temps réel.
          </li>
          <li>Documenter le processus de migration </li>
        </ol>

        <p>
          Je n’avais jamais travaillé sur un projet aussi impactant que celui-ci
          avant mon arrivé chez CANAL +, mais avais confiance en mes capacités à
          réussir. En effet pendant mes 4 années d’études en Ukraine j’avais
          travaillé sur des projets plus complexes que celui-ci traitant des
          sujets comme les structures de données, les systèmes distribués, la
          programmation concurrentielle etc...
        </p>
        <ol>
          <li>
            Comprendre le Besoin : La première étape consistait à comprendre les
            exigences et les attentes de l'équipe auto.
          </li>
          <li>
            Analyser la Technologie Héritée : Plonger dans les subtilités de la
            solution existante était crucial pour comprendre ses forces et ses
            faiblesses.
          </li>
          <li>
            Choisir les Bonnes Technologies : Une réflexion minutieuse a été
            accordée à la sélection de technologies qui seraient en phase avec
            les objectifs à long terme de CANAL+.
          </li>
          <li>
            Conception Architecturale : Une architecture robuste a été conçue
            pour accueillir la scalabilité, la tolérance aux pannes et la
            facilité de maintenance.
          </li>
        </ol>
        <h4>Conclusion :</h4>
        <p>
          Le parcours de la modernisation de la communication par script chez
          CANAL+ ne consistait pas seulement à adopter de nouvelles
          technologies, mais à embrasser l'innovation pour stimuler l'efficacité
          et les performances. En réimaginant l'approche de l'exécution de
          scripts, l'équipe auto a non seulement répondu aux besoins immédiats
          de l'organisation, mais a également ouvert la voie à des avancées
          futures dans l'intégration technologique.
        </p>
      </article>
    </ArticleLayout>
  );
};

export default NotGDeployArticle;
