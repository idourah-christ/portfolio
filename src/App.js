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

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainApp />,
  },
  {
    path: "/articles",
    element: <Articles />,
  },
  {
    path: "articles/react-js",
    element: <ReactArticle />,
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
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
