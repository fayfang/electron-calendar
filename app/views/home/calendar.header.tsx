import React from 'react';
import {
  calendarHeader,
  headerMonth,
  headerCity,
  headerBtn,
  btnActive,
} from './calendar.sass';
import { useGetCity } from '../../features/city/citySlice';
import {
  useGetCalendar,
  useDispatchCalendar,
} from '../../features/calendar/calendarSlice';
// export interface HeaderProps {}

export default function CalendarHeader(): JSX.Element {
  const cityInfo = useGetCity();
  const { current, showType } = useGetCalendar();
  const { updateCurrent, updateType } = useDispatchCalendar();

  function monthChange(type: string) {
    let { year, month } = current;
    const now = new Date();

    if (type === 'now') {
      year = now.getFullYear();
      month = now.getMonth() + 1;
    }

    if (showType === 'month') {
      if (type === 'add') {
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
    }
    if (showType === 'year') {
      if (type === 'add') {
        year++;
      } else if (type === 'sub') {
        year--;
      }
    }

    updateCurrent(year, month);
  }

  return (
    <div className={calendarHeader}>
      <div className={headerMonth}>{`${current.year}年${current.month}月`}</div>
      <div className={headerCity}>{`${cityInfo.province}${cityInfo.city}`}</div>
      <div className={headerBtn}>
        <div>
          <button
            type="button"
            className={showType === 'day' ? btnActive : ''}
            onClick={() => {
              updateType('day');
            }}
          >
            日
          </button>
          <button
            type="button"
            className={showType === 'month' ? btnActive : ''}
            onClick={() => {
              updateType('month');
            }}
          >
            月
          </button>
          <button
            type="button"
            className={showType === 'year' ? btnActive : ''}
            onClick={() => {
              updateType('year');
            }}
          >
            年
          </button>
        </div>
        <div>
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
    </div>
  );
}
