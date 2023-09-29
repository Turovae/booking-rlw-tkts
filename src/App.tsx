// import './App.css'
import About from "./components/About/About"
import Header from "./components/Header/Header"
import HowWorks from "./components/HowWorks/HowWorks"
import LoadLine from "./components/LoadLine/LoadLine"

function App() {
  return (
    <div className='main'>
      <Header />
      <LoadLine progress={55} />
      <About />
      <HowWorks />
      <div className="feedback">Feedback</div>
      <div className="contacts">Contacts</div>
      <div className="footer">Footer</div>
    </div>
  )
}

export default App
