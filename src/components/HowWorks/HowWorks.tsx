import './HowWorks.scss';
import icon1 from './img/icons/how1.svg';
import icon2 from './img/icons/how2.svg';
import icon3 from './img/icons/how3.svg';

function HowWorks() {
  return (
    <div className='how-works'>
      <div className="how-works__inner container">
          <div className='how-works__header'>
            <h2 className='how-works__title'>Как это работает</h2>
            <a className='how-works__link-more'>Узнать больше</a>
          </div>
          {/*
            Вот тут мне не нравятся названия классов.
            Но пока не могу придумать, как более элегантно
            сформировать классы.
          */}
          <div className="how-works__content">
            <div className="how-works__content-item">
              <div className="how-works__content-item-icon">
                <img src={icon1} alt="" />
              </div>
              <div className="how-works__content-item-description">
                Удобный заказ на сайте
              </div>
            </div>
            <div className="how-works__content-item">
              <div className="how-works__content-item-icon">
                <img src={icon2} alt="" />
              </div>
              <div className="how-works__content-item-description">
                Нет необходимости ехать в офис
              </div>
            </div>
            <div className="how-works__content-item">
              <div className="how-works__content-item-icon">
                <img src={icon3} alt="" />
              </div>
              <div className="how-works__content-item-description">
                Огромный выбор направлений
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default HowWorks;
