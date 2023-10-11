import Logo from '../Logo/Logo';
import './Footer.scss'

function Footer () {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="footer__inline container">
          This is contacts block
          <div className="footer__col"></div>
          <div className="footer__col"></div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__inline container">
          <Logo />
          <a href=''>top</a>
          <div>2018 WEB</div>
        </div>
      </div>
    </div>
  )
}

export default Footer;