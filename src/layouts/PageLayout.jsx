import { Link } from "react-router-dom";
import { Nav } from "../Header";

const PageLayout = ({ children }) => {
  return (
    <main>
      <Nav />
      <div className="content">{children}</div>
    </main>
  );
};

export default PageLayout;
