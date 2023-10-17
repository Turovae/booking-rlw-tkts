import './App.scss';
import Calendar from './components/Calendar/Calendar';

// import About from "./components/About/About";
// import Header from "./components/Header/Header";
// import HowWorks from "./components/HowWorks/HowWorks";
// import LoadLine from "./components/LoadLine/LoadLine";
// import Feedback from "./components/Feedback/Feedback";
// import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className='page'>
      {/* <Header />
      <LoadLine progress={55} />
      <About />
      <HowWorks />
      <Feedback />
      <Footer /> */}
      <Calendar />
    </div>
  )
}

export default App;
