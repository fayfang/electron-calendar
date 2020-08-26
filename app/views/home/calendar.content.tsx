import React from 'react';
import { calendarContent, calendarWeek } from './calendar.sass';
import CalendarBox from './calendar.box';

function CalendarWeek(): JSX.Element {
  const weekDays = [
    { cn: '周日', en: 'sunday' },
    { cn: '周一', en: 'monday' },
    { cn: '周二', en: 'tuesday' },
    { cn: '周三', en: 'wednesday' },
    { cn: '周四', en: 'thursday' },
    { cn: '周五', en: 'friday' },
    { cn: '周六', en: 'saturday' },
  ];

  return (
    <div className={calendarWeek}>
      {weekDays.map((item) => (
        <div key={item.en}>{item.cn}</div>
      ))}
    </div>
  );
}

export default function CalendarContent(): JSX.Element {
  return (
    <div className={calendarContent}>
      <CalendarWeek />
      <CalendarBox />
    </div>
  );
}
