import { useNavigate } from 'react-router-dom';
import Logo from '../Logo/Logo';
import SearchForm from '../SearchForm/SearchForm';
import './Header.scss';
import { Link } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="header__logo">
        <div className="container">
          <Logo />
        </div>
      </div>
      <div className="header__menu">
        <ul className="menu container">
          <li className="menu__item"><Link to="/#about">О нас</Link></li>
          <li className="menu__item"><Link to="/#how-works">Как это работает</Link></li>
          <li className="menu__item"><Link to="/#feedback">Отзывы</Link></li>
          <li className="menu__item"><Link to="/#contacts">Контакты</Link></li>
        </ul>
      </div>
      <div className="header__row container">
        {/* <div className="header__col">
          <h2 className="header__slogan">
            <span>Вся жизнь -</span>
            <br />
            <span className="header__slogan_bold">путешествие!</span>
          </h2>
        </div> */}
        <div className="header__col header__slogan">
            <span>Вся жизнь -</span>
            <span className="header__slogan_bold">путешествие!</span>
        </div>
        <div className="header__col">
          <div className="header__form">
            <SearchForm onSubmit={() => {navigate('/home')}} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
