import React from 'react';
import { calendarMonth } from './calendar.sass';
import {
  useDispatchCalendar,
  useGetCalendar,
} from '../../features/calendar/calendarSlice';

const monthes = [
  { name: '一月', enName: 'Jan', value: 1 },
  { name: '二月', enName: 'Feb', value: 2 },
  { name: '三月', enName: 'Mar', value: 3 },
  { name: '四月', enName: 'Apr', value: 4 },
  { name: '五月', enName: 'May', value: 5 },
  { name: '六月', enName: 'Jun', value: 6 },
  { name: '七月', enName: 'Jul', value: 7 },
  { name: '八月', enName: 'Aug', value: 8 },
  { name: '九月', enName: 'Sept', value: 9 },
  { name: '十月', enName: 'Oct', value: 10 },
  { name: '十一月', enName: 'Nov', value: 11 },
  { name: '十二月', enName: 'Dec', value: 12 },
];

export default function Calendar(): JSX.Element {
  const { updateCurrent, updateType } = useDispatchCalendar();
  const { current } = useGetCalendar();

  function handleClick(value: number) {
    updateCurrent(current.year, value);
    updateType('month');
  }

  return (
    <div className={calendarMonth}>
      {monthes.map((item, index) => (
        <div
          key={item.enName}
          role="button"
          tabIndex={index}
          onClick={() => {
            handleClick(item.value);
          }}
          onKeyDown={() => {}}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
}
