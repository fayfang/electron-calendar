import { Solar, HolidayUtil } from 'lunar-javascript';
import { DateItem } from './calendar.inter';
import { FORECAST, CASTITEM } from '../../features/weather/weatherInter';

export function createDateMatrix(
  year: number,
  month: number,
  weatherInfo: FORECAST
): DateItem[][] {
  const { casts } = weatherInfo;
  const castsMap: { [p: string]: CASTITEM } = {};
  casts.forEach((item) => {
    const [, m, d] = item.date.split('-');
    castsMap[`${+m}-${+d}`] = item;
  });

  const matrix = Array(6)
    .fill(null)
    .map(() => Array(7).fill(null));

  function getItem(date: Date): DateItem {
    const solar = Solar.fromDate(date);
    const lunar = solar.getLunar();

    const holiday = HolidayUtil.getHoliday(
      solar.getYear(),
      solar.getMonth(),
      solar.getDay()
    );
    let worktime = 0;
    if (holiday) {
      worktime = holiday.isWork() ? 1 : 2;
    }

    return {
      year: solar.getYear(),
      month: solar.getMonth(),
      day: solar.getDay(),
      worktime,
      lunarMonth: `${lunar.getMonthInChinese()}月`,
      lunarDay: lunar.getDayInChinese(),
      lunarDayNum: lunar.getDay(),
      term: lunar.getJie() || lunar.getQi(),
      festivals: (lunar.getFestivals() || []).concat(
        solar.getFestivals() || []
      ),
    };
  }

  const firstDate = new Date(year, month - 1, 1);
  let firstDay = firstDate.getDay();
  firstDay = firstDay === 0 ? 6 : firstDay - 1;
  for (let i = 0; i < firstDay; i++) {
    matrix[0][i] = getItem(new Date(year, month - 1, i - firstDay + 1));
  }
  for (let i = firstDay; i < 42; i++) {
    const row = Math.floor(i / 7);
    const col = i % 7;
    matrix[row][col] = getItem(new Date(year, month - 1, i - firstDay + 1));
  }

  return matrix;
}

export function getDayDetail(
  year: number,
  month: number,
  day: number,
  weatherInfo: FORECAST
): DateItem {
  const dateMatrix = createDateMatrix(year, month, weatherInfo);
  const list = ([] as DateItem[]).concat(...dateMatrix);
  return list.filter(
    (item) => item.year === year && item.month === month && item.day === day
  )[0];
}

export default {
  createDateMatrix,
};
