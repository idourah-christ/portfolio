import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import ReactArticle from "./articles/competences/React";
import NodeJsArticle from "./articles/competences/Node";
import ArchitectureArticle from "./articles/competences/Architecture";
import AutonomieArticle from "./articles/competences/Autonomie";
import LedearshipArticle from "./articles/competences/Ledearship";
import RigueurArticle from "./articles/competences/Rigueur";
import MobemboArticle from "./articles/realisations/Mobembo";
import RxvalidArticle from "./articles/realisations/Rxvalid";
import NotGDeployArticle from "./articles/realisations/NotG";
import Parcours from "./component/Parcours";
import MainApp from "./code/App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainApp />,
  },
  {
    path: "/parcours",
    element: <Parcours />,
  },
  {
    path: "/react-js",
    element: <ReactArticle />,
  },
  {
    path: "/node-js",
    element: <NodeJsArticle />,
  },
  {
    path: "/architecture",
    element: <ArchitectureArticle />,
  },
  {
    path: "/autonomie",
    element: <AutonomieArticle />,
  },
  {
    path: "/ledearship",
    element: <LedearshipArticle />,
  },
  {
    path: "/rigueur",
    element: <RigueurArticle />,
  },
  {
    path: "/mobembo",
    element: <MobemboArticle />,
  },
  {
    path: "/rxvalid",
    element: <RxvalidArticle />,
  },
  {
    path: "/notg",
    element: <NotGDeployArticle />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
