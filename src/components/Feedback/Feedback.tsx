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

function Feedback() {
  return (
    <div className="feedback">
      <div className="feedback__inline container">
        <h2 className="feedback__title">Отзывы</h2>
        <div className="feedback__comments">
          {comments.map((comment) => <FeedbackComment key={comment.userName} userFeedback={comment} />)}
        </div>
        <FeedbackControl elemName='feedback__page-indicator' page={1} numPages={5} />
      </div>
    </div>
  )
}

function FeedbackComment ({ userFeedback }: {
  userFeedback: UserFeedback
}) {
  return (
    <div className="comment">
      <div className="comment__userpic">
        <img src={userFeedback.avatar} />
      </div>
      <div className="comment__body">
        <div className="comment__username">{userFeedback.userName}</div>
        <div className="comment__text">{userFeedback.content}</div>
      </div>
    </div>
  )
}

function FeedbackControl ({ page, numPages, elemName = '' }: { page: number; numPages: number; elemName?: string }) {
  const renderDots = (): React.ReactElement[] => {
    const dots: React.ReactElement[] = [];

    for (let i = 0; i < numPages; i++) {
      const isActive = i === page;

      dots.push(
        <div
          className={`feedback-control__dot${isActive ? ' feedback-control__dot_active' : ''}`}
          key={i}
        />
      );
    }

    return dots;
  }

  return (
    <div className={`feedback-control ${elemName}`}>
      {renderDots()}
    </div>
  )
}

export default Feedback;
