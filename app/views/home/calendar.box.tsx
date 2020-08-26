import React from 'react';
import LunarCalendar from 'lunar-calendar';
import { calendarBox, calendarRows } from './calendar.sass';
import { useGetCalendar } from '../../features/calendar/calendarSlice';
import CalendarItem from './calendar.item';
import { DateItem } from './calendar.inter';
import { useGetWeather } from '../../features/weather/weatherSlice';
import { FORECAST, CASTITEM } from '../../features/weather/weatherInter';

function createDateMatrix(
  list: DateItem[],
  weatherInfo: FORECAST
): DateItem[][] {
  const dateMatrix: DateItem[][] = Array(6)
    .fill(null)
    .map(() => Array(7).fill(null));

  const { casts } = weatherInfo;
  const castsMap: { [p: string]: CASTITEM } = {};
  casts.forEach((item) => {
    const [, m, d] = item.date.split('-');
    castsMap[`${+m}-${+d}`] = item;
  });

  list.forEach((item, index) => {
    const castItem = castsMap[`${item.month}-${item.day}`];
    if (castItem) {
      dateMatrix[Math.floor(index / 7)][index % 7] = { ...item, ...castItem };
    } else {
      dateMatrix[Math.floor(index / 7)][index % 7] = { ...item };
    }
  });

  return dateMatrix;
}

function CalendarBox(): JSX.Element {
  const { current } = useGetCalendar();
  const weatherInfo = useGetWeather();
  const dateMatrix = createDateMatrix(
    LunarCalendar.calendar(current.year, current.month, true).monthData,
    weatherInfo
  );

  return (
    <div className={calendarBox}>
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
