import React from 'react';
import { STATE } from '../../features/calendar/calendarSlice';
import { DateItem } from './calendar.inter';
import {
  calendarItem,
  calendarDay,
  carlendarItemNotCurrent,
  calendarHoliday,
  calendarWeather,
  calendarIsHoliday,
  calendarIsWork,
  blue,
} from './calendar.sass';
import holiday from './holiday';

interface ITEMPROPS extends Pick<STATE, 'current'> {
  item: DateItem;
}
export default function CalendarItem(props: ITEMPROPS): JSX.Element {
  const { item, current } = props;
  let isCurrentMonth = true;
  let isToday = false;
  const now = new Date();
  if (item.month !== current.month) {
    isCurrentMonth = false;
  }

  if (
    item.year === now.getFullYear() &&
    item.month === now.getMonth() + 1 &&
    item.day === now.getDate()
  ) {
    isToday = true;
  }

  const { workList, holidayList } = holiday;
  const fullDate = `${item.year}-${item.month}-${item.day}`;
  const isWork = workList.indexOf(fullDate) > -1;
  const isHoliday = holidayList.indexOf(fullDate) > -1;

  return (
    <div
      className={`
        ${isCurrentMonth ? calendarItem : carlendarItemNotCurrent}
        ${isWork ? calendarIsWork : ''}
        ${isHoliday ? calendarIsHoliday : ''}
      `}
      style={isToday ? { color: blue } : {}}
    >
      <div className={calendarDay}>
        <div>
          {item.lunarDay === 1 ? item.lunarMonthName : item.lunarDayName}
        </div>
        <div>
          {isHoliday ? <i className="fas fa-gift" /> : ''}
          {isWork ? <i className="fas fa-laptop" /> : ''}
          {item.day}
        </div>
      </div>
      {item.dayweather ? (
        <div className={calendarWeather}>
          <div>
            {/* <i className="fas fa-cloud" /> */}
            {`${item.dayweather}/${item.nightweather}`}
          </div>
          <div>{`${item.daytemp}°C/${item.nighttemp}°C`}</div>
        </div>
      ) : (
        ''
      )}
      <div className={calendarHoliday}>
        <div>{item.term}</div>
        <div>{item.lunarFestival}</div>
        <div>
          {(item.solarFestival || '').split(/\s/).map((sf) => (
            <div key={sf}>{sf}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
