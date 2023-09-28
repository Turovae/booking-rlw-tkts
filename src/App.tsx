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
        <div className="header__row">
          <div className="header__col">
            <h2 className="header__slogan">
              <span>Вся жизнь -</span>
              <br />
              <span className="header__slogan_bold">путешествие!</span>
            </h2>
          </div>
          <div className="header__col">
            <form className="header__form search-form" action="">
              <div className="search-form__row">
                <span className="search-form__hint">Направление</span>
                <div className="search-form__inputs">
                  <input type="text" className="search-form__input" name="lacation-from" placeholder="Откуда" />
                  <button type="button" className="search-form__direction-change" />
                  <input type="text" className="search-form__input" name="lacation-from" placeholder="Куда" />
                </div>
              </div>
              <div className="search-form__row">
                <span className="search-form__hint">Дата</span>
                <div className="search-form__inputs">
                  <input type="date" className="search-form__input" name="lacation-from" />
                  <input type="date" className="search-form__input" name="lacation-from" />
                </div>
              </div>
              <div className="search-form__row">
                <button className="search-form__button-submit">Найти билеты</button>
              </div>
            </form>
          </div>
        </div>
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
