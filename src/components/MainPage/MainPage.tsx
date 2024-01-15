import About from '../About/About';
import Feedback from '../Feedback/Feedback';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HowWorks from '../HowWorks/HowWorks';
import LoadLine from '../LoadLine/LoadLine';
import ScrollToHash from '../ScrollToHash/ScrollToHash';



function MainPage() {
  return (
    <div className='page'>
      <Header />
      <LoadLine progress={55} />
      <div id='about'>
        <About />
      </div>
      <div id='how-works'>
        <HowWorks />
      </div>
      <div id="feedback">
        <Feedback />
      </div>
      <div id="contacts">
        <Footer />
      </div>
      <ScrollToHash />
    </div>
  )
}

export default MainPage;
