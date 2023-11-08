import './SearchForm.scss';

function SearchForm() {
  const cityes = ['moskow', 'novosibirsk', 'krasnoyarsk', 'kemerovo', 'achinsk'];

  return (
    <form className="search-form" action="">
      <div className="search-form__row">
        <span className="search-form__hint">Направление</span>
        <div className="search-form__inputs">
          <input type="search" list="cities" className="search-form__input" name="lacation-from" placeholder="Откуда" />
          <button type="button" className="search-form__direction-change" />
          <input type="text" list="cities" className="search-form__input" name="lacation-to" placeholder="Куда" />
          <datalist id="cities">
            {cityes.map((city) => <option key={city} value={city}>{city}</option>)}
          </datalist>
        </div>
      </div>
      <div className="search-form__row">
        <span className="search-form__hint">Дата</span>
        <div className="search-form__inputs">
          <input type="date" className="search-form__input" name="date-from" />
          <input type="date" className="search-form__input" name="date-to" />
        </div>
      </div>
      <div className="search-form__row">
        <button className="search-form__button-submit" type='button'>Найти билеты</button>
      </div>
    </form>
  )
}

export default SearchForm;
