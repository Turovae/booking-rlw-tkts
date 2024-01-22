import './Toggler.scss';

interface TogglerProps {
  name: string;
  items: Array<string | number>;
  current?: string | number;
  onClick: (item: string | number) => void;
}

function Toggler({name, items, current, onClick}: TogglerProps) {

  // const [currentItem, setCurrentItem] = useState(defaultValue || items[0]);

  const isChecked = (item: number | string) => {
    return item === current;
  }

  return (
    <span className='toggler'>
      {items.map(item =>
        <label key={item} className='toggler__item'>
          <span className={'toggler__label' + (isChecked(item) ? ' checked' : '')}>{item}</span>
          <input
            className='toggler__checkbox'
            type='checkbox'
            name={name}
            checked={isChecked(item)}
            onClick={() => onClick(item)}
          />
        </label>
      )}
    </span>
  )
}

export default Toggler;
