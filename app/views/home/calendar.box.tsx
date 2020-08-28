import React from 'react';
import { calendarBox, calendarRows } from './calendar.sass';
import {
  useGetCalendar,
  useDispatchCalendar,
} from '../../features/calendar/calendarSlice';
import CalendarItem from './calendar.item';
import { useGetWeather } from '../../features/weather/weatherSlice';
import { debounce } from '../../utils/utils';
import { createDateMatrix } from './calendar.utils';

function CalendarBox(): JSX.Element {
  const { current } = useGetCalendar();
  const weatherInfo = useGetWeather();
  const { updateCurrent } = useDispatchCalendar();

  const dateMatrix = createDateMatrix(current.year, current.month, weatherInfo);
  const debounceWheel = debounce(
    (wheelDeltaY: number) => {
      let { year, month } = current;
      if (wheelDeltaY > 0) {
        month++;
      } else if (wheelDeltaY < 0) {
        month--;
      }

      if (month > 12) {
        month = 1;
        year++;
      }
      if (month < 1) {
        month = 12;
        year--;
      }

      updateCurrent(year, month);
    },
    300,
    true
  );

  return (
    <div
      className={calendarBox}
      onWheel={(e) => {
        debounceWheel(e.nativeEvent.deltaY);
      }}
    >
      {dateMatrix.map((cols, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={index} className={calendarRows}>
          {cols.map((item) => (
            <CalendarItem key={item.day} item={item} current={current} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default CalendarBox;
