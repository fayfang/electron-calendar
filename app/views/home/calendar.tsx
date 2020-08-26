import React from 'react';
import { calendar } from './calendar.sass';
import CalendarHeader from './calendar.header';
import CalendarContent from './calendar.content';

export default function Calendar(): JSX.Element {
  return (
    <div className={calendar}>
      <CalendarHeader />
      <CalendarContent />
    </div>
  );
}
