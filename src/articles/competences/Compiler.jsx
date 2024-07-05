import { Article } from "../../component/Article";

const CompilerArticle = () => {
  return (
    <Article>
      <h3>Un compilateur en c++ pour le langage INTECH </h3>
      <div>
        <p>
          En 2022 pendant que je préparais le mastère "expert génie logiciel" à
          INTECH.
          <br />
          j’ai eu un cours intitulé ‘compilateur ‘. Le cours avait pour but
          d’apprendre au futur expert logiciel que nous étions mes collègues et
          moi, le fonctionnement interne d’un compilateur ainsi que des langages
          de programmations compilés. Pour valider le module, je devais
          concevoir avec un collègue de classe un compilateur qu’il nous fallait
          envoyer au professeur à la fin du semestre et réussir un examen écrit.
        </p>
        <h5>C’est quoi un compilateur ?</h5>
        <p>
          Un compilateur est un programme qui traite les instructions écrites
          dans un langage de programmation donné pour les traduire en langage
          machine, ou « code », utilisé par le processeur d'un ordinateur. Le
          compilateur que nous avons conçu, mon collègue et moi traduisait un
          langage de programmation très simplifié appélé “langage intech” don’t
          les spécifications étaient définies par le professeur. C’était un
          langage de programmation dont les mots clef était en français, avec un
          paradigme fonctionnel et typé comme du C.
        </p>
      </div>
      <div>
        <h5>7 ans plus tard</h5>
        <p>
          J’ai découvert la programmation informatique en 2016, en lisant un
          article sur le site internet ‘openclassroom’. L’article était une
          initiation à la programmation web avec du HTML, CSS et Javascript. De
          2016 à 2022 j’ai exploré différents langages de programmations à
          savoir du C++, C, du Java et du python.
        </p>
        <p>
          J’ai aussi lu des livres qui traitaient des sujets comme les
          structures de données, la programmation orienté objet etc. ... <br />
          Ayant programmé sur plusieurs langages de programmations je comprenais
          comment fonctionnent les langages informatiques compilé ou interprété.
          Avant de faire ce cours je connaissais comment sont conçu les langages
          de programmation compilé, je savais quel était le rôle d’un
          compilateur.
        </p>
        <p>
          Ce projet était pour moi l’occasion de comprendre le fonctionnement
          interne d’un compilateur, l’un des éléments les plus importants de
          langages de programmation compilé comme le C++ et C.
        </p>
      </div>
      <div>
        <h5>Est-ce vraiment une bonne idée ?</h5>
        <p>
          Le professeur nous avait laissé le choix de la technologie à utiliser
          pour concevoir le compilateur. Ayant fait du C++ dans le passé, j’ai
          proposé à mon collègue de réaliser le compilateur en C++. <br />
          Cependant en 2022 ça faisait au moins 3 ans que je n’avais plus écrit
          une seule ligne de code en C++. Il s’agissait peut-être du programme
          informatique le plus complexe que je n’avais jamais écrit jusque ici
          et je m’apprêtais à l’ écrire en C++ un langage que je n’avais plus
          utilisé depuis 2019.{" "}
        </p>
      </div>
      <div>
        <h5>Du code qui functionne</h5>
        <p>
          Notre objectif était de rendre au professeur un compilateur
          fonctionnel, qui prenne en entrée un fichier avec une extension
          ‘intech’ contenant un programme écrit en utilisant des mots clef du
          langage de programmation ‘intech’ . Le fichier pouvait contenir
          plusieurs fonctions à la racine, la présence d’une fonction nommée
          ‘main’ était obligatoire pour valider le fichier. Il nous fallait
          aussi finir quelque jours avant la date limite pour tester le
          compilateur avant de le rendre au professeur.
        </p>
      </div>
      <div>
        <h5>Vous n'avez que quatre semaines</h5>
        <p>
          Le projet s'étendant sur quatre semaines, je consacrais deux jours
          pour travailler dessus. Mon collègue n'ayant jamais fait du C++ dans
          le passé, nous avons décidé que sa mission serait de tester le
          compilateur en se basant sur les spécifications données par le
          professeur.
        </p>
        <p>
          Le compilateur étant composé de :
          <ul className="list">
            <li>- Un analyseur lexical</li>
            <li>- Un analyseur syntaxique</li>
            <li>- Une table de symbole</li>
            <li>- Un générateur de code</li>
          </ul>
        </p>
        <p>
          Ma tâche était de concevoir l'analyseur lexical, l'analyseur
          syntaxique et le générateur de code.
        </p>
        <h5>L'analyseur lexical</h5>
        <p>
          Composé d'un lexer et d'une fonction d'analyse, il a pour rôle de
          convertir une chaîne de caractères en une liste de symboles. la
          conception du l'analyseur lexical fut la partie la plus difficile du
          projet.
        </p>
        <p>
          Il nous fallait recupérer chaque symbole rencontré dans le fichier
          source (nombre, chaîne de caractères, operateur mathématique, mots
          reservés), qu'il fallait ensuite traiter en suivant des règles
          précises pour chaque cas. La conception de l'analyseur lexical dura
          deux semaines.
        </p>
        <p>
          Les deux semaines restantes étaient consacrées à la conception de
          l'analyseur syntaxique et à l'écriture des tests. Faute de temps nous
          n'avons pas pu concevoir le générateur de code mais cela ne nous a pas
          empêché mon collègue et moi d'avoir un compilateur fonctionnel.
        </p>
      </div>
      <div>
        <h5>On n'est pas tous les mêmes</h5>
        <p>
          Cette réalisation m'a permis d'apprendre à travailler avec un collègue
          qui n'a pas la même compétence que moi, de mieux comprendre comment
          les langages de programmation sont conçus et comment fonctionne un
          compilateur.
        </p>
        <p>
          Nous avons rendu le compilateur au professeur qui a pu le tester et
          nous attribuer une note satisfaissante. Depuis je continue à faire
          évoluer ce compilateur quand j'ai du temps. Mon rêve est de concevoir
          un langage de programmation simplifié pour apprendre aux enfants la
          programmation informatique dès l'age de 10 ans.
        </p>
      </div>
    </Article>
  );
};

export default CompilerArticle;
