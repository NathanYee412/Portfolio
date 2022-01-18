import Header from '../components/Header';
import Landing from '../components/Landing';
import Footer from '../components/Footer';
import Projects from '../components/Projects';
import About from '../components/About';

export default function Home() {

    return(
        <div className='bg-gray-800'>
            <Header />
            <Landing />
            <Projects />
            <About />
            <Footer />
        </div>
    );
}