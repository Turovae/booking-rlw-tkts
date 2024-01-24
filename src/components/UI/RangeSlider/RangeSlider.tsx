import { ChangeEvent, useEffect, useState } from 'react';
import './RangeSlider.scss';

interface RangeSliderProps {
  min: number;
  max: number;
  step?: number;
}

function RangeSlider({ min, max, step = 1 }: RangeSliderProps) {
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);

  const handleMinChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const value = Number.parseFloat(event.target.value);
    const newMinValue = Math.min(value, maxValue - step);
    setMinValue(newMinValue);
  }

  const handleMaxChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const value = Number.parseFloat(event.target.value);
    const newMaxValue = Math.max(value, minValue + step);
    setMaxValue(newMaxValue);
  }

  const minPos = ((minValue - min) / (max - min)) * 100;
  const maxPos = ((maxValue - min) / (max - min)) * 100;

  return (
    <div className="range-slider">
      <div className="range-slider__row">
        <div className="range-slider__col">от {minValue}</div>
        <div className="range-slider__col">до {maxValue}</div>
      </div>
      <div className="range-slider__body">
        <div className="range-slider__inputs">
          <input
            className='range-slider__input'
            type='range'
            value={minValue}
            min={min}
            max={max}
            step={step}
            onChange={handleMinChange}
          />
          <input
            className='range-slider__input'
            type='range'
            value={maxValue}
            min={min}
            max={max}
            step={step}
            onChange={handleMaxChange}
          />
        </div>
        <div className="range-slider__controls">
          <div
            className="range-slider__control range-slider__control-max"
            style={{
              left: `${minPos}%`
            }}
          />
          <div
            className="range-slider__control range-slider__control-max"
            style={{
              left: `${maxPos}%`,
            }}
          />
          <div
            className='range-slider__inner-rail'
            style={{
              left: `${minPos}%`,
              right: `${100 - maxPos}%`
            }}
          />
        </div>
        <div className="range-slider__rail">

        </div>
      </div>
      <div className="range-slider__row">
        <div className="range-slider__col">{min}</div>
        <div className="range-slider__col">{max}</div>
      </div>
    </div>
  );
}

export default RangeSlider;
