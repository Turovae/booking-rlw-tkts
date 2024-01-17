import './Settings.scss';

import DatePicker from "../DatePicker/DatePicker";

import secondClassIcon from './icons/have_second_class.svg';
import ToggleSwitch from '../UI/ToggleSwitch/ToggleSwitch';

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
        <ToggleSwitch
          icon={secondClassIcon}
          name='have_second_class'
          title='Купе'
          onChange={() => {console.log('change checkbox')}}
        />
      </div>
    </div>
  );
}

export default Settings;
