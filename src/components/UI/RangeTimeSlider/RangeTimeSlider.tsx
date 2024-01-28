import { ChangeEvent, useMemo, useState } from 'react';
import './RangeTimeSlider.scss';
import debounce from '../../../utils/debounce';

export interface RangeValues {
  minValue: number;
  maxValue: number;
}

interface RangeTimeSliderProps {
  onChange: (value: RangeValues) => void;
}

function RangeTimeSlider({ onChange }: RangeTimeSliderProps) {
  const min = 0;
  const max = 24;
  const step = 1;
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);

  const debounceChange = useMemo(() => {
    return debounce(onChange, 1000);
  }, [onChange]);

  const handleMinChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const value = Number.parseFloat(event.target.value);
    const newMinValue = Math.min(value, maxValue - step);
    setMinValue(newMinValue);

    debounceChange({ minValue: newMinValue, maxValue });
  }

  const handleMaxChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const value = Number.parseFloat(event.target.value);
    const newMaxValue = Math.max(value, minValue + step);
    setMaxValue(newMaxValue);

    debounceChange({ minValue, maxValue: newMaxValue });
  }

  const minPos = ((minValue - min) / (max - min)) * 100;
  const maxPos = ((maxValue - min) / (max - min)) * 100;

  return (
    <div className="range-time-slider">
      <div className="range-time-slider__row">
        <div className="range-time-slider__col">от {minValue}:00</div>
        <div className="range-time-slider__col">до {maxValue}:00</div>
      </div>
      <div className="range-time-slider__body">
        <div className="range-time-slider__inputs">
          <input
            className='range-time-slider__input'
            type='range'
            value={minValue}
            min={min}
            max={max}
            step={step}
            onChange={handleMinChange}
          />
          <input
            className='range-time-slider__input'
            type='range'
            value={maxValue}
            min={min}
            max={max}
            step={step}
            onChange={handleMaxChange}
          />
        </div>
        <div className="range-time-slider__controls">
          <div
            className="range-time-slider__control range-time-slider__control-max"
            style={{
              left: `${minPos}%`
            }}
          />
          <div
            className="range-time-slider__control range-time-slider__control-max"
            style={{
              left: `${maxPos}%`,
            }}
          />
          <div
            className='range-time-slider__inner-rail'
            style={{
              left: `${minPos}%`,
              right: `${100 - maxPos}%`
            }}
          />
        </div>
        <div className="range-time-slider__rail">

        </div>
      </div>
      <div className="range-time-slider__row">
        <div className="range-time-slider__col">{min}:00</div>
        <div className="range-time-slider__col">{max}:00</div>
      </div>
    </div>
  );
}

export default RangeTimeSlider;
