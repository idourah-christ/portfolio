import { Article } from "../../component/Article";


const RxvalidArticle = () => {
  return (
    <Article>
      <h3>Contexte de réalisation</h3>
      <div>
        <p>
          En juillet 2023 mon maître d’apprentissage m’a confié la
          responsabilité d’ajouter une nouvelle fonctionnalité sur le logiciel
          de test end-to-end appelé RXVALID utilisé par l’équipe « validation
          auto STB ».
        </p>
      </div>
      <div>
        <h4>Qu’est-ce que RXVALID ? </h4>
        <p>
          C’est un logiciel conçu par Canal Plus, qui permet de gérer une
          compagne de test end-to-end. L’outil permet de créer des scénarios et
          de les lancer unitairement. Cependant avant mon arrivée au sein de
          l’équipe, l’outil n’avait pas d’interface graphique permettant de
          créer une suite de tests.
        </p>
        <p>
          La fonctionnalité devrait permettre de modifier les informations d’un
          scénario en fonction du profil choisi.
        </p>{" "}
      </div>
      <div>
        <h4>Enjeux </h4>
        <p>
          C’était occasion était pour moi une opportunité de faire mes preuves
          au sein de l’équipe. J’avais été recruté pour une alternance divisée
          en deux phases, dans la première phase il fallait analyser les
          résultats des tests pour déterminer la cause des échecs de certains
          scénario. Dans la deuxième phase il me fallait utiliser mes
          compétences d’ingénieur logiciel pour faire évoluer l’outil
          qu’utilisait l’équipe (RXVALID). Il était important pour moi de
          réussir l’ajout de cette fonctionnalité pour la seconde phase de mon
          alternance.{" "}
        </p>
      </div>
      <div>
        <h4>Risques</h4>
        <p>
          Je craignais d’apporter une nouvelle régression sur RXVALID en
          ajoutant la nouvelle fonctionnalité. RXVALID était une SPA (Single
          Page Application) dont le frontend était fait avec Backbone JS et le
          backend avec Node JS. Je n’avais aucune expérience sur Backbone JS et
          craignais de ne pas être capable de réussir la tâche qui m’était
          confiée.
        </p>
      </div>
      <div>
        <h4>Objectifs </h4>
        <p>
          L’objectif était de rendre possible la modification d’informations
          d’un scénario en choisissant le profile que l’on souhaite modifier.
        </p>
      </div>
      <div>
        <h4>Étapes</h4>
        <p>
          J’ai commencé par prendre connaissance des spécifications de la
          nouvelle fonctionnalité. Après avoir pris connaissance des
          spécifications techniques et fonctionnelles, j’ai défini un cahier de
          charge qui a été validé par mon maître d’apprentissage.
        </p>
        <p>
          En tant qu’ingénieur logiciel il est important de localiser et
          délimiter la zone d’intervention pour chaque changement apporté au
          logiciel. Après avoir localisé la zone d’intervention j’ai créé un
          nouveau service qui contenais une classe appelée « EntityManager ».
          Cette classe était la représentation de chaque modèle ou entité
          présente en base de données. Après la création de la classe j’ai
          apporté quelques modifications sur le frontend en ajoutant un
          formulaire HTML et du code Javascript pour gérer l’interaction avec
          l’utilisateur. Au bout d’une semaine de travail, j’ai pu ajouter la
          fonctionnalité et la déployer. Les retours de la part de mon maître
          d’apprentissage fut très positif et marqua le début de ma deuxième
          phase d’alternance.
        </p>
      </div>
    </Article>
  );
};

export default RxvalidArticle;
