import PageLayout from "./layouts/PageLayout";
import Service from "./component/Service";
import Skill from "./component/Skill";
import Parcours from "./component/Parcours";
import Contact from "./component/Contact";
import Banner from "./component/Banner";

const Home = () => {
  return (
    <PageLayout>
      <Banner />
      <Service />
      <Skill />
      <Contact />
    </PageLayout>
  );
};

export default Home;
