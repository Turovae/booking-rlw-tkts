import './ComfortButton.scss';

interface Props {
  children: string;
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

function ComfortButton({ children, selected, disabled, onClick }: Props) {
  const getClassName = () => {
    let className = 'comfort-btn';

    selected && (className += ' selected');
    disabled && (className += ' disabled');

    return className;
  }

  console.log(selected);
  console.log(getClassName());

  return (
    <button className={getClassName()} onClick={onClick}>
      {children}
    </button>
  );
}

export default ComfortButton;
