import React from 'react';
import LunarCalendar from 'lunar-calendar';
import { calendarDay } from './calendar.sass';
import { useGetCalendar } from '../../features/calendar/calendarSlice';

export default function Calendar(): JSX.Element {
  const { current, selectDay } = useGetCalendar();
  const dayDetail = LunarCalendar.solarToLunar(
    current.year,
    current.month,
    selectDay
  );

  console.log(dayDetail);

  return (
    <div className={calendarDay}>
      {current.year}
      {current.month}
      {selectDay}
    </div>
  );
}
