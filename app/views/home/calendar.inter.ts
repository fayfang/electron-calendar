import { CASTITEM } from '../../features/weather/weatherInter';

export interface DateItem extends Partial<CASTITEM> {
  /** 公历年 */
  year: number;
  /** 公历月 */
  month: number;
  /** 公历日 */
  day: number;
  /** 生肖属相 */
  zodiac: string;
  /** 干支纪年 */
  GanZhiYear: string;
  /** 干支纪月 */
  GanZhiMonth: string;
  /** 干支纪日 */
  GanZhiDay: string;
  /** 0无特殊安排，1工作，2放假 */
  worktime: number;
  /** 农历年 */
  lunarYear: number;
  /** 农历月（1-13，有闰月情况，比如当前闰9月，10表示闰9月，11表示10月） */
  lunarMonth: number;
  /** 农历日 */
  lunarDay: number;
  /** 农历月中文名 */
  lunarMonthName: string;
  /** 农历日中文名 */
  lunarDayName: string;
  /** 农历闰月所在月份，0表示无闰月  */
  lunarLeapMonth: number;
  /** 公历节假日，undefined或‘劳动节’之类 */
  solarFestival?: string;
  /** 农历节假日，undefined或‘除夕’之类 */
  lunarFestival?: string;
  /** 二十四节气名，undefined或‘立春’之类 */
  term?: string;
}
