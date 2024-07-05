import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactArticle from "./articles/competences/React";
import NodeJsArticle from "./articles/competences/Node";
import AutonomieArticle from "./articles/competences/Autonomie";
import LedearshipArticle from "./articles/competences/Ledearship";
import MainApp from "./code/Home";
import Articles from "./code/Articles";
import JwtArticle from "./articles/competences/Jwt";
import NotGDeployArticle from "./articles/competences/NotG";
import CompilerArticle from "./articles/competences/Compiler";
import EnglishArticle from "./articles/competences/English";
import RxvalidArticle from "./articles/competences/Rxvalid";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainApp />,
  },
  {
    path: "/competences",
    element: <Articles />,
  },
  {
    path: "/articles/react-js",
    element: <ReactArticle />,
  },
  {
    path: "/articles/english",
    element: <EnglishArticle />,
  },
  {
    path: "/articles/bcrypt",
    element: <NodeJsArticle />,
  },
  {
    path: "/articles/jwt",
    element: <JwtArticle />,
  },
  {
    path: "/articles/autonomie",
    element: <AutonomieArticle />,
  },
  {
    path: "/articles/leadership",
    element: <LedearshipArticle />,
  },
  {
    path: "/articles/notg-deploy",
    element: <NotGDeployArticle />,
  },
  {
    path: "/articles/compiler",
    element: <CompilerArticle />,
  },
  {
    path: "/articles/rxvalid",
    element: <RxvalidArticle />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
