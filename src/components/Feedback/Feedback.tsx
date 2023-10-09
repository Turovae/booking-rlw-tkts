import './Feedback.scss';

import avatar1 from './avatars/avatar1.png';
import avatar2 from './avatars/avatar2.png';

interface UserFeedback {
  userName: string
  avatar: string
  content: string
}

const comments: UserFeedback[] = [
  {
    userName: 'Екатерина Вальнова',
    avatar: avatar1,
    content: 'Доброжелательные подсказки на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые.'
  },
  {
    userName: 'Евгений Стрыкало',
    avatar: avatar2,
    content: 'СМС-сопровождение до посадки Сразу после оплаты ж/д билетов и за 3 часа до отправления мы пришлем вам СМС-напоминание о поездке.',
  },
];

function Feedback () {
  return (
    <div className="feedback">
      <h2 className="feedback__title">Отзывы</h2>
      <div className="feedback__comments">
        {comments.map((comment) => <FeedbackComment key={comment.userName} userFeedback={comment} />)}
      </div>
      <PageIndicator elemName='feedback__page-indicator' page={1} numPages={5} />
    </div>
  )
}

function FeedbackComment ({ userFeedback }: {
  userFeedback: UserFeedback
}) {
  return (
    <div className="comment">
      <div className="comment__user-avatar">
        <img src={userFeedback.avatar} />
      </div>
      <div className="comment__content">
        <div className="comment__user-name">{userFeedback.userName}</div>
        <div className="comment__text">{userFeedback.content}</div>
      </div>
    </div>
  )
}

function PageIndicator ({ page, numPages, elemName = '' }: { page: number; numPages: number; elemName?: string }) {
  const renderDots = (): React.ReactElement[] => {
    const dots: React.ReactElement[] = [];

    for (let i = 0; i < numPages; i++) {
      const isActive = i === page;

      dots.push(
        <div
          className={`page-indicator__dot${isActive ? ' page-indicator__dot_active' : ''}`}
        ></div>
      );
    }

    return dots;
  }

  return (
    <div className={`page-indicator ${elemName}`}>
      {renderDots()}
    </div>
  )
}

export default Feedback;
