// import './App.css'

function App() {
  return (
    <div className='main'>
      <div className="header">
        <div className="header__banner"></div>
        <div className="header__logo">Лого</div>
        <ul className="header__menu menu">
          <li className="menu__item"><a href="#">О нас</a></li>
          <li className="menu__item"><a href="#">Как это работает</a></li>
          <li className="menu__item"><a href="#">Отзывы</a></li>
          <li className="menu__item"><a href="#">Контакты</a></li>
        </ul>
      </div>
      <div className="about">About us</div>
      <div className="how-works">How it works</div>
      <div className="feedback">Feedback</div>
      <div className="contacts">Contacts</div>
      <div className="footer">Footer</div>
    </div>
  )
}

export default App
