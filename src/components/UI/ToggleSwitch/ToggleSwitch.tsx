import { useState } from "react";

import './ToggleSwitch.scss';

interface ToggleSwitchProps {
  name: string;
  icon: string;
  title: string;
  checked?: boolean;
  onChange: () => void;
}

function ToggleSwitch({
  name,
  icon,
  title,
  checked,
  onChange = () => {}
}: ToggleSwitchProps) {
  const [isChecked, setIsChecked] = useState<boolean>(checked ? checked : false)

  const handleChange = () => {
    onChange();

    setIsChecked(!isChecked);
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
          checked={isChecked}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

export default ToggleSwitch;
