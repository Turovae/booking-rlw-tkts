import './Settings.scss';

import DatePicker from "../DatePicker/DatePicker";
import ToggleSwitch from '../UI/ToggleSwitch/ToggleSwitch';

import firstClassIcon from './icons/have_first_class.svg';
import secondClassIcon from './icons/have_second_class.svg';
import thirdClassIcon from './icons/have_third_class.svg';
import fourthClassIcon from './icons/have_fourth_class.svg';
import wifiIcon from './icons/have_wifi.svg';
import airConditioningIcon from './icons/have_air_conditioning.svg';
import expressIcon from './icons/have_express.svg';
import RangeSlider, { RangeValues } from '../UI/RangeSlider/RangeSlider';
import { actions as priceRangeActions } from '../../store/reducers/PriceRangeSlice';
import { useAppDispatch } from '../../hooks/redux';


function Settings() {
  const dispatch = useAppDispatch();

  const handleChangePriceRange = ( priceRange: RangeValues ) => {
    console.log(priceRange);

    dispatch(priceRangeActions.changeAll({
      price_from: priceRange.minValue,
      price_to: priceRange.maxValue,
    }))
  }

  return (
    <div className="settings">
      <div className="settings__block">
        <div className="settings__date-row date-row">
          <div className="date-row__title">Дата поездки</div>
          <div className="date-row__input">
            <DatePicker onChangeDate={function (timestamp: number): void {
              console.log(timestamp);
              throw new Error("Function not implemented.");
            }} />
          </div>
        </div>
        <div className="settings__date-row date-row">
          <div className="date-row__title">Дата возвращения</div>
          <div className="date-row__input">
            <DatePicker onChangeDate={function (timestamp: number): void {
              console.log(timestamp);
              throw new Error("Function not implemented.");
            }} />
          </div>
        </div>
      </div>
      <div className="settings__block">
        <div className="settings__toggles">
          <ToggleSwitch
            icon={secondClassIcon}
            name='have_second_class'
            title='Купе'
          />
          <ToggleSwitch
            icon={thirdClassIcon}
            name='have_third_class'
            title='Плацкарт'
          />
          <ToggleSwitch
            icon={fourthClassIcon}
            name='have_fourth_class'
            title='Сидячий'
          />
          <ToggleSwitch
            icon={firstClassIcon}
            name='have_first_class'
            title='Люкс'
          />
          <ToggleSwitch
            icon={wifiIcon}
            name='have_wifi'
            title='Wi-Fi'
          />
          <ToggleSwitch
            icon={airConditioningIcon}
            name='have_air_conditioning'
            title='Кондиционер'
          />
          <ToggleSwitch
            icon={expressIcon}
            name='have_express'
            title='Экспресс'
          />
        </div>
      </div>
      <div className="settings__block">
        <div className="settings__title">Стоимость</div>
        {/* 
        Не понятно, откуда брать минимальное и максимальное значения цен.
        Судя по ответам сервера, фильтрация по цене происходит по значениям
        поля min_price объекта Route (/src/models/Route.ts).
        Я думаю, было бы хорошей практикой значениям min и max присвоить
        динамически минимальное и максимальное значения цен, хранящихся в БД
        но при текущей работе сервера на стороне клиента придется получить
        весь список маршрутов, перебрать его с целью найти минимальное и максимальное
        значенния, что не очень сочетается с пагинацией.
        Пока установлены фиксированные значения.
        */}
        <RangeSlider
          min={100}
          max={10000}
          onChange={handleChangePriceRange}
        />
      </div>
    </div>
  );
}

export default Settings;
