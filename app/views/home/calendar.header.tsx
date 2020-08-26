import React from 'react';
import {
  calendarHeader,
  headerMonth,
  headerCity,
  headerBtn,
} from './calendar.sass';
import { useGetCity } from '../../features/city/citySlice';
import {
  useGetCalendar,
  useDispatchCalendar,
} from '../../features/calendar/calendarSlice';
// export interface HeaderProps {}

export default function CalendarHeader(): JSX.Element {
  const cityInfo = useGetCity();
  const { current } = useGetCalendar();
  const { updateCurrent } = useDispatchCalendar();

  function monthChange(type: string) {
    let { year } = current;
    let { month } = current;
    if (type === 'now') {
      const now = new Date();
      year = now.getFullYear();
      month = now.getMonth() + 1;
    } else if (type === 'add') {
      month++;
    } else if (type === 'sub') {
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
  }

  return (
    <div className={calendarHeader}>
      <div className={headerMonth}>{`${current.year}年${current.month}月`}</div>
      <div className={headerCity}>{`${cityInfo.province}${cityInfo.city}`}</div>
      <div className={headerBtn}>
        <button type="button" onClick={() => monthChange('sub')}>
          <i className="fas fa-chevron-left" />
        </button>
        <button type="button" onClick={() => monthChange('now')}>
          今天
        </button>
        <button type="button" onClick={() => monthChange('add')}>
          <i className="fas fa-chevron-right" />
        </button>
      </div>
    </div>
  );
}
