import React from 'react';
import { calendar } from './calendar.sass';
import CalendarHeader from './calendar.header';
import CalendarContent from './calendar.content';
import CalendarMonth from './calendar.month';
import CalendarDay from './calendar.day';
import { useGetCalendar } from '../../features/calendar/calendarSlice';

export default function Calendar(): JSX.Element {
  const { showType } = useGetCalendar();

  return (
    <div className={calendar}>
      <CalendarHeader />
      {showType === 'month' && <CalendarContent />}
      {showType === 'year' && <CalendarMonth />}
      {showType === 'day' && <CalendarDay />}
    </div>
  );
}
