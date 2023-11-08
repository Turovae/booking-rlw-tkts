import Logo from '../Logo/Logo';
import SearchForm from '../SearchForm/SearchForm';
import './Header.scss';

function Header() {
  const cityes = ['moskow', 'novosibirsk', 'krasnoyarsk', 'kemerovo', 'achinsk'];
  return (
    <div className="header">
      <div className="header__logo">
        <div className="container">
          <Logo />
        </div>
      </div>
      <div className="header__menu">
        <ul className="menu container">
          <li className="menu__item"><a href="#">О нас</a></li>
          <li className="menu__item"><a href="#">Как это работает</a></li>
          <li className="menu__item"><a href="#">Отзывы</a></li>
          <li className="menu__item"><a href="#">Контакты</a></li>
        </ul>
      </div>
      <div className="header__row container">
        <div className="header__col">
          <h2 className="header__slogan">
            <span>Вся жизнь -</span>
            <br />
            <span className="header__slogan_bold">путешествие!</span>
          </h2>
        </div>
        <div className="header__col header__form">
          <SearchForm />
        </div>
      </div>
    </div>
  )
}

export default Header;
