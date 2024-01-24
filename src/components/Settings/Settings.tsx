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
import RangeSlider from '../UI/RangeSlider/RangeSlider';


function Settings() {
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
        <RangeSlider
          min={1000}
          max={6000}
        />
      </div>
    </div>
  );
}

export default Settings;
