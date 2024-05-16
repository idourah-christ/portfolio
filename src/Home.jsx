import PageLayout from './Header';
import About from './component/About';
import Service from './component/Service';
import Skill from './component/Skill';
import Parcours from './component/Parcours';
import Contact from './component/Contact';

const Home = () => {
    return ( 
        <PageLayout>
        <About />
        <Service />
        <Skill />
        <Parcours />
        <Contact />
      </PageLayout>
     );
}
 
export default Home;