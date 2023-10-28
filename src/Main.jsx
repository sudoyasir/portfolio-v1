import MyPicture from '../src/images/me.jpg'

import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import ProjectCard from './components/ProjectCard/ProjectCard';
import Footer from './components/Footer/Footer';

export default function Main(){
    return(<>
    
    <Header />
    <Hero />
    <ProjectCard />
    <Footer />
    
    </>);
}