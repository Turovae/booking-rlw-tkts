import './ToggleSwitch.scss';
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { changeComfortSettings } from "../../../store/reducers/ComfortSlice";

interface ToggleSwitchProps {
  name: string;
  icon: string;
  title: string;
}

function ToggleSwitch({
  name,
  icon,
  title,
}: ToggleSwitchProps) {

  const dispatch = useAppDispatch();
  const comfortParams = useAppSelector(state => state.comfortReducer);
  const checked = comfortParams[name as keyof typeof comfortParams]

  const handleChange = () => {
    dispatch(changeComfortSettings({
      name,
      checked: !checked,
    }))
  }

  return (
    <div className="toggle-switch">
      <label className="toggle-switch__label">
        <img src={ icon } alt="" className="toggle-switch__icon" />
        <div className="toggle-switch__title">{ title }</div>
        <input
          className="toggle-switch__checkbox"
          type="checkbox"
          name={name}
          checked={checked}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

export default ToggleSwitch;
