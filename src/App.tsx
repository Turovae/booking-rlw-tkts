// import './App.css'
import Header from "./components/Header/Header"
import LoadLine from "./components/LoadLine/LoadLine"

function App() {
  return (
    <div className='main'>
      <Header />
      <LoadLine progress={55} />
      <div className="about">About us</div>
      <div className="how-works">How it works</div>
      <div className="feedback">Feedback</div>
      <div className="contacts">Contacts</div>
      <div className="footer">Footer</div>
    </div>
  )
}

export default App
