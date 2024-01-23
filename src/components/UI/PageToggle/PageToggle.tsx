import './PageToggle.scss';

interface PageToggleProps {
  count: number;
  page: number;
  setPage: (page: number) => void
}

function PageToggle({ count, page, setPage }: PageToggleProps) {
  if (count < 2) {
    return null;
  }

  const buttons = [];

  const getClassName = (index?: number | string): string => {
    const baseClass = 'page-toggle__button';

    if (index === '...') {
      return baseClass + ' disabled';
    }

    return index === page
      ? baseClass + ' active'
      : baseClass;
  }

  const setPreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  const setNextPage = () => {
    if (page < count) {
      setPage(page + 1);
    }
  }

  const createButton = (title: number | string) => {
    buttons.push(
      <button
        className={getClassName(title)}
        onClick={typeof title === 'number' ? () => setPage(title) : () => {}}
      >{title}</button>
    )
  }

  if (count < 8) {
    for (let i = 1; i <= count; i++) {
      createButton(i);
    }
  } else {
    createButton(1);

    if (page <= 4) {
      for (let i = 2; i <= 5; i++) {
        createButton(i);
      }
      createButton('...');
    } else if (page >= count - 3) {
      createButton('...');
      for (let i = count - 4; i <= count - 1; i++) {
        createButton(i);
      }
    } else {
      for (let i = -2; i <= 2; i++) {
        const current = page + i;

        if (Math.abs(i) === 2) {
          createButton('...');
        } else {
          createButton(current);
        }
      }
    }

    buttons.push(
      <button
        className={getClassName(count)}
        onClick={() => setPage(count)}
      >{count}</button>
    )
  }

  return (
    <div className="page-toggle">
      <button
        className={
          page === 1
          ? getClassName('...')
          : getClassName()
        }
        onClick={setPreviousPage}
      >{'<'}</button>

      {buttons}

      <button
        className={
          page === count
          ? getClassName('...')
          : getClassName()
        }
        onClick={setNextPage}
      >{'>'}</button>
    </div>
  )
}

export default PageToggle;
