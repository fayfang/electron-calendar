import React from 'react';
import { calendarDay } from './calendar.sass';
import { useGetCalendar } from '../../features/calendar/calendarSlice';
import { getDayDetail } from './calendar.utils';
import { useGetWeather } from '../../features/weather/weatherSlice';

export default function Calendar(): JSX.Element {
  const { current, selectDay } = useGetCalendar();
  const weatherInfo = useGetWeather();
  const detailData = getDayDetail(
    current.year,
    current.month,
    selectDay,
    weatherInfo
  );

  return (
    <div className={calendarDay}>
      {detailData.year}
      {detailData.month}
      {detailData.day}
    </div>
  );
}
