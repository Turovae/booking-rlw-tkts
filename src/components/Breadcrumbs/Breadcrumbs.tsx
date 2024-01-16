import './Breadcrumbs.scss';

function Breadcrumbs() {
  return (
    <div className="breadcrumbs">
      <div className="container broadcrumbs__container">
        <ul className="breadcrumbs__items">
          <BroadcrumbsItem title='Билеты' isActive={true} />
          <BroadcrumbsItem title='Пассажиры' />
          <BroadcrumbsItem title='Оплата' />
          <BroadcrumbsItem title='Проверка' />
        </ul>
      </div>
    </div>
  )
}

export default Breadcrumbs;

interface BroadcrumbsItemProps {
  title: string;
  isActive?: boolean;
}

function BroadcrumbsItem({ title, isActive }: BroadcrumbsItemProps) {
  const baseClass = 'breadcrumbs__item';
  
  const getFullClass = () => {
    if (isActive) {
      return baseClass + ' active';
    }

    return baseClass;
  }

  return (
    <li className={getFullClass()}>
      <div className="breadcrumbs__marker">{/* marker */}</div>
      <div className='breadcrumbs__link'>{ title }</div>
      <div className="breadcrumbs__angle"></div>
    </li>
  );
}